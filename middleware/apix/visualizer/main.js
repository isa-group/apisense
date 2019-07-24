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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");



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

module.exports = ".list-group-item-action{\r\n    padding-top: 3px !important;\r\n    padding-bottom: 3px !important;\r\n\r\n}\r\n\r\n.inside-data{\r\n    margin-top: 5px\r\n}\r\n\r\n.data-dateTime{\r\nborder-right: 1px solid;\r\n margin-right: 8px;\r\n  padding-right: 8px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsOEJBQThCOztBQUVsQzs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7QUFDQSx1QkFBdUI7Q0FDdEIsaUJBQWlCO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwLWl0ZW0tYWN0aW9ue1xyXG4gICAgcGFkZGluZy10b3A6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLmluc2lkZS1kYXRhe1xyXG4gICAgbWFyZ2luLXRvcDogNXB4XHJcbn1cclxuXHJcbi5kYXRhLWRhdGVUaW1le1xyXG5ib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcclxuIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\">\n    <title>FinalUse</title>\n\n</head>\n\n<body>\n\n    <div>\n        <div class=\"container\">\n            <div class=\"row\">\n\n                <div class=\"col-md-12 text-center\" style=\"margin-top: 20px;\">\n                    <nav class=\"navbar navbar-light navbar-expand-md navigation-clean-search\">\n                        <div class=\"container\"><a class=\"navbar-brand\" href=\"#\"><img width=\"110\" src=\"assets/images/logoApisense.png\"></a><button\n                                class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navcol-1\"><span\n                                    class=\"sr-only\">Toggle navigation</span><span\n                                    class=\"navbar-toggler-icon\"></span></button>\n                            <div class=\"collapse navbar-collapse\" id=\"navcol-1\">\n\n                                <form class=\"form-inline text-left ml-auto\" target=\"_self\" style=\"margin-right: 20px;\">\n                                    <div class=\"form-group\">\n                                        <label for=\"search-field\"\n                                            style=\"margin-left: 20px;margin-right: 10px; color: black\">Identifier:</label>\n                                        <input [(ngModel)]=\"search.anyId\"\n                                            class=\"border rounded border-primary form-control search-field\"\n                                            type=\"search\" name=\"searchid\" id=\"searchid-field\">\n                                        <label for=\"search-field\"\n                                            style=\"margin-left: 20px;margin-right: 10px; color: black\">Search in\n                                            data:</label>\n                                        <input [(ngModel)]=\"search.data\"\n                                            class=\"border rounded border-primary form-control search-field\"\n                                            type=\"search\" name=\"search\" id=\"search-field\">\n                                    </div>\n                                </form><a class=\"btn btn-light action-button\" role=\"button\"\n                                    (click)=\"updateSearch()\">Search</a>\n                            </div>\n                        </div>\n                    </nav>\n                    <hr>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12\" id=\"accordion\">\n                    <div *ngFor=\"let data of currentSearchResult; index as i; \"\n                        class=\"card bg-light\" style=\"margin-bottom: 15px;\" (click)=\"getAllInfoFor(data.sid)\">\n\n                        <div class=\"card-header\" attr.id=\"heading{{i+1}}\" data-toggle=\"collapse\"\n                            attr.data-target=\"#maincollapse{{i+1}}\">\n                            <h6 class=\"text-muted card-subtitle mb-2\"><span\n                                    class=\"badge badge-secondary\">{{data.data.method}}</span> {{data.data.timestamp | date: 'dd/MM/yyyy HH:MM:ss.SSS'}} | {{data.url}} \n                                  \n                                <div style=\"float:right\">\n                                    <span class=\"badge badge-secondary\">SID:\n                                        ..{{data.sid.substr(data.sid.length - 6)}}</span>&nbsp;\n                                    <span class=\"badge badge-primary\">TID:\n                                        ..{{data.tid.substr(data.tid.length - 6)}}</span>&nbsp;\n                                    <span class=\"badge badge-warning\">EID:\n                                        ..{{data.eid.substr(data.eid.length - 6)}}</span>&nbsp;\n\n                                </div>\n                            </h6>\n                        </div>\n                        <div attr.id=\"maincollapse{{i+1}}\" class=\"collapse multi-collapse\"\n                            attr.aria-labelledby=\"heading{{i+1}}\">\n                            <div class=\"card-body\">\n\n                                <app-data-list [datasOfRequest]=\"searchInObjectData(localStoredData,{eid: data.eid}).reverse()\"\n                                    [indexMain]=\"i\"></app-data-list>\n\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</body>\n\n<router-outlet></router-outlet>\n\n</html>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.Object = Object;
        this.title = 'apix-front';
        this.search = {};
        this.localStoredData = {};
        this.lastSearchData = {};
        this.urlService = "";
    }
    Object.defineProperty(AppComponent.prototype, "mySearchDataFunc", {
        get: function () {
            return this.searchData.bind(this);
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.callAndStoreData = function (url, updateSearchData) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.get(url).subscribe(function (res) {
                // console.log(res)
                if (updateSearchData) {
                    that.lastSearchData = {};
                }
                that.datas = res;
                for (var _i = 0, _a = that.datas; _i < _a.length; _i++) {
                    var x = _a[_i];
                    var request = {};
                    request["date"] = new Date(x.timestamp).toISOString();
                    if (x.data.headers && x.data.url) {
                        request["url"] = x.data.headers.host + x.data.url;
                    }
                    for (var k in x) {
                        request[k] = x[k];
                    }
                    if (!that.localStoredData[x.dataType]) {
                        that.localStoredData[x.dataType] = [];
                    }
                    if (!that.localStoredData[x.dataType].find(function (x) { return x["_id"] === request["_id"]; })) {
                        that.localStoredData[x.dataType].push(request);
                    }
                    if (!that.lastSearchData[x.dataType]) {
                        that.lastSearchData[x.dataType] = [];
                    }
                    if (updateSearchData) {
                        that.lastSearchData[x.dataType].push(request);
                    }
                }
                resolve();
            });
            //  console.log("DATA:" + JSON.stringify(this.localStoredData))
        });
    };
    AppComponent.prototype.searchData = function () {
        // console.log("Searching")
        var url = this.urlService + "/apisense/data?";
        if (this.search["anyId"]) {
            url += "anyId=" + this.search["anyId"] + "&";
        }
        url += "dataType=Request-Received";
        return this.callAndStoreData(url, true);
    };
    //dataObject-> Object with datas to find in.
    AppComponent.prototype.searchInObjectData = function (dataObject, mapFind, dataType) {
        var elementsToSearch;
        if (dataType != null) {
            elementsToSearch = dataObject[dataType];
        }
        else {
            elementsToSearch = [];
            Object.values(dataObject).forEach(function (x) { return elementsToSearch = elementsToSearch.concat(x); });
            //console.log("Elements to Search: " + JSON.stringify(elementsToSearch))
        }
        if (mapFind && elementsToSearch) {
            elementsToSearch = elementsToSearch.filter(function (x) {
                var result = true;
                for (var k in mapFind) {
                    if (x[k] !== mapFind[k]) {
                        result = false;
                        break;
                    }
                }
                return result;
            });
        }
        return elementsToSearch ? elementsToSearch.slice().sort(function (a, b) { return (a.timestamp > b.timestamp) ? 1 : -1; }).reverse() : []; //Return empty list if no data
    };
    AppComponent.prototype.getAllInfoFor = function (sid) {
        // console.log(sid)
        var url = this.urlService + "/apisense/data?sid=" + sid;
        this.callAndStoreData(url, false);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.updateSearch();
    };
    AppComponent.prototype.updateSearch = function () {
        var that = this;
        that.searchData().then(function () {
            that.currentSearchResult = that.searchInObjectData(that.lastSearchData, null, 'Request-Received');
        });
    };
    AppComponent.prototype.toConsoleFormat = function (datasConsole) {
        return datasConsole.map(function (x) { return x.data; }).join("");
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _data_list_data_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data-list/data-list.component */ "./src/app/data-list/data-list.component.ts");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-json-viewer */ "./node_modules/ngx-json-viewer/ngx-json-viewer.es5.js");
/* harmony import */ var _console_log_data_console_log_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./console-log-data/console-log-data.component */ "./src/app/console-log-data/console-log-data.component.ts");
/* harmony import */ var _http_data_http_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./http-data/http-data.component */ "./src/app/http-data/http-data.component.ts");
/* harmony import */ var _new_request_new_request_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-request/new-request.component */ "./src/app/new-request/new-request.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _data_list_data_list_component__WEBPACK_IMPORTED_MODULE_7__["DataListComponent"],
                _console_log_data_console_log_data_component__WEBPACK_IMPORTED_MODULE_9__["ConsoleLogDataComponent"],
                _http_data_http_data_component__WEBPACK_IMPORTED_MODULE_10__["HttpDataComponent"],
                _new_request_new_request_component__WEBPACK_IMPORTED_MODULE_11__["NewRequestComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_8__["NgxJsonViewerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/console-log-data/console-log-data.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/console-log-data/console-log-data.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item-action{\r\n    padding-top: 3px !important;\r\n    padding-bottom: 3px !important;\r\n\r\n}\r\n\r\n.inside-data{\r\n    margin-top: 5px\r\n}\r\n\r\n.data-dateTime{\r\nborder-right: 1px solid;\r\n margin-right: 8px;\r\n  padding-right: 8px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uc29sZS1sb2ctZGF0YS9jb25zb2xlLWxvZy1kYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsOEJBQThCOztBQUVsQzs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7QUFDQSx1QkFBdUI7Q0FDdEIsaUJBQWlCO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb25zb2xlLWxvZy1kYXRhL2NvbnNvbGUtbG9nLWRhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwLWl0ZW0tYWN0aW9ue1xyXG4gICAgcGFkZGluZy10b3A6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLmluc2lkZS1kYXRhe1xyXG4gICAgbWFyZ2luLXRvcDogNXB4XHJcbn1cclxuXHJcbi5kYXRhLWRhdGVUaW1le1xyXG5ib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcclxuIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/console-log-data/console-log-data.component.html":
/*!******************************************************************!*\
  !*** ./src/app/console-log-data/console-log-data.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div href=\"#2\" class=\"list-group-item list-group-item-action list-group-item-dark\">\n  <div class=\"row\">\n    <div class=\"data-dateTime\"> {{dataObject.timestamp | date: 'dd/MM/yyyy HH:MM:ss.SSS'}} </div>\n    {{dataObject.data}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/console-log-data/console-log-data.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/console-log-data/console-log-data.component.ts ***!
  \****************************************************************/
/*! exports provided: ConsoleLogDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleLogDataComponent", function() { return ConsoleLogDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");


var ConsoleLogDataComponent = /** @class */ (function () {
    function ConsoleLogDataComponent() {
        this.Object = Object;
    }
    ConsoleLogDataComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConsoleLogDataComponent.prototype, "dataObject", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConsoleLogDataComponent.prototype, "fullUIDIndex", void 0);
    ConsoleLogDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-console-log-data',
            template: __webpack_require__(/*! ./console-log-data.component.html */ "./src/app/console-log-data/console-log-data.component.html"),
            styles: [__webpack_require__(/*! ./console-log-data.component.css */ "./src/app/console-log-data/console-log-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConsoleLogDataComponent);
    return ConsoleLogDataComponent;
}());



/***/ }),

/***/ "./src/app/data-list/data-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/data-list/data-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item-action{\r\n    padding-top: 3px !important;\r\n    padding-bottom: 3px !important;\r\n\r\n}\r\n\r\n.inside-data{\r\n    margin-top: 5px\r\n}\r\n\r\n.data-dateTime{\r\nborder-right: 1px solid;\r\n margin-right: 8px;\r\n  padding-right: 8px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS1saXN0L2RhdGEtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4Qjs7QUFFbEM7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0FBQ0EsdUJBQXVCO0NBQ3RCLGlCQUFpQjtFQUNoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGF0YS1saXN0L2RhdGEtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb257XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uaW5zaWRlLWRhdGF7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHhcclxufVxyXG5cclxuLmRhdGEtZGF0ZVRpbWV7XHJcbmJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xyXG4gbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/data-list/data-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/data-list/data-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n  <div *ngFor=\"let dataObject of datasOfRequest; index as i2; \">\n    <app-console-log-data *ngIf=\"dataObject.dataType == 'consoleLog'\" [dataObject]=\"dataObject\"\n      [fullUIDIndex]=\"i2.toString()+indexMain.toString()\"> </app-console-log-data>\n    <app-http-data *ngIf=\"dataObject.dataType == 'Response-Sent' || dataObject.dataType == 'Request-Received'\"\n      [dataObject]=\"dataObject\" [fullUIDIndex]=\"i2.toString()+indexMain.toString()\"></app-http-data>\n    <app-new-request *ngIf=\"dataObject.dataType == 'Request-Sent' \"\n    [dataObject]=\"dataObject\" [fullUIDIndex]=\"i2.toString()+indexMain.toString()\"></app-new-request>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/data-list/data-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/data-list/data-list.component.ts ***!
  \**************************************************/
/*! exports provided: DataListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataListComponent", function() { return DataListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");


var DataListComponent = /** @class */ (function () {
    function DataListComponent() {
        this.Object = Object;
        this.docsCreated = {};
    }
    DataListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataListComponent.prototype, "datasOfRequest", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataListComponent.prototype, "indexMain", void 0);
    DataListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-list',
            template: __webpack_require__(/*! ./data-list.component.html */ "./src/app/data-list/data-list.component.html"),
            styles: [__webpack_require__(/*! ./data-list.component.css */ "./src/app/data-list/data-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataListComponent);
    return DataListComponent;
}());



/***/ }),

