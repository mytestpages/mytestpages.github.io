(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-driver-module"],{

/***/ "ircj":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/driver/orders-for-driver/orders-for-driver.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OrdersForDriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersForDriverComponent", function() { return OrdersForDriverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/order.service */ "kVqo");
/* harmony import */ var _shared_accordeon_items_accordeon_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/accordeon-items/accordeon-items.component */ "OsTQ");



class OrdersForDriverComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.displayedColumns = ['Склад', 'ШК', 'Номенклатура', 'Количество'];
    }
    ngOnInit() {
        const data = JSON.parse(localStorage.getItem('user'));
        const id = data.uid;
        this.getOrders(id);
    }
    getOrders(id) {
        this.orderService.getOrdersByDriverUid(id).subscribe((order) => {
            this.orders = order;
        });
    }
}
OrdersForDriverComponent.ɵfac = function OrdersForDriverComponent_Factory(t) { return new (t || OrdersForDriverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"])); };
OrdersForDriverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdersForDriverComponent, selectors: [["app-orders-for-driver"]], decls: 3, vars: 2, consts: [[1, "mt-5", "mb-3"], [3, "role", "orders"]], template: function OrdersForDriverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0417\u0430\u043A\u0430\u0437\u044B \u0434\u043B\u044F \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-accordeon-items", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("role", "driver")("orders", ctx.orders);
    } }, directives: [_shared_accordeon_items_accordeon_items_component__WEBPACK_IMPORTED_MODULE_2__["AccordeonItemsComponent"]], styles: ["table.mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcb3JkZXJzLWZvci1kcml2ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJvcmRlcnMtZm9yLWRyaXZlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLm1hdC10YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ "p6P7":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/driver/driver-dashboard/driver-dashboard.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DriverDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverDashboardComponent", function() { return DriverDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class DriverDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DriverDashboardComponent.ɵfac = function DriverDashboardComponent_Factory(t) { return new (t || DriverDashboardComponent)(); };
DriverDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DriverDashboardComponent, selectors: [["app-driver-dashboard"]], decls: 6, vars: 0, consts: [[1, "mt-5"], ["routerLink", "orders"], ["routerLink", "/dashboard/account-info"]], template: function DriverDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u043A\u0430\u0437\u044B \u043A \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcml2ZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "yEAY":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/driver/driver-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DriverRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverRoutingModule", function() { return DriverRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _driver_dashboard_driver_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver-dashboard/driver-dashboard.component */ "p6P7");
/* harmony import */ var _orders_for_driver_orders_for_driver_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders-for-driver/orders-for-driver.component */ "ircj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _driver_dashboard_driver_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DriverDashboardComponent"] },
    {
        path: 'orders',
        component: _orders_for_driver_orders_for_driver_component__WEBPACK_IMPORTED_MODULE_2__["OrdersForDriverComponent"],
    },
];
class DriverRoutingModule {
}
DriverRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DriverRoutingModule });
DriverRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function DriverRoutingModule_Factory(t) { return new (t || DriverRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DriverRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "z2/N":
/*!***************************************************!*\
  !*** ./src/app/dashboard/driver/driver.module.ts ***!
  \***************************************************/
/*! exports provided: DriverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverModule", function() { return DriverModule; });
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _driver_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver-routing.module */ "yEAY");
/* harmony import */ var _orders_for_driver_orders_for_driver_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders-for-driver/orders-for-driver.component */ "ircj");
/* harmony import */ var _driver_dashboard_driver_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver-dashboard/driver-dashboard.component */ "p6P7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class DriverModule {
}
DriverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DriverModule });
DriverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function DriverModule_Factory(t) { return new (t || DriverModule)(); }, providers: [], imports: [[_driver_routing_module__WEBPACK_IMPORTED_MODULE_1__["DriverRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DriverModule, { declarations: [_orders_for_driver_orders_for_driver_component__WEBPACK_IMPORTED_MODULE_2__["OrdersForDriverComponent"], _driver_dashboard_driver_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DriverDashboardComponent"]], imports: [_driver_routing_module__WEBPACK_IMPORTED_MODULE_1__["DriverRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=driver-driver-module.js.map