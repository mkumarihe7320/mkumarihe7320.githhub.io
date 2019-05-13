(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n  \r\n    \r\n  \r\n    <app-production-details (messageEvent)=\"receiveMessage($event)\"></app-production-details>\r\n \n \n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.counter = 0;
        this.showCartData = false;
    }
    ;
    AppComponent.prototype.showData = function () {
        this.showCartData = true;
    };
    AppComponent.prototype.receiveMessage = function ($event) {
        this.counter = $event;
        console.log(this.counter);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _production_details_production_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./production-details/production-details.component */ "./src/app/production-details/production-details.component.ts");
/* harmony import */ var _production_details_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./production-details/cart-details/cart-details.component */ "./src/app/production-details/cart-details/cart-details.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _production_details_production_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductionDetailsComponent"],
                _production_details_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_8__["CartDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__["AngularFontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/production-details/cart-details/cart-details.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/production-details/cart-details/cart-details.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Rpb24tZGV0YWlscy9jYXJ0LWRldGFpbHMvY2FydC1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/production-details/cart-details/cart-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/production-details/cart-details/cart-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf =\"cartData.length\">\r\n  <h3 style=\"float:left;\">\r\n    Cart Details\r\n  </h3>\r\n  <div style=\"float:right;\">\r\n    <table style=\"height:auto;width:50px;\" class=\"table table-hover\">\r\n      <tr>\r\n        <th>\r\n          ID\r\n        </th>\r\n        <th>\r\n          Product Name\r\n        </th>\r\n        <th>\r\n          Supplier\r\n        </th>\r\n        <th>\r\n          Quantity\r\n        </th>\r\n        <th>\r\n          Cost\r\n        </th>\r\n\r\n      </tr>\r\n      <tr *ngFor=\"let product of cartData\">\r\n        <td>{{product.id}}</td>\r\n        <td>{{product.name}}</td>\r\n        <td>{{product.supplier}}</td>\r\n        <td>{{product.quantity}}</td>\r\n        <td>{{product.unit_cost}}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\n"

/***/ }),

/***/ "./src/app/production-details/cart-details/cart-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/production-details/cart-details/cart-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: CartDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDetailsComponent", function() { return CartDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartDetailsComponent = /** @class */ (function () {
    function CartDetailsComponent() {
    }
    CartDetailsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CartDetailsComponent.prototype, "cartData", void 0);
    CartDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart-details',
            template: __webpack_require__(/*! ./cart-details.component.html */ "./src/app/production-details/cart-details/cart-details.component.html"),
            styles: [__webpack_require__(/*! ./cart-details.component.css */ "./src/app/production-details/cart-details/cart-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartDetailsComponent);
    return CartDetailsComponent;
}());



/***/ }),

/***/ "./src/app/production-details/product-data.service.ts":
/*!************************************************************!*\
  !*** ./src/app/production-details/product-data.service.ts ***!
  \************************************************************/
/*! exports provided: ProductDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDataService", function() { return ProductDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductDataService = /** @class */ (function () {
    function ProductDataService(http) {
        this.http = http;
    }
    ProductDataService.prototype.getProductData = function () {
        return this.http.get('http://localhost:3000/posts');
    };
    ProductDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductDataService);
    return ProductDataService;
}());



/***/ }),

/***/ "./src/app/production-details/production-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/production-details/production-details.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Rpb24tZGV0YWlscy9wcm9kdWN0aW9uLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/production-details/production-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/production-details/production-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"container\" style=\"color:orangered; text-align:center\">\r\n\r\n    <div class=\"jumbotron\">\r\n\r\n      <h1>\r\n        {{ title }}!\r\n      </h1>\r\n      <div style=\"float:right;\">\r\n        <i class=\"fa fa-shopping-cart\" (click)=\"showData()\" style=\"font-size:48px;color:orangered;\"><span style=\"font-size:18px;color:black; position:absolute;top:130px;right:160px;\">{{ cartCounter}}</span> </i>\r\n\r\n\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <h5>\r\n        <label>Search Product by Name</label> &nbsp; <input (input)=\"tcode=$event.target.value\" type=\"text\">\r\n      </h5>\r\n      {{tcode}}\r\n    </div>\r\n\r\n\r\n\r\n    <div style=\"text-align:center;\" class=\"col-lg-12\">\r\n\r\n      <app-cart-details [cartData]='addCart'></app-cart-details>\r\n    \r\n    <div *ngIf=\"!showCartData\">\r\n\r\n      <table class=\"table\" *ngFor=\"let product of productDetails\" >\r\n        <tr *ngIf=\"!tcode || product.product_name==tcode\" style=\"background-color:lavender;\">\r\n          <th>\r\n            ID\r\n          </th>\r\n          <th>\r\n            Product Name\r\n          </th>\r\n          <th>\r\n            Supplier\r\n          </th>\r\n          <th>\r\n            Quantity\r\n          </th>\r\n          <th>\r\n            Cost\r\n          </th>\r\n          <th>\r\n\r\n          </th>\r\n        </tr>\r\n        \r\n        <tr *ngIf=\"!tcode || product.product_name==tcode\" style=\"background-color:lavenderblush;\" >\r\n          \r\n\r\n          <td >{{product._id.$oid}}</td>\r\n          <td >{{product.product_name}}</td>\r\n          <td >{{product.supplier}}</td>\r\n          <td >{{product.quantity}}</td>\r\n          <td>{{product.unit_cost}}</td>\r\n          <td>\r\n            <a *ngIf=\"!tcode || product.product_name==tcode \"href=\"#\">\r\n              <i class=\"fa fa-plus-circle\" (click)=\"addToCart(product._id.$oid,product.product_name,product.supplier,product.quantity,product.unit_cost)\">Add to Cart</i>\r\n            </a>\r\n          </td>\r\n          </tr>\r\n        \r\n       \r\n      </table>\r\n    </div>\r\n      </div>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/production-details/production-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/production-details/production-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionDetailsComponent", function() { return ProductionDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-data.service */ "./src/app/production-details/product-data.service.ts");



var ProductionDetailsComponent = /** @class */ (function () {
    function ProductionDetailsComponent(ProductDataService) {
        this.ProductDataService = ProductDataService;
        this.title = 'AngularStore';
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cartCounter = 0;
        this.addCart = [];
    }
    ProductionDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ProductDataService.getProductData().subscribe(function (data1) {
            _this.productDetails = data1;
        });
    };
    ProductionDetailsComponent.prototype.addToCart = function (_id, _name, _supplier, _quantity, _unit_cost) {
        var temp = new Object();
        temp["id"] = _id;
        temp["name"] = _name;
        temp["supplier"] = _supplier;
        temp["quantity"] = _quantity;
        temp["unit_cost"] = _unit_cost;
        this.addCart.push(temp);
        console.log(this.addCart);
        this.cartCounter++;
        // this.messageEvent.emit(this.cartCounter);
    };
    ProductionDetailsComponent.prototype.showData = function () {
        this.showCartData = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductionDetailsComponent.prototype, "messageEvent", void 0);
    ProductionDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-production-details',
            template: __webpack_require__(/*! ./production-details.component.html */ "./src/app/production-details/production-details.component.html"),
            styles: [__webpack_require__(/*! ./production-details.component.css */ "./src/app/production-details/production-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_data_service__WEBPACK_IMPORTED_MODULE_2__["ProductDataService"]])
    ], ProductionDetailsComponent);
    return ProductionDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AngularStore\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map