/***/ "./src/app/http-data/http-data.component.css":
/*!***************************************************!*\
  !*** ./src/app/http-data/http-data.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item-action{\r\n    padding-top: 3px !important;\r\n    padding-bottom: 3px !important;\r\n\r\n}\r\n\r\n.inside-data{\r\n    margin-top: 5px\r\n}\r\n\r\n.data-dateTime{\r\nborder-right: 1px solid;\r\n margin-right: 8px;\r\n  padding-right: 8px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHR0cC1kYXRhL2h0dHAtZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4Qjs7QUFFbEM7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0FBQ0EsdUJBQXVCO0NBQ3RCLGlCQUFpQjtFQUNoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaHR0cC1kYXRhL2h0dHAtZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb257XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uaW5zaWRlLWRhdGF7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHhcclxufVxyXG5cclxuLmRhdGEtZGF0ZVRpbWV7XHJcbmJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xyXG4gbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/http-data/http-data.component.html":
/*!****************************************************!*\
  !*** ./src/app/http-data/http-data.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group-item list-group-item-action list-group-item-success\" >\n\n  <div class=\"row\" attr.id=\"headingReq{{fullUIDIndex}}\"\n  data-toggle=\"collapse\" attr.data-target=\"#collapseReq{{fullUIDIndex}}\">\n    <div class=\"data-dateTime\"> {{dataObject.timestamp | date: 'dd/MM/yyyy HH:MM:ss.SSS'}} </div>\n    \n    {{dataObject.dataType}}\n  </div>\n\n\n  <div attr.id=\"collapseReq{{fullUIDIndex}}\" class=\"card inside-data collapse multi-collapse\"\n    attr.aria-labelledby=\"headingReq{{fullUIDIndex}}\">\n    <div class=\"card-body\">\n <h5 *ngIf=\"dataObject.data.status\"> Response Status: {{dataObject.data.status}}</h5>\n <br>\n  <h4>Headers</h4>\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Header</th>\n            <th scope=\"col\">Value</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let header of Object.keys(dataObject.data.headers)\">\n            <td>{{header}}</td>\n            <td>{{dataObject.data.headers[header]}}</td>\n          </tr>\n        </tbody>\n      </table>\n<br>\n  <h4>Body</h4>\n       <div attr.id=\"jsonView{{fullUIDIndex}}\"></div>\n      <div *ngIf= \"getJSONData(dataObject.data.body, fullUIDIndex); let bodyObj\">\n     \n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/http-data/http-data.component.ts":
/*!**************************************************!*\
  !*** ./src/app/http-data/http-data.component.ts ***!
  \**************************************************/
