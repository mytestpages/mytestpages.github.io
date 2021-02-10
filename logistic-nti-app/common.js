(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "kVqo":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "3LUQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class OrderService {
    constructor(afs, alert, router) {
        this.afs = afs;
        this.alert = alert;
        this.router = router;
        this.orderCollectionRef = this.afs.collection('orders', orders => orders.orderBy('order.date', "desc"));
        this.orders = this.orderCollectionRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => data.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    getAllOrdersId() {
        return this.orders;
    }
    placeOrder(order) {
        this.afs.collection('orders').add({
            order
        }).then(response => {
            this.afs.collection('users').doc(order.user.uid).update({
                orders: firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore.FieldValue.arrayUnion(response.id)
            });
        }).then(() => {
            this.router.navigate(['/user/my-orders']);
            this.alert.success("Заказ оформлен");
        });
    }
    getUserOrdersList(userId) {
        const userDoc = this.afs.doc(`users/${userId}`);
        const userData$ = userDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return data.payload.data();
        }));
        return userData$;
    }
    getOrderById(id) {
        const orderDoc = this.afs.doc(`orders/${id}`);
        const orderData$ = orderDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return data.payload.data();
        }));
        return orderData$;
    }
    changeOrderStatus(orderId, newStatus) {
        this.afs.collection('orders').doc(orderId).update({
            "order.status": newStatus
        }).then(() => {
            this.alert.changeStatusInfo(orderId, newStatus);
        });
    }
    getOrdersByStatus(stat) {
        const collectionRef = this.afs.collection("orders", orders => orders.where('order.status', '==', stat).orderBy('order.date', 'desc'));
        const resultDocuments$ = collectionRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => data.map(a => {
            const id = a.payload.doc.id;
            return Object.assign(Object.assign({}, a.payload.doc.data()), { id });
        })));
        return resultDocuments$;
    }
    docChanges(id) {
        return this.afs.doc(`orders/${id}`).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(doc => {
            const data = doc.payload.data();
            const id = doc.payload.id;
            return Object.assign(Object.assign({}, data), { id });
        }));
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map