/*! exports provided: HttpDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpDataComponent", function() { return HttpDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var json_formatter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json-formatter-js */ "./node_modules/json-formatter-js/dist/json-formatter.js");
/* harmony import */ var json_formatter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json_formatter_js__WEBPACK_IMPORTED_MODULE_2__);



var HttpDataComponent = /** @class */ (function () {
    function HttpDataComponent() {
        this.Object = Object;
        this.docsCreated = {};
    }
    HttpDataComponent.prototype.ngOnInit = function () {
    };
    HttpDataComponent.prototype.getJSONData = function (dataObject, fullUIDIndex) {
        fullUIDIndex = fullUIDIndex.toString();
        if (dataObject) {
            var newDoc;
            try {
                newDoc = new json_formatter_js__WEBPACK_IMPORTED_MODULE_2___default.a(JSON.parse(dataObject)).render();
            }
            catch (e) {
                newDoc = document.createElement('span');
                newDoc.textContent = JSON.stringify(dataObject);
            }
            var docElem = document.getElementById("jsonView" + fullUIDIndex);
            if (!this.docsCreated[fullUIDIndex]) {
                if (docElem) {
                    docElem.appendChild(newDoc);
                    this.docsCreated[fullUIDIndex] = newDoc;
                }
            }
        }
        return true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HttpDataComponent.prototype, "dataObject", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HttpDataComponent.prototype, "fullUIDIndex", void 0);
    HttpDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-http-data',
            template: __webpack_require__(/*! ./http-data.component.html */ "./src/app/http-data/http-data.component.html"),
            styles: [__webpack_require__(/*! ./http-data.component.css */ "./src/app/http-data/http-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HttpDataComponent);
    return HttpDataComponent;
}());



/***/ }),

/***/ "./src/app/new-request/new-request.component.css":
/*!*******************************************************!*\
  !*** ./src/app/new-request/new-request.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item-action{\r\n    padding-top: 3px !important;\r\n    padding-bottom: 3px !important;\r\n\r\n}\r\n\r\n.inside-data{\r\n    margin-top: 5px\r\n}\r\n\r\n.data-dateTime{\r\nborder-right: 1px solid;\r\n margin-right: 8px;\r\n  padding-right: 8px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXJlcXVlc3QvbmV3LXJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQiw4QkFBOEI7O0FBRWxDOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtBQUNBLHVCQUF1QjtDQUN0QixpQkFBaUI7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL25ldy1yZXF1ZXN0L25ldy1yZXF1ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cC1pdGVtLWFjdGlvbntcclxuICAgIHBhZGRpbmctdG9wOiAzcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5pbnNpZGUtZGF0YXtcclxuICAgIG1hcmdpbi10b3A6IDVweFxyXG59XHJcblxyXG4uZGF0YS1kYXRlVGltZXtcclxuYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XHJcbiBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHhcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/new-request/new-request.component.html":
/*!********************************************************!*\
  !*** ./src/app/new-request/new-request.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group-item list-group-item-action list-group-item-warning\">\n  <div class=\"row\" attr.id=\"headingReq{{i2+1}}\" data-toggle=\"collapse\"\n    attr.data-target=\"#collapseReq{{i2+1}}{{indexMain}}\">\n    <div class=\"data-dateTime\"> {{dataObject.timestamp | date: 'dd/MM/yyyy HH:MM:ss.SSS'}} </div> New Request\n  </div>\n\n  <div attr.id=\"collapseReq{{i2+1}}{{indexMain}}\" class=\"card inside-data collapse multi-collapse\"\n    attr.aria-labelledby=\"headingReq{{i2+1}}\">\n    <div class=\"card-body\">\n\n      <app-data-list [datasOfRequest]=\"parent.searchInObjectData(parent.localStoredData,{eid: data.eid}).reverse()\"></app-data-list>\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/new-request/new-request.component.ts":
/*!******************************************************!*\
  !*** ./src/app/new-request/new-request.component.ts ***!
  \******************************************************/
/*! exports provided: NewRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRequestComponent", function() { return NewRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");



var NewRequestComponent = /** @class */ (function () {
    function NewRequestComponent(parent) {
        this.parent = parent;
        this.Object = Object;
    }
    NewRequestComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewRequestComponent.prototype, "dataObject", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewRequestComponent.prototype, "fullUIDIndex", void 0);
    NewRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-request',
            template: __webpack_require__(/*! ./new-request.component.html */ "./src/app/new-request/new-request.component.html"),
            styles: [__webpack_require__(/*! ./new-request.component.css */ "./src/app/new-request/new-request.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], NewRequestComponent);
    return NewRequestComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! C:\Users\Ale\Desktop\Desk\Universidad\TFG\Repositorios\APISense\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map