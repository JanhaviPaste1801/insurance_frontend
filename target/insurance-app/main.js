(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jpaste\Downloads\insurance-app\insurance-app\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notification.service */ "OC8m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function HeaderComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_6_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.profile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_6_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome ", ctx_r2.userName, " ");
} }
class HeaderComponent {
    constructor(router, authService, userService, notifyService) {
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.notifyService = notifyService;
        this.userRole = "USER";
        this.userLoginFlag = false;
        this.userLogoutFlag = false;
        // adminLoginFlag:boolean = false;
        // isAdminLoggedIn():boolean{
        //   this.adminLoginFlag = this.authService.authenticate("admin@gmail.com","admin");
        //   console.log(this.adminLoginFlag);
        //   return this.adminLoginFlag
        // }
        this.isLoggedInFlag = this.authService.login;
    }
    ngOnInit() {
        this.userName = this.authService.getUserName();
        console.log(this.userName);
    }
    logout() {
        this.notifyService.showSuccessWithTimeout("Logged Out successfully !!", "Notification", 1500);
        this.authService.removeUserName();
        console.log(this.userName);
        this.authService.logOutUserName();
        this.authService.logOutUserId();
        this.router.navigate(['/user-login']);
    }
    profile() {
        // if(this.authService.getUserName() === 'Admin')
        // this.router.navigate(['admin-profile'])
        this.userService.getUser(+this.authService.getUserId()).subscribe((userr) => {
            this.userInfo = userr;
            console.log(this.userInfo.role);
            if (this.userInfo.role == 'USER') {
                this.router.navigate(['profile']);
            }
            else if (this.userInfo.role == 'SUPERADMIN') {
                this.router.navigate(['super-admin-profile']);
            }
            else {
                this.router.navigate(['admin-profile']);
            }
        });
    }
    isLoggedInUser() {
        this.user = this.authService.getUserId();
        if (this.user != null) {
            this.userLoginFlag = true;
        }
        return this.userLoginFlag;
    }
    isLoggedOut() {
        return this.userLogoutFlag = this.authService.removeUserId();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary"], ["src", "assets/bajaj1.png", 2, "max-width", "15%"], [1, "navbar-nav", "mr-auto"], ["class", "nav-item active", 4, "ngIf"], ["class", "navbar-nav ml-auto", 4, "ngIf"], [1, "nav-item", "active"], ["routerLink", "/", 1, "nav-link", "btn", "btn-primary"], [1, "navbar-nav", "ml-auto"], ["routerLink", "/user-login", 1, "nav-link", "btn", "btn-primary"], ["routerLink", "/register", 1, "nav-link", "btn", "btn-primary"], [1, "nav-item", "active", 2, "align-content", "center", "color", "darkblue"], [1, "nav-link", "justify-content-center"], [1, "nav-link", "btn", "btn-primary", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_li_4_Template, 3, 0, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_ul_5_Template, 7, 0, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_ul_6_Template, 10, 1, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.isUserLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isUserLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".nav-link[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    border-radius: 8px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgIl19 */"] });


/***/ }),

/***/ "2hxB":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "4Ezj":
/*!*********************************************************************!*\
  !*** ./src/app/components/search-policy/search-policy.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPolicyComponent", function() { return SearchPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/policy.service */ "Ypg5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");





function SearchPolicyComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const policy_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r1.policyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r1.policyType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r1.duration);
} }
class SearchPolicyComponent {
    constructor(policyservice) {
        this.policyservice = policyservice;
        this.searchText = '';
    }
    ngOnInit() {
        this.policyservice.getPolicyList().subscribe(res => this.policies = res);
    }
}
SearchPolicyComponent.ɵfac = function SearchPolicyComponent_Factory(t) { return new (t || SearchPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_1__["PolicyService"])); };
SearchPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchPolicyComponent, selectors: [["app-search-policy"]], decls: 17, vars: 5, consts: [[1, "container", "text-center"], [1, "container"], [1, "row"], [1, "search-hero"], ["type", "text", "name", "search", "autocomplete", "off", "placeholder", "search", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"]], template: function SearchPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPolicyComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Policy Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Policy Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Duartion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SearchPolicyComponent_tr_15_Template, 7, 3, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 2, ctx.policies, ctx.searchText));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtcG9saWN5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "6b2e":
/*!***********************************************************************************!*\
  !*** ./src/app/components/admin-policy-details/admin-policy-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AdminPolicyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPolicyDetailsComponent", function() { return AdminPolicyDetailsComponent; });
/* harmony import */ var src_app_models_policy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/policy */ "Ig6D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification.service */ "OC8m");
/* harmony import */ var src_app_services_claimed_policy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/claimed-policy.service */ "WAZS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/policy.service */ "Ypg5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AdminPolicyDetailsComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "POLICY HOLDERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "THIS POLICY HAS NOT BEEN TAKEN BY ANYONE YET");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminPolicyDetailsComponent_div_25_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("Policy Holder ID : ", user_r3.userId, "=>", user_r3.firstName, " ", user_r3.lastName, "");
} }
function AdminPolicyDetailsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "POLICY HOLDERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminPolicyDetailsComponent_div_25_div_4_Template, 4, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.users);
} }
class AdminPolicyDetailsComponent {
    constructor(authService, notifyService, claimService, router, route, policyService, claimedPolicyService) {
        this.authService = authService;
        this.notifyService = notifyService;
        this.claimService = claimService;
        this.router = router;
        this.route = route;
        this.policyService = policyService;
        this.claimedPolicyService = claimedPolicyService;
        this.isUserListNotEmptyFlag = true;
        this.claimPolicy = {
            userId: undefined,
            policyId: undefined,
            claimedDate: undefined,
            status: undefined
        };
    }
    ngOnInit() {
        this.policy = new src_app_models_policy__WEBPACK_IMPORTED_MODULE_0__["Policy"]();
        this.policyId = this.route.snapshot.params['policyId'];
        this.policyService.getPolicy(this.policyId)
            .subscribe(data => {
            console.log(data);
            this.policy = data;
        }, error => console.log(error));
        this.claimedPolicyService.getPolicyHoldersByPolicy(this.policyId)
            .subscribe(data => {
            this.users = data;
            this.isUserListNotEmptyFlag = true;
            console.log(data);
            console.log(this.isUserListNotEmptyFlag);
        }, error => {
            this.isUserListNotEmptyFlag = false;
            console.log(this.isUserListNotEmptyFlag);
            console.log(error);
        });
    }
    isUserListNotEmpty() {
        return this.isUserListNotEmptyFlag;
    }
    buy() {
        this.claimPolicy.policyId = this.route.snapshot.params['policyId'];
        console.log(this.claimPolicy.policyId);
        this.claimPolicy.userId = +this.authService.getUserId();
        this.claimService.addClaimedPolicy(this.claimPolicy).subscribe(data => {
            this.claim = data;
            this.planId = this.claim.planId;
            alert("Claimed successfully");
            this.notifyService.showSuccessWithTimeout("Policy claimed Successfully !!", "Notification", 2000);
            console.log(data);
            this.router.navigate(['user-claimed-policy-details', +this.authService.getUserId(), this.planId]);
        }, error => {
            this.notifyService.showErrorWithTimeout("This policy has already been claimed !!", "Warning", 2000);
            //alert("Already Claimed")
            console.log(error);
        });
    }
    back() {
        this.router.navigate(['admin-policy-list']);
    }
    updatePolicy(policyId) {
        this.router.navigate(['updatePolicy', policyId])
            .then(() => {
            console.log(this.policy);
            this.router.navigate(['admin-policy-list']);
        });
    }
}
AdminPolicyDetailsComponent.ɵfac = function AdminPolicyDetailsComponent_Factory(t) { return new (t || AdminPolicyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_claimed_policy_service__WEBPACK_IMPORTED_MODULE_4__["ClaimedPolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_6__["PolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_claimed_policy_service__WEBPACK_IMPORTED_MODULE_4__["ClaimedPolicyService"])); };
AdminPolicyDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminPolicyDetailsComponent, selectors: [["app-admin-policy-details"]], decls: 30, vars: 8, consts: [["id", "team", 1, "pb-5"], [1, "container", 2, "align-content", "center"], [1, "section-title", 2, "text-align", "center"], [1, "row", 2, "align-content", "center"], [1, "container"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12"], [1, "card"], [1, "card-body", "text-center"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-success", "btn-sm", 3, "click"], ["class", "col-xs-12 col-sm-12 col-md-12 justify-content-center", 4, "ngIf"], ["class", "col-xs-12 col-sm-6 col-md-12 justify-content-center", 4, "ngIf"], [1, "text-center", 2, "align-content", "center"], [1, "btn", "btn-primary", "btn-lg", 2, "text-align", "center", "align-content", "center", 3, "click"], [1, "col-xs-12", "col-sm-12", "col-md-12", "justify-content-center"], [1, "card-header", "bg-info", 2, "text-align", "center"], [1, "card-text", "text-danger"], [1, "col-xs-12", "col-sm-6", "col-md-12", "justify-content-center"], ["class", "card card-body text-center", 4, "ngFor", "ngForOf"], [1, "card", "card-body", "text-center"]], template: function AdminPolicyDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminPolicyDetailsComponent_Template_button_click_21_listener() { return ctx.buy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Claim Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AdminPolicyDetailsComponent_div_24_Template, 9, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AdminPolicyDetailsComponent_div_25_Template, 5, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminPolicyDetailsComponent_Template_button_click_28_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.policy.policyName, " Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.policy.policyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Type: ", ctx.policy.policyType, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Duration (in years) : ", ctx.policy.duration, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Starting At : Rs. ", ctx.policy.premiumAmount / 12, "/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Description : ", ctx.policy.description, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isUserListNotEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUserListNotEmpty());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1wb2xpY3ktZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "7fhm":
/*!***************************************************************!*\
  !*** ./src/app/components/add-policy/add-policy.component.ts ***!
  \***************************************************************/
/*! exports provided: AddPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPolicyComponent", function() { return AddPolicyComponent; });
/* harmony import */ var src_app_models_policy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/policy */ "Ig6D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification.service */ "OC8m");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/policy.service */ "Ypg5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AddPolicyComponent_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddPolicyComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const policyType_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", policyType_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](policyType_r2);
} }
class AddPolicyComponent {
    constructor(notifyService, router, policyService, fb) {
        this.notifyService = notifyService;
        this.router = router;
        this.policyService = policyService;
        this.fb = fb;
        this.policy = new src_app_models_policy__WEBPACK_IMPORTED_MODULE_0__["Policy"]();
        this.policyTypes = ['Medical Insurance', 'Individual Coverage', 'Senior Citizen Coverage', 'family floater Coverage', 'Unit Linked Health Plans'];
        // UserName Validations
        this.nameFlag = false;
        this.buttonFlag = true;
    }
    ngOnInit() {
        this.policyForm = this.fb.group({
            policyControl: ['Policy Type']
        });
    }
    add() {
        console.log(this.policy);
        this.policyService.createPolicy(this.policy).subscribe(data => {
            this.notifyService.showSuccessWithTimeout("Added Successfully!!", "Notification", 2000);
            // alert("Added successfully"),
            this.router.navigate(['admin-policy-list']);
        }, error => {
            console.log(error);
            this.notifyService.showErrorWithTimeout("ERROR while Adding the Policy!!", "Warning", 2000);
            //alert("Error while Adding");
            this.router.navigate(["admin-policy-list"]);
        });
    }
    validateName() {
        var flag = /^[a-zA-Z ]+$/.test(this.policy.policyName);
        if (!flag) {
            this.nameFlag = true;
        }
        else {
            this.nameFlag = false;
        }
    }
    enableButton() {
        this.buttonFlag = this.nameFlag;
    }
    go() {
        this.router.navigate(['admin-policy-list']);
    }
}
AddPolicyComponent.ɵfac = function AddPolicyComponent_Factory(t) { return new (t || AddPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_4__["PolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"])); };
AddPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddPolicyComponent, selectors: [["app-add-policy"]], decls: 31, vars: 9, consts: [[1, "wrapper"], [1, "row"], [1, "card", "col-md-4", "offset-md-4", "shadow-lg", "p-3", "mb-5", "bg-white"], [2, "margin-top", "20px", "font-size", "x-large", "text-align", "center"], ["type", "text", "name", "fname", "ng-pattern", "/^[a-zA-Z'. -]+$/", 1, "form-control", 3, "ngModel", "blur", "ngModelChange"], ["style", "color: red;", 4, "ngIf"], ["type", "number", "name", "duration", "ng-pattern", "/[0-9]/", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "ng-pattern", "/[0-9]/", "name", "amount", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "formGroup"], ["formControlName", "policyControl", "aria-label", ".form-select-lg example", 1, "form-select", "form-select-lg", "mb-3", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "name", "desc", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", 2, "align-content", "center"], [1, "regBtn", "btn", "btn-success", 3, "disabled", "click"], [1, "text-center"], ["id", "ExplPlanbtn", 1, "btn", "btn-primary", 3, "click"], [2, "color", "red"], [3, "value"]], template: function AddPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Enter Policy Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Policy Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function AddPolicyComponent_Template_input_blur_7_listener() { ctx.validateName(); return ctx.enableButton(); })("ngModelChange", function AddPolicyComponent_Template_input_ngModelChange_7_listener($event) { return ctx.policy.policyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AddPolicyComponent_small_8_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Duration : (in years) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPolicyComponent_Template_input_ngModelChange_11_listener($event) { return ctx.policy.duration = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Amount : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPolicyComponent_Template_input_ngModelChange_14_listener($event) { return ctx.policy.premiumAmount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Policy Type :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPolicyComponent_Template_select_ngModelChange_19_listener($event) { return ctx.policy.policyType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AddPolicyComponent_option_20_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Description : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPolicyComponent_Template_textarea_ngModelChange_23_listener($event) { return ctx.policy.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPolicyComponent_Template_button_click_26_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " ADD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPolicyComponent_Template_button_click_29_listener() { return ctx.go(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Go Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.policy.policyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nameFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.policy.duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.policy.premiumAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.policyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.policy.policyType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.policyTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.policy.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.buttonFlag);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"]], styles: [".wrapper[_ngcontent-%COMP%]{\r\n    min-height: 90vh;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n  }\r\n  .row[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n  }\r\n  .card[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n  .regBtn[_ngcontent-%COMP%]{\r\n    border-radius: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 100px;\r\n    margin-bottom: 25px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wb2xpY3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJhZGQtcG9saWN5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAucm93e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5yZWdCdG57XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuICJdfQ== */"] });


/***/ }),

/***/ "9eyB":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/adminview-policy-details/adminview-policy-details.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AdminviewPolicyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminviewPolicyDetailsComponent", function() { return AdminviewPolicyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_claimed_policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/claimed-policy.service */ "WAZS");
/* harmony import */ var src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/policy.service */ "Ypg5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AdminviewPolicyDetailsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminviewPolicyDetailsComponent_div_4_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.go(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Policy Holders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const policies_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policies_r1.policyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Policy ID :", policies_r1.policyId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Duration (in years) :", policies_r1.duration, "");
} }
class AdminviewPolicyDetailsComponent {
    constructor(claimPolicyService, policyService, router, route) {
        this.claimPolicyService = claimPolicyService;
        this.policyService = policyService;
        this.router = router;
        this.route = route;
        this.policy = [];
    }
    ngOnInit() {
        this.policyService.getPolicyList().subscribe((policyList) => {
            this.policy = policyList;
            console.log(this.policy);
        });
    }
    go() {
        this.router.navigate(['user-login']);
    }
}
AdminviewPolicyDetailsComponent.ɵfac = function AdminviewPolicyDetailsComponent_Factory(t) { return new (t || AdminviewPolicyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_claimed_policy_service__WEBPACK_IMPORTED_MODULE_1__["ClaimedPolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_2__["PolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
AdminviewPolicyDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminviewPolicyDetailsComponent, selectors: [["app-adminview-policy-details"]], decls: 8, vars: 1, consts: [[1, "pb-5"], [1, "container"], [1, "section-title", 2, "text-align", "center"], [1, "row"], ["class", "col-xs-4 col-sm-4 col-md-4", 4, "ngFor", "ngForOf"], [1, "text-center"], ["id", "ExplPlanbtn", 1, "btn", "btn-primary", 3, "click"], [1, "col-xs-4", "col-sm-4", "col-md-4"], [1, "card"], [1, "card-body", "text-center"], [1, "card-header", "bg-info"], [1, "card-text"], [1, "btn", "btn-sm", "btn-primary", 3, "click"]], template: function AdminviewPolicyDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminviewPolicyDetailsComponent_div_4_Template, 14, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminviewPolicyDetailsComponent_Template_button_click_6_listener() { return ctx.go(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Go Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.policy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbnZpZXctcG9saWN5LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "A6Xv":
/*!*******************************************************************************!*\
  !*** ./src/app/components/superadmin-profile/superadmin-profile.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SuperadminProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperadminProfileComponent", function() { return SuperadminProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");




class SuperadminProfileComponent {
    constructor(router, authService, userService, route) {
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.route = route;
    }
    ngOnInit() {
        this.userService.getUser(+this.authService.getUserId()).subscribe(data => {
            this.user = data;
            console.log(this.user);
            // this.reload();
        }, error => {
            console.log(error);
        });
    }
    // reload():void{
    //   window.location.reload();
    // }
    go() {
        this.router.navigate(['admin-policy-list']);
    }
}
SuperadminProfileComponent.ɵfac = function SuperadminProfileComponent_Factory(t) { return new (t || SuperadminProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
SuperadminProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuperadminProfileComponent, selectors: [["app-superadmin-profile"]], decls: 68, vars: 8, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-warning"], [1, "navbar-nav"], [1, "nav-item", "active"], ["routerLink", "/user-list", 1, "nav-link", "btn", "btn-warning"], ["routerLink", "/admin-policy-list", 1, "nav-link", "btn", "btn-warning"], ["routerLink", "/admin-userpolicy-details", 1, "nav-link", "btn", "btn-warning"], [1, "container"], [1, "main-body"], [1, "row", "gutters-sm"], [1, "col-md-4", "mb-3"], [1, "card"], [1, "card-body"], [1, "d-flex", "flex-column", "align-items-center", "text-center"], ["src", "data:image/png;base64,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", "alt", "Admin", "width", "150", 1, "rounded-circle"], [1, "mt-3"], [1, "col-md-8"], [1, "card", "mb-3"], [1, "row"], [1, "col-sm-3"], [1, "mb-0"], [1, "col-sm-9", "text-secondary"]], template: function SuperadminProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "USERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "PLANS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "POLICY HOLDERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "ROLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user.firstName, " ", ctx.user.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.user.firstName, " ", ctx.user.lastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.phoneNo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.role, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBlcmFkbWluLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BhhM":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterPipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(it => {
            return it.toLocaleLowerCase().includes(searchText);
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "appFilter", type: FilterPipe, pure: true });


/***/ }),

/***/ "C32k":
/*!*************************************************************************!*\
  !*** ./src/app/components/home-background/home-background.component.ts ***!
  \*************************************************************************/
/*! exports provided: HomeBackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBackgroundComponent", function() { return HomeBackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeBackgroundComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeBackgroundComponent.ɵfac = function HomeBackgroundComponent_Factory(t) { return new (t || HomeBackgroundComponent)(); };
HomeBackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeBackgroundComponent, selectors: [["app-home-background"]], decls: 26, vars: 0, consts: [[1, "image"]], template: function HomeBackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".image[_ngcontent-%COMP%]{\r\n    background-image: url('1.jpg');\r\n    height: 100%;\r\n    width: 100%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    \r\n \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtYmFja2dyb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7O0FBRWhDIiwiZmlsZSI6ImhvbWUtYmFja2dyb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcxLmpwZycpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cclxuIFxyXG59Il19 */"] });


/***/ }),

/***/ "CImy":
/*!*********************************************************************************!*\
  !*** ./src/app/components/claimed-policy-page/claimed-policy-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ClaimedPolicyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimedPolicyPageComponent", function() { return ClaimedPolicyPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ClaimedPolicyPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ClaimedPolicyPageComponent.ɵfac = function ClaimedPolicyPageComponent_Factory(t) { return new (t || ClaimedPolicyPageComponent)(); };
ClaimedPolicyPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClaimedPolicyPageComponent, selectors: [["app-claimed-policy-page"]], decls: 2, vars: 0, template: function ClaimedPolicyPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "claimed-policy-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGFpbWVkLXBvbGljeS1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");




class ProfileComponent {
    constructor(router, authService, userService, route) {
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.route = route;
    }
    ngOnInit() {
        this.userService.getUser(+this.authService.getUserId()).subscribe(data => {
            this.user = data;
            console.log(this.user);
        }, error => {
            console.log(error);
        });
    }
    explore() {
        this.userId = +this.authService.getUserId();
        this.router.navigate(['user-holded-policies', this.userId]);
    }
    go() {
        this.router.navigate(['user-home-page']);
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 60, vars: 8, consts: [[1, "container"], [1, "main-body"], [1, "row", "gutters-sm"], [1, "col-md-4", "mb-3"], [1, "card"], [1, "card-body"], [1, "d-flex", "flex-column", "align-items-center", "text-center"], ["src", "data:image/png;base64,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", "alt", "Admin", "width", "150", 1, "rounded-circle"], [1, "mt-3"], [1, "col-md-8"], [1, "card", "mb-3"], [1, "row"], [1, "col-sm-3"], [1, "mb-0"], [1, "col-sm-9", "text-secondary"], [1, "text-center"], ["title", "Explore Our Best Health Plans", 1, "btn", "btn-success", "btn-lg", 3, "click"], ["id", "ExplPlanbtn", 1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "ROLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_49_listener() { return ctx.explore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " View Your Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_58_listener() { return ctx.go(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Go Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user.firstName, " ", ctx.user.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.user.firstName, " ", ctx.user.lastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.phoneNo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.role, " ");
    } }, styles: ["body[_ngcontent-%COMP%]{\r\n    margin-top:20px;\r\n    color: #1a202c;\r\n    text-align: left;\r\n    background-color: #e2e8f0;    \r\n}\r\n.main-body[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 0 solid rgba(0,0,0,.125);\r\n    border-radius: .25rem;\r\n}\r\n.card-body[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n    min-height: 1px;\r\n    padding: 1rem;\r\n}\r\n.gutters-sm[_ngcontent-%COMP%] {\r\n    margin-right: -8px;\r\n    margin-left: -8px;\r\n}\r\n.gutters-sm[_ngcontent-%COMP%] > .col[_ngcontent-%COMP%], .gutters-sm[_ngcontent-%COMP%] > [class*=col-][_ngcontent-%COMP%] {\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n}\r\n.mb-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem!important;\r\n}\r\n.bg-gray-300[_ngcontent-%COMP%] {\r\n    background-color: #e2e8f0;\r\n}\r\n.h-100[_ngcontent-%COMP%] {\r\n    height: 100%!important;\r\n}\r\n.shadow-none[_ngcontent-%COMP%] {\r\n    box-shadow: none!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUVBQW1FO0FBQ3ZFO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIGNvbG9yOiAjMWEyMDJjO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7ICAgIFxyXG59XHJcbi5tYWluLWJvZHkge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG4uY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xKSwgMCAxcHggMnB4IDAgcmdiYSgwLDAsMCwuMDYpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDAgc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5ndXR0ZXJzLXNtIHtcclxuICAgIG1hcmdpbi1yaWdodDogLThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG59XHJcblxyXG4uZ3V0dGVycy1zbT4uY29sLCAuZ3V0dGVycy1zbT5bY2xhc3MqPWNvbC1dIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcbi5tYi0zLCAubXktMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLWdyYXktMzAwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XHJcbn1cclxuLmgtMTAwIHtcclxuICAgIGhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XHJcbn1cclxuLnNoYWRvdy1ub25lIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "E//v":
/*!***********************************************!*\
  !*** ./src/app/services/authguard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardService", function() { return AuthguardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthguardService {
    constructor() { }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('userId');
        console.log(!(user === null));
        return !(user === null);
    }
}
AuthguardService.ɵfac = function AuthguardService_Factory(t) { return new (t || AuthguardService)(); };
AuthguardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthguardService, factory: AuthguardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "FBU2":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin-profile/admin-profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfileComponent", function() { return AdminProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");




class AdminProfileComponent {
    constructor(router, authService, userService, route) {
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.route = route;
    }
    ngOnInit() {
        this.userService.getUser(+this.authService.getUserId()).subscribe(data => {
            this.user = data;
            console.log(this.user);
        }, error => {
            console.log(error);
        });
    }
    go() {
        this.router.navigate(['admin-policy-list']);
    }
}
AdminProfileComponent.ɵfac = function AdminProfileComponent_Factory(t) { return new (t || AdminProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
AdminProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminProfileComponent, selectors: [["app-admin-profile"]], decls: 57, vars: 8, consts: [[1, "container"], [1, "main-body"], [1, "row", "gutters-sm"], [1, "col-md-4", "mb-3"], [1, "card"], [1, "card-body"], [1, "d-flex", "flex-column", "align-items-center", "text-center"], ["src", "data:image/png;base64,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", "alt", "Admin", "width", "150", 1, "rounded-circle"], [1, "mt-3"], [1, "col-md-8"], [1, "card", "mb-3"], [1, "row"], [1, "col-sm-3"], [1, "mb-0"], [1, "col-sm-9", "text-secondary"], [1, "text-center"], ["id", "ExplPlanbtn", 1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function AdminProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "ROLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProfileComponent_Template_button_click_55_listener() { return ctx.go(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Go Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user.firstName, " ", ctx.user.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.user.firstName, " ", ctx.user.lastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.phoneNo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.role, " ");
    } }, styles: ["body[_ngcontent-%COMP%]{\r\n    margin-top:20px;\r\n    color: #1a202c;\r\n    text-align: left;\r\n    background-color: #e2e8f0;    \r\n}\r\n.main-body[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 0 solid rgba(0,0,0,.125);\r\n    border-radius: .25rem;\r\n}\r\n.card-body[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n    min-height: 1px;\r\n    padding: 1rem;\r\n}\r\n.gutters-sm[_ngcontent-%COMP%] {\r\n    margin-right: -8px;\r\n    margin-left: -8px;\r\n}\r\n.gutters-sm[_ngcontent-%COMP%] > .col[_ngcontent-%COMP%], .gutters-sm[_ngcontent-%COMP%] > [class*=col-][_ngcontent-%COMP%] {\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n}\r\n.mb-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem!important;\r\n}\r\n.bg-gray-300[_ngcontent-%COMP%] {\r\n    background-color: #e2e8f0;\r\n}\r\n.h-100[_ngcontent-%COMP%] {\r\n    height: 100%!important;\r\n}\r\n.shadow-none[_ngcontent-%COMP%] {\r\n    box-shadow: none!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUVBQW1FO0FBQ3ZFO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoiYWRtaW4tcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIGNvbG9yOiAjMWEyMDJjO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7ICAgIFxyXG59XHJcbi5tYWluLWJvZHkge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG4uY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xKSwgMCAxcHggMnB4IDAgcmdiYSgwLDAsMCwuMDYpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDAgc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5ndXR0ZXJzLXNtIHtcclxuICAgIG1hcmdpbi1yaWdodDogLThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG59XHJcblxyXG4uZ3V0dGVycy1zbT4uY29sLCAuZ3V0dGVycy1zbT5bY2xhc3MqPWNvbC1dIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcbi5tYi0zLCAubXktMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLWdyYXktMzAwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XHJcbn1cclxuLmgtMTAwIHtcclxuICAgIGhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XHJcbn1cclxuLnNoYWRvdy1ub25lIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "Ig6D":
/*!**********************************!*\
  !*** ./src/app/models/policy.ts ***!
  \**********************************/
/*! exports provided: Policy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Policy", function() { return Policy; });
class Policy {
}


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "material-icons", "tiny", 2, "text-align", "center"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copyright \u00A92021. Bajaj Insurance. All rights reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".material-icons[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 3px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCO0FBQ0oiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAzcHhcclxufSJdfQ== */"] });


/***/ }),

/***/ "OC8m":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");


class NotificationService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    showSuccessWithTimeout(message, title, timespan) {
        this.toastr.success(message, title, {
            timeOut: timespan
        });
    }
    showErrorWithTimeout(message, title, timespan) {
        this.toastr.error(message, title, {
            timeOut: timespan
        });
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "P5rk":
/*!*****************************************************************!*\
  !*** ./src/app/components/update-user/update-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: UpdateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserComponent", function() { return UpdateUserComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function UpdateUserComponent_small_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateUserComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateUserComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateUserComponent_small_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateUserComponent_small_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid City");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UpdateUserComponent {
    constructor(router, userService, route, formBuilder) {
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.formBuilder = formBuilder;
        // UserName Validations
        this.nameFlag = false;
        // UserPhone valdiations
        this.phoneFlag = false;
        //UserEmail Validation
        this.emailFlag = false;
        this.buttonFlag = true;
    }
    ngOnInit() {
        this.userService.getUser(+this.route.snapshot.params['userId']).subscribe((userInfo) => {
            this.user = userInfo;
            console.log(this.user);
            this.userForm.get('firstName').setValue(this.user.firstName);
            this.userForm.get('lastName').setValue(this.user.lastName);
            this.userForm.get('city').setValue(this.user.city);
            this.userForm.get('phoneNo').setValue(this.user.phoneNo);
            this.userForm.get('password').setValue(this.user.password);
            this.userForm.get('email').setValue(this.user.email);
            this.userForm.get('role').setValue(this.user.role);
            this.userForm.get('status').setValue(this.user.status);
        });
        this.userForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]],
            phoneNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    get firstName() {
        return this.userForm.get('firstName');
    }
    get lastName() {
        return this.userForm.get('lastName');
    }
    get city() {
        return this.userForm.get('city');
    }
    get phoneNo() {
        return this.userForm.get('phoneNo');
    }
    get password() {
        return this.userForm.get('password');
    }
    get email() {
        return this.userForm.get('email');
    }
    get role() {
        return this.userForm.get('role');
    }
    get status() {
        return this.userForm.get('status');
    }
    validateName() {
        var flag = /^[a-zA-Z ]+$/.test(this.user.firstName);
        if (!flag) {
            this.nameFlag = true;
        }
        else {
            this.nameFlag = false;
        }
    }
    validatePhone() {
        let phone = String(this.user.phoneNo);
        if (phone.length != 10) {
            this.phoneFlag = true;
        }
        else {
            this.phoneFlag = false;
        }
    }
    validateEmail() {
        var flag = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email);
        if (!flag) {
            this.emailFlag = true;
        }
        else {
            this.emailFlag = false;
        }
    }
    enableButton() {
        this.buttonFlag = this.nameFlag || this.phoneFlag || this.emailFlag;
    }
    onSubmit() {
        console.log(this.userForm.value);
        this.userForm.value.userId = this.route.snapshot.params['userId'];
        this.userService.updateUser(this.userForm.value).subscribe(response => {
            console.log('Success!', response),
                alert("Updated Successfully!");
            this.router.navigateByUrl('/user-list');
        }, error => {
            alert("Error occurred");
            console.log(error);
        });
    }
}
UpdateUserComponent.ɵfac = function UpdateUserComponent_Factory(t) { return new (t || UpdateUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
UpdateUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UpdateUserComponent, selectors: [["app-update-user"]], decls: 49, vars: 6, consts: [[1, "wrapper"], [1, "row"], [1, "card", "col-md-4", "offset-md-4", "shadow-lg", "p-3", "mb-5", "bg-white"], [2, "margin-top", "20px", "font-size", "x-large", "text-align", "center"], [3, "formGroup"], ["type", "text", "formControlName", "firstName", "ng-pattern", "/^[a-zA-Z'. -]+$/", "placeholder", "Your First Name", 1, "form-control", 3, "blur"], ["style", "color: red;", 4, "ngIf"], ["type", "text", "formControlName", "lastName", "ng-pattern", "/^[a-zA-Z'. -]+$/", "placeholder", "Your Last Name", 1, "form-control", 3, "blur"], ["type", "password", "formControlName", "password", "minlength", "5", "maxlength", "50", "required", "", 1, "form-control"], ["type", "text", "formControlName", "phoneNo", 1, "form-control", 3, "blur"], ["type", "email", "formControlName", "email", 1, "form-control", 3, "blur"], ["type", "text", "formControlName", "city", "ng-pattern", "/^[a-zA-Z'. -]+$/", 1, "form-control", 3, "blur"], ["aria-label", ".form-select-lg example", "formControlName", "role", 1, "form-control"], ["value", "ADMIN"], ["value", "USER"], ["aria-label", ".form-select-lg example", "formControlName", "status", 1, "form-control"], ["value", "ACTIVE"], ["value", "INACTIVE"], [1, "row", 2, "align-content", "center"], ["type", "submit", 1, "regBtn", "btn", "btn-success", 3, "click"], [2, "color", "red"]], template: function UpdateUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Update USER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " First Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function UpdateUserComponent_Template_input_blur_8_listener() { ctx.validateName(); return ctx.enableButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UpdateUserComponent_small_9_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Last Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function UpdateUserComponent_Template_input_blur_12_listener() { ctx.validateName(); return ctx.enableButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UpdateUserComponent_small_13_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Password : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Phone No : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function UpdateUserComponent_Template_input_blur_19_listener() { ctx.validatePhone(); return ctx.enableButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UpdateUserComponent_small_20_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Email : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function UpdateUserComponent_Template_input_blur_23_listener() { ctx.validateEmail(); return ctx.enableButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, UpdateUserComponent_small_24_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " City : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function UpdateUserComponent_Template_input_blur_27_listener() { ctx.validateName(); return ctx.enableButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, UpdateUserComponent_small_28_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Register as a : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "USER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "ACTIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "INACTIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpdateUserComponent_Template_button_click_47_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nameFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nameFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.phoneFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.emailFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nameFlag);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtdXNlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "QYyE":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin-home-page/admin-home-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminHomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomePageComponent", function() { return AdminHomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AdminHomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminHomePageComponent.ɵfac = function AdminHomePageComponent_Factory(t) { return new (t || AdminHomePageComponent)(); };
AdminHomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminHomePageComponent, selectors: [["app-admin-home-page"]], decls: 18, vars: 0, consts: [[1, "container"], [1, "row", "row-margin-bottom"], ["data-category", "view", 1, "col-md-5", "no-padding", "lib-item"], [1, "lib-panel"], [1, "row", "box-shadow"], [1, "col-md-12", "h-75"], ["src", "assets/health-insurance-image.jpg", 1, "lib-img-show"], [1, "col-md-1"], ["data-category", "ui", 1, "col-md-5", "no-padding", "lib-item"], [1, "col-md-6"]], template: function AdminHomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    background-color: #f7f7f7;\r\n}\r\n\r\n.lib-panel[_ngcontent-%COMP%] {\r\n    margin-bottom: 20Px;\r\n}\r\n\r\n.lib-panel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: transparent;\r\n}\r\n\r\n.lib-panel[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%], .lib-panel[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    background-color: #FFFFFF;\r\n}\r\n\r\n.lib-panel[_ngcontent-%COMP%]   .lib-row[_ngcontent-%COMP%] {\r\n    padding: 0 20px 0 20px;\r\n}\r\n\r\n.lib-panel[_ngcontent-%COMP%]   .lib-row.lib-header[_ngcontent-%COMP%] {\r\n    background-color: #FFFFFF;\r\n    font-size: 20px;\r\n    padding: 10px 20px 0 20px;\r\n}\r\n\r\n.lib-panel[_ngcontent-%COMP%]   .lib-row.lib-header[_ngcontent-%COMP%]   .lib-header-seperator[_ngcontent-%COMP%] {\r\n    height: 2px;\r\n    width: 26px;\r\n    background-color: #d9d9d9;\r\n    margin: 7px 0 7px 0;\r\n}\r\n\r\n.lib-panel[_ngcontent-%COMP%]   .lib-row.lib-desc[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 100%;\r\n    display: block;\r\n    font-size: 13px;\r\n}\r\n\r\n.lib-panel[_ngcontent-%COMP%]   .lib-row.lib-desc[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 10px;\r\n    left: 20px;\r\n}\r\n\r\n.row-margin-bottom[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.box-shadow[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 10px 0 rgba(0,0,0,.10);\r\n}\r\n\r\n.no-padding[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBR0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFFSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoiYWRtaW4taG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG59XHJcblxyXG4ubGliLXBhbmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwUHg7XHJcbn1cclxuLmxpYi1wYW5lbCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmxpYi1wYW5lbCAucm93LFxyXG4ubGliLXBhbmVsIC5jb2wtbWQtNiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuXHJcbi5saWItcGFuZWwgLmxpYi1yb3cge1xyXG4gICAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcclxufVxyXG5cclxuLmxpYi1wYW5lbCAubGliLXJvdy5saWItaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMCAyMHB4O1xyXG59XHJcblxyXG4ubGliLXBhbmVsIC5saWItcm93LmxpYi1oZWFkZXIgLmxpYi1oZWFkZXItc2VwZXJhdG9yIHtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5O1xyXG4gICAgbWFyZ2luOiA3cHggMCA3cHggMDtcclxufVxyXG5cclxuLmxpYi1wYW5lbCAubGliLXJvdy5saWItZGVzYyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4ubGliLXBhbmVsIC5saWItcm93LmxpYi1kZXNjIGF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5yb3ctbWFyZ2luLWJvdHRvbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYm94LXNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLDAsMCwuMTApO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsMCwwLC4xMCk7XHJcbn1cclxuXHJcbi5uby1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'insurance-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "img"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".img[_ngcontent-%COMP%]{\r\n    background-size:cover;\r\n    width:auto;\r\n    background-image:url('bg-image.jpg');\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixvQ0FBb0M7QUFDeEMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1ne1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgd2lkdGg6YXV0bztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCdiZy1pbWFnZS5qcGcnKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "TEsU":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var src_app_models_policy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/policy */ "Ig6D");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/user */ "2hxB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_claimed_policy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/claimed-policy.service */ "WAZS");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class UserDetailsComponent {
    constructor(claimedPolicyservice, authService, router, route) {
        this.claimedPolicyservice = claimedPolicyservice;
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.policy = new src_app_models_policy__WEBPACK_IMPORTED_MODULE_0__["Policy"]();
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.userId = this.route.snapshot.params[+this.authService.getUserId];
        this.claimedPolicyservice.getClaimPolicyByUser(this.userId)
            .subscribe(data => {
            console.log(data);
            this.policy = data;
            this.user = data;
            this.claimedPolicy = data;
            console.log(data);
        }, error => console.log(error));
    }
}
UserDetailsComponent.ɵfac = function UserDetailsComponent_Factory(t) { return new (t || UserDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_claimed_policy_service__WEBPACK_IMPORTED_MODULE_3__["ClaimedPolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
UserDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserDetailsComponent, selectors: [["app-user-details"]], decls: 0, vars: 0, template: function UserDetailsComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TtoB":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-login/admin-login.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class AdminLoginComponent {
    constructor(router, loginservice) {
        this.router = router;
        this.loginservice = loginservice;
        this.email = '';
        this.password = '';
        this.invalidLogin = false;
    }
    ngOnInit() {
    }
    checkLogin() {
        if (this.loginservice.authenticate(this.email, this.password)) {
            this.loginservice.removeUserName();
            this.loginservice.setUserName("Admin");
            this.router.navigate(['admin-policy-list']);
            alert("Logged in Successfully");
        }
        else {
            alert("Bad Credentials");
            this.router.navigate(['admin-login']);
        }
    }
}
AdminLoginComponent.ɵfac = function AdminLoginComponent_Factory(t) { return new (t || AdminLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AdminLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminLoginComponent, selectors: [["app-admin-login"]], decls: 18, vars: 2, consts: [[1, "wrapper"], [1, "row"], [1, "card", "col-md-4", "offset-md-4", "shadow-lg", "p-3", "mb-5", "bg-white"], [2, "margin-top", "20px", "text-align", "center"], [1, "row", 2, "text-align", "center"], ["type", "text", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "mx-auto", "text-center"], [1, "logInBtn", "btn", "btn-success", 3, "click"]], template: function AdminLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Email : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Password : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminLoginComponent_Template_button_click_16_listener() { return ctx.checkLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "U/OT":
/*!*********************************************************************!*\
  !*** ./src/app/components/update-policy/update-policy.component.ts ***!
  \*********************************************************************/
/*! exports provided: UpdatePolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePolicyComponent", function() { return UpdatePolicyComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/policy.service */ "Ypg5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function UpdatePolicyComponent_small_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdatePolicyComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const policyType_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", policyType_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](policyType_r2);
} }
class UpdatePolicyComponent {
    constructor(route, router, formBuilder, policyService) {
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.policyService = policyService;
        this.policyTypes = ['Medical Insurance', 'Individual Coverage', 'Senior Citizen Coverage', 'family floater Coverage', 'Unit Linked Health Plans'];
        this.nameFlag = false;
        this.buttonFlag = true;
    }
    ngOnInit() {
        this.policyService.getPolicy(+this.route.snapshot.params['policyId']).subscribe((policyInfo) => {
            this.policy = policyInfo;
            console.log(this.policy);
            this.policyForm.get('policyName').setValue(this.policy.policyName);
            this.policyForm.get('policyType').setValue(this.policy.policyType);
            this.policyForm.get('premiumAmount').setValue(this.policy.premiumAmount);
            this.policyForm.get('duration').setValue(this.policy.duration);
            this.policyForm.get('description').setValue(this.policy.description);
        });
        this.policyForm = this.formBuilder.group({
            policyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]],
            policyType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            premiumAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            duration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    get policyName() {
        return this.policyForm.get('policyName');
    }
    get policyType() {
        return this.policyForm.get('policyType');
    }
    get premiumAmount() {
        return this.policyForm.get('premiumAmount');
    }
    get duration() {
        return this.policyForm.get('duration');
    }
    get description() {
        return this.policyForm.get('description');
    }
    update() {
        console.log(this.policyForm.value);
        this.policyForm.value.policyId = this.route.snapshot.params['policyId'];
        this.policyService.updatePolicy(this.policyForm.value).subscribe(response => {
            console.log('Success!', response),
                alert("Updated Successfully!");
            this.router.navigateByUrl('/admin-policy-list');
        }, error => console.log(error));
    }
    validateName() {
        var flag = /^[a-zA-Z ]+$/.test(this.policy.policyName);
        if (!flag) {
            this.nameFlag = true;
        }
        else {
            this.nameFlag = false;
        }
    }
    enableButton() {
        this.buttonFlag = this.nameFlag;
    }
    onSubmit() {
        this.update();
    }
    gotoList() {
        this.router.navigate(['admin-policy-list']);
    }
}
UpdatePolicyComponent.ɵfac = function UpdatePolicyComponent_Factory(t) { return new (t || UpdatePolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_3__["PolicyService"])); };
UpdatePolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UpdatePolicyComponent, selectors: [["app-update-policy"]], decls: 30, vars: 4, consts: [[1, "wrapper"], [1, "row"], [1, "card", "col-md-4", "offset-md-4", "shadow-lg", "p-3", "mb-5", "bg-white"], [2, "margin-top", "20px", "font-size", "x-large", "text-align", "center"], [3, "formGroup"], ["type", "text", "name", "fname", "formControlName", "policyName", "ng-pattern", "/^[a-zA-Z'. -]+$/", 1, "form-control", 3, "blur"], ["style", "color: red;", 4, "ngIf"], ["type", "number", "name", "duration", "formControlName", "duration", "ng-pattern", "/[0-9]/", 1, "form-control"], ["type", "number", "ng-pattern", "/[0-9]/", "name", "amount", "formControlName", "premiumAmount", "required", "", 1, "form-control"], ["formControlName", "policyControl", "aria-label", ".form-select-lg example", "formControlName", "policyType", 1, "form-select", "form-select-lg", "mb-3"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "name", "desc", "formControlName", "description", 1, "form-control"], [1, "text-center", 2, "align-content", "center"], [1, "regBtn", "btn", "btn-success", 3, "click"], [2, "color", "red"], [3, "value"]], template: function UpdatePolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Update Policy Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Policy Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function UpdatePolicyComponent_Template_input_blur_9_listener() { ctx.validateName(); return ctx.enableButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UpdatePolicyComponent_small_10_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Duration : (in years) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Amount : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Policy Type :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, UpdatePolicyComponent_option_22_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Description : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpdatePolicyComponent_Template_button_click_28_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " UPDATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.policyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nameFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.policyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.policyTypes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcG9saWN5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "WAZS":
/*!****************************************************!*\
  !*** ./src/app/services/claimed-policy.service.ts ***!
  \****************************************************/
/*! exports provided: ClaimedPolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimedPolicyService", function() { return ClaimedPolicyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "lGQG");



class ClaimedPolicyService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.baseUrl = 'http://localhost:9098/claimedPolicies';
    }
    addClaimedPolicy(claimedPolicy) {
        return this.http.post(`${this.baseUrl}/addClaimedPolicy`, claimedPolicy);
    }
    updateClaimedPolicy(claimedPolicy) {
        return this.http.put(`${this.baseUrl}/updateClaimedPolicy/`, claimedPolicy);
    }
    deleteClaimedPolicy(planid) {
        return this.http.delete(`${this.baseUrl}/deleteClaimedPolicy/${planid}`, { responseType: 'text' });
    }
    viewClaimedPolicy(planid) {
        return this.http.get(`${this.baseUrl}/viewClaimedPolicy/${planid}`);
    }
    getAllClaimedPolicies() {
        return this.http.get(`${this.baseUrl}/getAllPolicies`);
    }
    getClaimPolicyByUser(userId) {
        return this.http.get(`${this.baseUrl}/getClaimPolicyByUser/${userId}`);
    }
    claimAPolicy(policyId, userId, claimedPolicy) {
        return this.http.post(`${this.baseUrl}/claimAPolicy/${policyId}/${userId}`, claimedPolicy);
    }
    listOfAllClaimedPolicies() {
        return this.http.get(`${this.baseUrl}/listOfAllClaimedPolicies`);
    }
    findByPlanIdAndUserId(userId, planId) {
        return this.http.get(`${this.baseUrl}/findByPlanIdAndUserId/${userId}/${planId}`);
    }
    getPolicyHoldersByPolicy(policyId) {
        return this.http.get(`${this.baseUrl}/getPolicyHoldersByPolicy/${policyId}`);
    }
}
ClaimedPolicyService.ɵfac = function ClaimedPolicyService_Factory(t) { return new (t || ClaimedPolicyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
ClaimedPolicyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClaimedPolicyService, factory: ClaimedPolicyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "WDth":
/*!**************************************************!*\
  !*** ./src/app/services/authentication.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authguard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authguard.service */ "E//v");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.service */ "OC8m");




class AuthenticationGuard {
    constructor(Authguardservice, router, notifyService) {
        this.Authguardservice = Authguardservice;
        this.router = router;
        this.notifyService = notifyService;
    }
    canActivate() {
        if (!this.Authguardservice.isUserLoggedIn()) {
            this.notifyService.showErrorWithTimeout("You should login first to access all the URLs", "Notification", 2000);
            this.router.navigateByUrl("/user-login");
        }
        return this.Authguardservice.isUserLoggedIn();
    }
}
AuthenticationGuard.ɵfac = function AuthenticationGuard_Factory(t) { return new (t || AuthenticationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"])); };
AuthenticationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationGuard, factory: AuthenticationGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "YQxu":
/*!***********************************************************************************!*\
  !*** ./src/app/components/user-holded-policies/user-holded-policies.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserHoldedPoliciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHoldedPoliciesComponent", function() { return UserHoldedPoliciesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_claimed_policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/claimed-policy.service */ "WAZS");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function UserHoldedPoliciesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Policy Holder Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "User Identity Number :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Policy Number :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Duration (in years) :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Premium amount :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Claimed Date :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const claimpolicy_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Plan ID : ", claimpolicy_r1.claimedPolicy.planId, " :-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", claimpolicy_r1.policy.policyName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", claimpolicy_r1.user.firstName, " ", claimpolicy_r1.user.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", claimpolicy_r1.user.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](claimpolicy_r1.policy.policyId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](claimpolicy_r1.policy.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" INR.", claimpolicy_r1.policy.premiumAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", claimpolicy_r1.claimedPolicy.claimedDate, "");
} }
class UserHoldedPoliciesComponent {
    constructor(claimedPolicyservice, authservice, route, router) {
        this.claimedPolicyservice = claimedPolicyservice;
        this.authservice = authservice;
        this.route = route;
        this.router = router;
        this.policies = [];
    }
    ngOnInit() {
        this.claimedPolicyservice.getClaimPolicyByUser(+this.authservice.getUserId()).subscribe((policyList) => {
            this.policies = policyList;
            console.log(this.policies);
        }, error => {
            console.log(error);
        });
    }
    go() {
        this.router.navigate(['user-home-page']);
    }
}
UserHoldedPoliciesComponent.ɵfac = function UserHoldedPoliciesComponent_Factory(t) { return new (t || UserHoldedPoliciesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_claimed_policy_service__WEBPACK_IMPORTED_MODULE_1__["ClaimedPolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UserHoldedPoliciesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserHoldedPoliciesComponent, selectors: [["app-user-holded-policies"]], decls: 8, vars: 1, consts: [[1, "pb-5"], [1, "container"], [1, "section-title", 2, "text-align", "center"], [1, "row"], ["class", "col-xs-4 col-sm-4 col-md-4", 4, "ngFor", "ngForOf"], [1, "text-center"], ["id", "ExplPlanbtn", 1, "btn", "btn-primary", 3, "click"], [1, "col-xs-4", "col-sm-4", "col-md-4"], [1, "card"], [1, "card-body", "text-center"], [1, "card-header", "bg-info"], [1, "card-text"]], template: function UserHoldedPoliciesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserHoldedPoliciesComponent_div_4_Template, 33, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHoldedPoliciesComponent_Template_button_click_6_listener() { return ctx.go(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Go Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.policies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWhvbGRlZC1wb2xpY2llcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Ypg5":
/*!********************************************!*\
  !*** ./src/app/services/policy.service.ts ***!
  \********************************************/
/*! exports provided: PolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyService", function() { return PolicyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PolicyService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:9098/policy';
    }
    createPolicy(policy) {
        return this.http.post(`${this.baseUrl}/addPolicy`, policy);
    }
    updatePolicy(policy) {
        return this.http.put(`${this.baseUrl}/updatePolicy/`, policy);
    }
    deletePolicy(id) {
        return this.http.put(`${this.baseUrl}/deletePolicy/${id}`, { responseType: 'text' });
    }
    getPolicy(id) {
        return this.http.get(`${this.baseUrl}/viewPolicy/${id}`);
    }
    getPolicyList() {
        return this.http.get(`${this.baseUrl}/getAllPolicies`);
    }
}
PolicyService.ɵfac = function PolicyService_Factory(t) { return new (t || PolicyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PolicyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PolicyService, factory: PolicyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "atC9");
/* harmony import */ var _components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user-login/user-login.component */ "c8v6");
/* harmony import */ var _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin-login/admin-login.component */ "TtoB");
/* harmony import */ var _components_add_policy_add_policy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-policy/add-policy.component */ "7fhm");
/* harmony import */ var _components_policy_list_policy_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/policy-list/policy-list.component */ "tYz8");
/* harmony import */ var _components_update_policy_update_policy_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/update-policy/update-policy.component */ "U/OT");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "sgBM");
/* harmony import */ var _components_policy_details_policy_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/policy-details/policy-details.component */ "nKy8");
/* harmony import */ var _components_user_home_page_user_home_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/user-home-page/user-home-page.component */ "knnZ");
/* harmony import */ var _components_users_policy_list_users_policy_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/users-policy-list/users-policy-list.component */ "ddwz");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/filter.pipe */ "BhhM");
/* harmony import */ var _components_search_policy_search_policy_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/search-policy/search-policy.component */ "4Ezj");
/* harmony import */ var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/user-details/user-details.component */ "TEsU");
/* harmony import */ var _components_claimed_policy_page_claimed_policy_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/claimed-policy-page/claimed-policy-page.component */ "CImy");
/* harmony import */ var _components_login_home_page_login_home_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/login-home-page/login-home-page.component */ "gmy/");
/* harmony import */ var _components_home_background_home_background_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/home-background/home-background.component */ "C32k");
/* harmony import */ var _components_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/update-user/update-user.component */ "P5rk");
/* harmony import */ var _components_admin_policy_list_admin_policy_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/admin-policy-list/admin-policy-list.component */ "t73M");
/* harmony import */ var _components_admin_policy_details_admin_policy_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/admin-policy-details/admin-policy-details.component */ "6b2e");
/* harmony import */ var _components_admin_user_and_policy_details_admin_user_and_policy_details_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/admin-user-and-policy-details/admin-user-and-policy-details.component */ "gYxB");
/* harmony import */ var _components_user_holded_policies_user_holded_policies_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/user-holded-policies/user-holded-policies.component */ "YQxu");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_admin_home_page_admin_home_page_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/admin-home-page/admin-home-page.component */ "QYyE");
/* harmony import */ var _components_carosol_carosol_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/carosol/carosol.component */ "wgVi");
/* harmony import */ var _components_user_claimed_policy_details_user_claimed_policy_details_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/user-claimed-policy-details/user-claimed-policy-details.component */ "zRVK");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/admin-profile/admin-profile.component */ "FBU2");
/* harmony import */ var _components_superadmin_profile_superadmin_profile_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/superadmin-profile/superadmin-profile.component */ "A6Xv");
/* harmony import */ var _components_adminview_policy_details_adminview_policy_details_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/adminview-policy-details/adminview-policy-details.component */ "9eyB");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/authguard.service */ "E//v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/core */ "fXoL");












































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵdefineInjector"]({ providers: [
        _services_authguard_service__WEBPACK_IMPORTED_MODULE_39__["AuthguardService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["routes"])
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_11__["UserLoginComponent"],
        _components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_11__["UserLoginComponent"],
        _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_12__["AdminLoginComponent"],
        _components_add_policy_add_policy_component__WEBPACK_IMPORTED_MODULE_13__["AddPolicyComponent"],
        _components_policy_list_policy_list_component__WEBPACK_IMPORTED_MODULE_14__["PolicyListComponent"],
        _components_update_policy_update_policy_component__WEBPACK_IMPORTED_MODULE_15__["UpdatePolicyComponent"],
        _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_16__["UserListComponent"],
        _components_policy_details_policy_details_component__WEBPACK_IMPORTED_MODULE_17__["PolicyDetailsComponent"],
        _components_user_home_page_user_home_page_component__WEBPACK_IMPORTED_MODULE_18__["UserHomePageComponent"],
        _components_users_policy_list_users_policy_list_component__WEBPACK_IMPORTED_MODULE_19__["UsersPolicyListComponent"],
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_20__["FilterPipe"],
        _components_search_policy_search_policy_component__WEBPACK_IMPORTED_MODULE_21__["SearchPolicyComponent"],
        _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_22__["UserDetailsComponent"],
        _components_claimed_policy_page_claimed_policy_page_component__WEBPACK_IMPORTED_MODULE_23__["ClaimedPolicyPageComponent"],
        _components_login_home_page_login_home_page_component__WEBPACK_IMPORTED_MODULE_24__["LoginHomePageComponent"],
        _components_home_background_home_background_component__WEBPACK_IMPORTED_MODULE_25__["HomeBackgroundComponent"],
        _components_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_26__["UpdateUserComponent"],
        _components_admin_policy_list_admin_policy_list_component__WEBPACK_IMPORTED_MODULE_27__["AdminPolicyListComponent"],
        _components_admin_policy_details_admin_policy_details_component__WEBPACK_IMPORTED_MODULE_28__["AdminPolicyDetailsComponent"],
        _components_admin_user_and_policy_details_admin_user_and_policy_details_component__WEBPACK_IMPORTED_MODULE_29__["AdminUserAndPolicyDetailsComponent"],
        _components_user_holded_policies_user_holded_policies_component__WEBPACK_IMPORTED_MODULE_30__["UserHoldedPoliciesComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_31__["FooterComponent"],
        _components_admin_home_page_admin_home_page_component__WEBPACK_IMPORTED_MODULE_32__["AdminHomePageComponent"],
        _components_carosol_carosol_component__WEBPACK_IMPORTED_MODULE_33__["CarosolComponent"],
        _components_user_claimed_policy_details_user_claimed_policy_details_component__WEBPACK_IMPORTED_MODULE_34__["UserClaimedPolicyDetailsComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_35__["ProfileComponent"],
        _components_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_36__["AdminProfileComponent"],
        _components_superadmin_profile_superadmin_profile_component__WEBPACK_IMPORTED_MODULE_37__["SuperadminProfileComponent"],
        _components_adminview_policy_details_adminview_policy_details_component__WEBPACK_IMPORTED_MODULE_38__["AdminviewPolicyDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "atC9":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/user */ "2hxB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notification.service */ "OC8m");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function HomePageComponent_small_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomePageComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomePageComponent_small_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomePageComponent_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomePageComponent_small_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid City");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HomePageComponent {
    constructor(router, userService, notifyService) {
        this.router = router;
        this.userService = userService;
        this.notifyService = notifyService;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_0__["User"]();
        // UserName Validations
        this.nameFlag = false;
        // UserPhone valdiations
        this.phoneFlag = false;
        //UserEmail Validation
        this.emailFlag = false;
        this.buttonFlag = true;
    }
    ngOnInit() {
    }
    // Adds a new User
    signUp() {
        console.log(this.user);
        this.userService.createUser(this.user).subscribe(data => {
            this.notifyService.showSuccessWithTimeout("Registered successfully. Please wait till your request is approved", "Notification", 2000);
            //alert("Registered successfully"),
            this.router.navigate(['user-login']);
        }, error => {
            this.notifyService.showErrorWithTimeout("Error while registering !!", "Warning", 2000);
            //alert("Error while registering");
            console.log(error);
            this.router.navigate([""]);
        });
    }
    validateName() {
        var flag = /^[a-zA-Z ]+$/.test(this.user.firstName);
        if (!flag) {
            this.nameFlag = true;
        }
        else {
            this.nameFlag = false;
        }
    }
    validatePhone() {
        let phone = String(this.user.phoneNo);
        if (phone.length != 10) {
            this.phoneFlag = true;
        }
        else {
            this.phoneFlag = false;
        }
    }
    validateEmail() {
        var flag = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email);
        if (!flag) {
            this.emailFlag = true;
        }
        else {
            this.emailFlag = false;
        }
    }
    enableButton() {
        this.buttonFlag = this.nameFlag || this.emailFlag || this.phoneFlag;
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 40, vars: 12, consts: [[1, "col-sm-6"], [1, "wrapper"], [1, "row"], [1, "card", "col-md-12", "offset-md-6", "shadow-lg", "p-3", "mb-8", "bg-white"], [2, "margin-top", "20px", "font-size", "x-large", "text-align", "center"], ["type", "text", "name", "fname", "ng-pattern", "/^[a-zA-Z'. -]+$/", "placeholder", "Your First Name", 1, "form-control", 3, "ngModel", "blur", "ngModelChange"], ["style", "color: red;", 4, "ngIf"], ["type", "text", "name", "lname", "ng-pattern", "/^[a-zA-Z'. -]+$/", "placeholder", "Your Last Name", 1, "form-control", 3, "ngModel", "blur", "ngModelChange"], ["type", "password", "name", "password", "minlength", "5", "maxlength", "50", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "text", "name", "phone", 1, "form-control", 3, "ngModel", "blur", "ngModelChange"], ["type", "email", "name", "email", 1, "form-control", 3, "ngModel", "blur", "ngModelChange"], ["type", "text", "name", "city", "ng-pattern", "/^[a-zA-Z'. -]+$/", "placeholder", "Your City", 1, "form-control", 3, "ngModel", "blur", "ngModelChange"], [1, "row", 2, "align-content", "center"], [1, "regBtn", "btn", "btn-success", 3, "disabled", "click"], [1, "row", "mx-auto", "text-center"], ["href", "/user-login"], [2, "color", "red"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " First Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function HomePageComponent_Template_input_blur_9_listener() { ctx.validateName(); return ctx.enableButton(); })("ngModelChange", function HomePageComponent_Template_input_ngModelChange_9_listener($event) { return ctx.user.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomePageComponent_small_10_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Last Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function HomePageComponent_Template_input_blur_13_listener() { ctx.validateName(); return ctx.enableButton(); })("ngModelChange", function HomePageComponent_Template_input_ngModelChange_13_listener($event) { return ctx.user.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HomePageComponent_small_14_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Password : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomePageComponent_Template_input_ngModelChange_17_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Phone No : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function HomePageComponent_Template_input_blur_21_listener() { ctx.validatePhone(); return ctx.enableButton(); })("ngModelChange", function HomePageComponent_Template_input_ngModelChange_21_listener($event) { return ctx.user.phoneNo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HomePageComponent_small_22_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Email : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function HomePageComponent_Template_input_blur_25_listener() { ctx.validateEmail(); return ctx.enableButton(); })("ngModelChange", function HomePageComponent_Template_input_ngModelChange_25_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HomePageComponent_small_26_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " City : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function HomePageComponent_Template_input_blur_29_listener() { ctx.validateName(); return ctx.enableButton(); })("ngModelChange", function HomePageComponent_Template_input_ngModelChange_29_listener($event) { return ctx.user.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, HomePageComponent_small_30_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePageComponent_Template_button_click_33_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Already A User ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nameFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nameFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.phoneNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.phoneFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.emailFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nameFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.buttonFlag);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]], styles: [".wrapper[_ngcontent-%COMP%]{\r\n    min-height: 90vh;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n  }\r\n  .row[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n  }\r\n  .card[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n  .regBtn[_ngcontent-%COMP%]{\r\n    border-radius: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 100px;\r\n    margin-bottom: 25px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCO0VBQ0E7O0tBRUciLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAucm93e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5yZWdCdG57XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuICAvKiBuZzItcGFzc3dvcmQtc3RyZW5ndGgtYmFye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSAqL1xyXG4gICJdfQ== */"] });


/***/ }),

/***/ "c8v6":
/*!***************************************************************!*\
  !*** ./src/app/components/user-login/user-login.component.ts ***!
  \***************************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/user */ "2hxB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification.service */ "OC8m");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");








class UserLoginComponent {
    constructor(notifyService, toastr, router, formBuilder, activatedRoute, userService, authService) {
        this.notifyService = notifyService;
        this.toastr = toastr;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.authService = authService;
        this.userr = new src_app_models_user__WEBPACK_IMPORTED_MODULE_0__["User"]();
        this.login = false;
    }
    ngOnInit() {
        // localStorage.setItem('SeesionUser',this.authService.getUserId()) 
        // console.log(this.authService.getUserId())
    }
    get email() {
        return this.userForm.get('email');
    }
    get password() {
        return this.userForm.get('password');
    }
    onlogin() {
        this.isLoggedIn = false;
        this.userService.userlogin(this.userr.email, this.userr.password).subscribe((flag) => {
            console.log(flag);
            if (flag) {
                this.notifyService.showSuccessWithTimeout("Logged In successfully !!", "Notification", 2000);
                //alert("Login Successful")
                this.isLoggedIn = true;
                this.userService.getUserId(this.userr.email).subscribe((user) => {
                    this.userInfo = user;
                    if (this.userInfo.role == 'USER') {
                        if (this.userInfo.status == 'INACTIVE') {
                            alert("NOT AUTHORISED");
                        }
                        else {
                            console.log(this.userInfo);
                            console.log("USER");
                            this.authService.removeUserId();
                            this.authService.setUserId(this.userInfo.userId);
                            // localStorage.setItem('SeesionUser',this.userInfo.userId.toString()) 
                            this.authService.removeUserName();
                            this.authService.setUserName(this.userInfo.firstName);
                            this.router.navigate(['user-home-page']);
                            //window.location.reload();
                        }
                    }
                    else if (this.userInfo.role == 'ADMIN') {
                        console.log(this.userInfo);
                        console.log("ADMIN");
                        this.authService.removeUserId();
                        this.authService.setUserId(this.userInfo.userId);
                        // localStorage.setItem('SeesionUser',this.userInfo.userId.toString()) 
                        this.authService.removeUserName();
                        this.authService.setUserName(this.userInfo.firstName);
                        this.router.navigate(['admin-policy-list']);
                        //window.location.reload();
                    }
                    else if (this.userInfo.role === 'SUPERADMIN') {
                        console.log(this.userInfo);
                        console.log("SUPER-ADMIN");
                        this.authService.removeUserId();
                        this.authService.setUserId(this.userInfo.userId);
                        // localStorage.setItem('SeesionUser',this.userInfo.userId.toString()) 
                        this.authService.removeUserName();
                        this.authService.setUserName(this.userInfo.firstName);
                        this.router.navigate(['super-admin-profile']);
                        // window.location.reload();
                    }
                    else {
                        console.log("Not an admin and not and user");
                        alert("Not authorised to login to this portal");
                    }
                });
            }
            else {
                alert("Invalid username or password!");
                this.isLoggedIn = false;
                this.router.navigate(['user-login']);
            }
        }, error => {
            this.notifyService.showErrorWithTimeout("Not Authorised Or Bad Credentials !!", "Notification", 2000);
            // alert("Not Authorised OR Bad Credentails")
        });
        return this.isLoggedIn;
    }
    onSubmit() {
        //   this.userService.userlogin(this.userr.email, this.userr.password).subscribe(data => {
        //     this.login=true;
        //     alert("Logged In Successfully")
        //     this.router.navigate(['user-home-page'])
        //   }, error => {
        //     alert("Bad Credentials")
        //     this.router.navigate(['user-login']);
        //   });
        //   return this.login;
        // }
        // console.log(this.userForm.value);
        //this.user = this.userForm.value;
        this.isLoggedIn = false;
        this.userService.userlogin(this.userr.email, this.userr.password).subscribe((flag) => {
            console.log(flag);
            if (flag) {
                alert("Login Successful!");
                this.isLoggedIn = true;
                this.userService.getUserId(this.userr.email).subscribe((user) => {
                    this.userInfo = user;
                    console.log(this.userInfo);
                    this.authService.removeUserId();
                    this.authService.setUserId(this.userInfo.userId);
                    this.authService.removeUserName();
                    this.authService.setUserName(this.userInfo.firstName);
                });
                this.router.navigate(['user-home-page']);
            }
            else {
                alert("Invalid username or password!");
                this.isLoggedIn = false;
                this.router.navigate(['user-login']);
            }
        });
        return this.isLoggedIn;
    }
}
UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) { return new (t || UserLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
UserLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserLoginComponent, selectors: [["app-user-login"]], decls: 27, vars: 2, consts: [[1, "wrapper"], [1, "row"], [1, "card", "col-md-4", "offset-md-4", "shadow-lg", "p-4", "mb-5", "bg-white"], [2, "margin-top", "20px", "text-align", "center"], [2, "text-align", "center"], ["type", "text", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "value", "remember-me", "id", "remember_me"], [1, "row", "mx-auto", "text-center"], [1, "logInBtn", "btn", "btn-success", 3, "click"], ["href", "/register"]], template: function UserLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Email : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserLoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.userr.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Password : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserLoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.userr.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserLoginComponent_Template_button_click_20_listener() { return ctx.onlogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "New User ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Register Yourself");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userr.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userr.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n    border: 1px solid red;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJ1c2VyLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ "ddwz":
/*!*****************************************************************************!*\
  !*** ./src/app/components/users-policy-list/users-policy-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UsersPolicyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPolicyListComponent", function() { return UsersPolicyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/policy.service */ "Ypg5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class UsersPolicyListComponent {
    constructor(policyService, router) {
        this.policyService = policyService;
        this.router = router;
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.policies = this.policyService.getPolicyList();
    }
    policyDetails(policyId) {
        this.router.navigate(['policyDetails', policyId]);
    }
}
UsersPolicyListComponent.ɵfac = function UsersPolicyListComponent_Factory(t) { return new (t || UsersPolicyListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_1__["PolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UsersPolicyListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersPolicyListComponent, selectors: [["app-users-policy-list"]], decls: 37, vars: 0, consts: [[1, "insurerDetails", "box-section-mobile"], [1, "insurer-bu", "hideSmall"], [1, "insurerLogo1"], ["src", "https://static.pbcdn.in/cdn/images/bu/health/health-insurance.png", "alt", ""], [1, "h1"], [1, "insurerFeatures", "disCTAContent"], [1, "features"], [1, "block", "clearfix"], [1, "icons-bu", "icon-1"], [1, "text"], [1, "icons-bu", "icon-2"], [1, "icons-bu", "icon-3"], [1, "disclaimer", 2, "text-align", "left"]], template: function UsersPolicyListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Get ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u20B95 Lac");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Health Insurance starting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "@ \u20B9315/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "month*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tax Benefit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " up to Rs.75,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Save up to 12.5%*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " on 2 Year Payment Plans ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "7 Lakh+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Happy Customers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n*All savings are provided by the insurer as per the IRDAI approved insurance plan. Standard T&C Apply\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "*Tax benefit is subject to changes in tax laws. Standard T&C Apply ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".topBanner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .insurerDetails[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 10px;\r\n    margin-left: 0;\r\n    background: #fff;\r\n    border-radius: 8px;\r\n    padding: 20px;\r\n    box-shadow: 0 4px 12px 0 rgb(37 56 88 / 20%);\r\n}\r\n\r\n.topBanner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .insurerDetails[_ngcontent-%COMP%] {\r\n    margin-top: 45px;\r\n    float: left;\r\n    width: 670px;\r\n    margin-left: 60px;\r\n}\r\n\r\n.box-section-mobile[_ngcontent-%COMP%] {\r\n    box-shadow: none!important;\r\n    border-radius: 1px!important;\r\n    border-top: solid .8px rgba(23,43,77,.2)!important;\r\n    border-bottom: solid .8px rgba(23,43,77,.2)!important;\r\n    margin-top: 30px!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLXBvbGljeS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLGtEQUFrRDtJQUNsRCxxREFBcUQ7SUFDckQsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InVzZXJzLXBvbGljeS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wQmFubmVyIC5jb250YWluZXIgLmluc3VyZXJEZXRhaWxzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IDAgcmdiKDM3IDU2IDg4IC8gMjAlKTtcclxufVxyXG5cclxuLnRvcEJhbm5lciAuY29udGFpbmVyIC5pbnN1cmVyRGV0YWlscyB7XHJcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNjcwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxufVxyXG5cclxuLmJveC1zZWN0aW9uLW1vYmlsZSB7XHJcbiAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAuOHB4IHJnYmEoMjMsNDMsNzcsLjIpIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIC44cHggcmdiYSgyMyw0Myw3NywuMikhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweCFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "gYxB":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/admin-user-and-policy-details/admin-user-and-policy-details.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AdminUserAndPolicyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserAndPolicyDetailsComponent", function() { return AdminUserAndPolicyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_claimed_policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/claimed-policy.service */ "WAZS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AdminUserAndPolicyDetailsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const claimpolicy_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Plan ID : ", claimpolicy_r1.claimedPolicy.planId, " -- ", claimpolicy_r1.policy.policyName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Policy ID :", claimpolicy_r1.policy.policyId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Duration (in years) :", claimpolicy_r1.policy.duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Premium amount : INR.", claimpolicy_r1.policy.premiumAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Policy Holder Name : ", claimpolicy_r1.user.firstName, " ", claimpolicy_r1.user.lastName, " ");
} }
class AdminUserAndPolicyDetailsComponent {
    constructor(claimPolicyService, router, route) {
        this.claimPolicyService = claimPolicyService;
        this.router = router;
        this.route = route;
        this.policies = [];
    }
    ngOnInit() {
        this.claimPolicyService.listOfAllClaimedPolicies().subscribe((policyList) => {
            this.policies = policyList;
            console.log(this.policies);
        });
    }
    go() {
        this.router.navigate(['admin-policy-list']);
    }
}
AdminUserAndPolicyDetailsComponent.ɵfac = function AdminUserAndPolicyDetailsComponent_Factory(t) { return new (t || AdminUserAndPolicyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_claimed_policy_service__WEBPACK_IMPORTED_MODULE_1__["ClaimedPolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AdminUserAndPolicyDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminUserAndPolicyDetailsComponent, selectors: [["app-admin-user-and-policy-details"]], decls: 8, vars: 1, consts: [[1, "pb-5"], [1, "container"], [1, "section-title", 2, "text-align", "center"], [1, "row"], ["class", "col-xs-4 col-sm-4 col-md-4", 4, "ngFor", "ngForOf"], [1, "text-center"], ["id", "ExplPlanbtn", 1, "btn", "btn-primary", 3, "click"], [1, "col-xs-4", "col-sm-4", "col-md-4"], [1, "card"], [1, "card-body", "text-center"], [1, "card-header", "bg-info"], [1, "card-text"]], template: function AdminUserAndPolicyDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminUserAndPolicyDetailsComponent_div_4_Template, 15, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUserAndPolicyDetailsComponent_Template_button_click_6_listener() { return ctx.go(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Go Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.policies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi11c2VyLWFuZC1wb2xpY3ktZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "gmy/":
/*!*************************************************************************!*\
  !*** ./src/app/components/login-home-page/login-home-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoginHomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginHomePageComponent", function() { return LoginHomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class LoginHomePageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    admin() {
        this.router.navigate(['admin-login']);
    }
    user() {
        this.router.navigate(['user-login']);
    }
}
LoginHomePageComponent.ɵfac = function LoginHomePageComponent_Factory(t) { return new (t || LoginHomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LoginHomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginHomePageComponent, selectors: [["app-login-home-page"]], decls: 26, vars: 0, consts: [[1, "text-center", "vertical-center", 2, "align-content", "center"], [1, "btn", "btn-primary", "btn-lg", 2, "text-align", "center", "align-content", "center", 3, "click"], [1, "btn", "btn-success", "btn-lg", 2, "text-align", "center", "align-content", "center", 3, "click"]], template: function LoginHomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginHomePageComponent_Template_button_click_10_listener() { return ctx.admin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginHomePageComponent_Template_button_click_14_listener() { return ctx.user(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CUSTOMER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "knnZ":
/*!***********************************************************************!*\
  !*** ./src/app/components/user-home-page/user-home-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserHomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomePageComponent", function() { return UserHomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");



class UserHomePageComponent {
    constructor(router, authservice) {
        this.router = router;
        this.authservice = authservice;
        this.healthinsurance = "healthinsurance.png";
    }
    ngOnInit() {
    }
    go() {
        this.router.navigate(['policy-list']);
    }
    explore() {
        this.userId = +this.authservice.getUserId();
        this.router.navigate(['user-holded-policies', this.userId]);
    }
}
UserHomePageComponent.ɵfac = function UserHomePageComponent_Factory(t) { return new (t || UserHomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
UserHomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserHomePageComponent, selectors: [["app-user-home-page"]], decls: 107, vars: 0, consts: [["id", "section_What_hd", 1, "p60", "what-is-section", "common-health-hd", "bglighgry", "main-health-id", "section"], [1, "container"], [1, "heading-lob-h2", "pb30"], [1, "abc"], [1, "row"], [1, "col-lg-12", "col-md-8", "col-sm-8", "col-md-pull-4"], [1, "health-insurance-box"], [1, "row", "mt20"], [1, "col-md-4", "col-sm-4", "col-xs-12"], [1, "white-str"], ["src", "assets/medical-expenses.svg", "alt", "health insurance covers medical expenses", "title", "Medical Expenses Covered"], [1, "white-con"], ["src", "assets/cost-of-hosptilization.svg", "alt", "health insurance covers cost of hospitalization", "title", "Hospitalization Costs Covered"], ["src", "assets/icu-charges.svg", "alt", "health insurance covers icu charges", "title", "ICU Charges Covered"], ["src", "assets/amubulance-cost-covered.svg", "alt", "ambulance cost covered in health Insurance", "title", "Ambulance Cost Covered"], ["src", "assets/day-care-procedure.svg", "alt", "day care procedures covered in health insurance", "title", "day care procedure"], ["src", "assets/ayush-benefit.svg", "alt", "ayush benefits covered in health insurance", "title", "Ayush Benefits"], ["id", "section_Do_I_need_hd", 1, "p60", "common-health-hd", "main-health-id", "do-really-section", "section"], [1, "col-lg-12", "col-md-8", "col-sm-8", "col-xs-12"], ["src", "assets/medical-inflation.svg", "alt", "beats medical inflation", "title", "Medical Inflation"], ["src", "assets/quality-healthcare-facilities.svg", "alt", "get quality healthcare facilities with medical insurance", "title", "Quality Healthcare Facilities"], ["src", "assets/access-to-specialised-treatment.svg", "alt", "get specialised treatments with medical insurance policy", "title", "Specialised Treatments Access"], ["src", "assets/cashless-hospitalization.svg", "alt", "Get cashless hospitalization with health insurance policy", "title", "Cashless Hospitalisation"], ["src", "assets/tax-savings.svg", "alt", "Save tax with health insurance", "title", "Tax Savings"], ["src", "assets/preventive-health-checkup.svg", "alt", "get preventive health check-ups with medical insurance", "title", "Health Check-ups"], [1, "text-center"], ["title", "Explore Our Best Health Plans", "id", "ExplPlanbtn", 1, "btn", "btn-success", "btn-lg", 3, "click"]], template: function UserHomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "What is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Health Insurance?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Health Insurance is a medical coverage that helps you meet your medical expenses by offering financial assistance. Due to the high cost of hospitalization expenses, it is important to have a health insurance plan in place. In the current pandemic situation, health insurance plays a vital role in safeguarding your finances. You can buy a health insurance plan for your family and avail the below mentioned benefits & coverage. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Medical Expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cost of Hospitalization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "ICU Charges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Ambulance Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Day Care Procedures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "AYUSH Benefit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Do I Really Need a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Health Insurance Plan?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "The answer is a clear Yes,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " because most of us may require medical treatment at some point of time in life. Hence, it is important to have a good health insurance plan that caters to rising medical expenses. To meet these expenses and avail quality healthcare facilities, it is important to have a comprehensive health insurance cover. Take a look at the key reasons that makes health insurance a must-have. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Beat Medical Inflation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Avail Quality Healthcare Facilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Get Access to Specialised Treatments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Avail Cashless Hospitalisation Facility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Save Tax up to \u20B975,000^");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Get Preventive Health Check-up Coupons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomePageComponent_Template_button_click_103_listener() { return ctx.go(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Explore Our plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".heading-lob-h2[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    padding-left: 0px;\r\n    margin: 0px auto;\r\n    line-height: 1.6;\r\n}\r\n\r\n.heading-lob-h2[_ngcontent-%COMP%] {\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.heading-lob-h2[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    color: #222222;\r\n    padding-left: 10px;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoidXNlci1ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nLWxvYi1oMiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG4uaGVhZGluZy1sb2ItaDIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5oZWFkaW5nLWxvYi1oMiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthService {
    constructor() {
        this.isAdminLogin = false;
        this.flag = false;
        // getUserId() {
        //   let user = sessionStorage.getItem('userId')
        //   console.log(user);
        //   return user;
        // }
        this.isUserloggedin = false;
        this.isRemoved = false;
        this.login = this.isAdminLogin || this.flag;
    }
    authenticate(email, password) {
        if (email === "admin@gmail.com" && password === "admin") {
            sessionStorage.setItem('email', email);
            this.isAdminLogin = true;
            console.log(this.isAdminLogin);
            return true;
        }
        else {
            this.isAdminLogin = false;
            console.log(this.isAdminLogin);
            return false;
        }
    }
    // isUserLoggedIn() {
    //   let user = sessionStorage.getItem('email')
    //   console.log(!(user === null))
    //   return !(user === null)
    // }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('userName');
        console.log(!(user === null));
        return !(user === null);
    }
    // logOut() {
    //   sessionStorage.removeItem('email')
    // }
    logOut() {
        sessionStorage.removeItem('userName');
    }
    setUserId(userId) {
        sessionStorage.setItem('userId', userId);
        console.log(userId);
        this.flag = true;
        console.log(this.flag);
        return true;
    }
    getUserId() {
        let user = sessionStorage.getItem('userId');
        //console.log(user);
        if (user == null) {
            this.isUserloggedin = false;
        }
        else {
            this.isUserloggedin = true;
            console.log(this.isUserloggedin);
        }
        return user;
    }
    removeUserId() {
        sessionStorage.removeItem('userId');
        return this.isRemoved = true;
    }
    setUserName(userName) {
        sessionStorage.setItem('userName', userName);
        console.log(userName);
        return true;
    }
    getUserName() {
        let user = sessionStorage.getItem('userName');
        console.log(user);
        return user;
    }
    removeUserName() {
        sessionStorage.removeItem('userName');
    }
    logOutUserName() {
        sessionStorage.removeItem('userName');
    }
    logOutUserId() {
        sessionStorage.removeItem('userId');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nKy8":
/*!***********************************************************************!*\
  !*** ./src/app/components/policy-details/policy-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: PolicyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyDetailsComponent", function() { return PolicyDetailsComponent; });
/* harmony import */ var src_app_models_policy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/policy */ "Ig6D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/policy.service */ "Ypg5");
/* harmony import */ var src_app_services_claimed_policy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/claimed-policy.service */ "WAZS");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/notification.service */ "OC8m");







class PolicyDetailsComponent {
    // policies:Observable<any>
    constructor(router, authService, policyService, route, claimService, notifyService) {
        this.router = router;
        this.authService = authService;
        this.policyService = policyService;
        this.route = route;
        this.claimService = claimService;
        this.notifyService = notifyService;
        this.claimPolicy = {
            userId: undefined,
            policyId: undefined,
            claimedDate: undefined,
            status: undefined
        };
    }
    ngOnInit() {
        this.policy = new src_app_models_policy__WEBPACK_IMPORTED_MODULE_0__["Policy"]();
        this.policyId = this.route.snapshot.params['policyId'];
        this.userId = this.route.snapshot.params['userId'];
        this.policyService.getPolicy(this.policyId)
            .subscribe(data => {
            console.log(data);
            this.policy = data;
        }, error => console.log(error));
    }
    buy() {
        this.claimPolicy.policyId = this.route.snapshot.params['policyId'];
        console.log(this.claimPolicy.policyId);
        this.claimPolicy.userId = +this.authService.getUserId();
        this.claimService.addClaimedPolicy(this.claimPolicy).subscribe(data => {
            this.claim = data;
            this.planId = this.claim.planId;
            alert("Claimed successfully");
            console.log(data);
            this.router.navigate(['user-claimed-policy-details', +this.authService.getUserId(), this.planId]);
        }, error => {
            this.notifyService.showErrorWithTimeout("This policy has already been claimed !!", "Warning", 2000);
            //alert("Already Claimed")
            console.log(error);
        });
    }
    back() {
        this.router.navigate(['policy-list']);
    }
}
PolicyDetailsComponent.ɵfac = function PolicyDetailsComponent_Factory(t) { return new (t || PolicyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_4__["PolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_claimed_policy_service__WEBPACK_IMPORTED_MODULE_5__["ClaimedPolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"])); };
PolicyDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PolicyDetailsComponent, selectors: [["app-policy-details"]], decls: 80, vars: 6, consts: [["id", "team", 1, "pb-5"], [1, "container"], [1, "section-title", 2, "text-align", "center"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12"], [1, "card"], [1, "card-body", "text-center"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-success", "btn-sm", 3, "click"], ["id", "coverd-n-not", 1, "coverd-n-not", "bg-w", "pb30"], [1, "col-md-12"], [1, "covered-head-txt", 2, "text-align", "center"], [1, "col-md-4", "text-center", "covered-div"], ["src", "assets/regain-green.png", "alt", "Sum Insured rebound", "title", "Sum Insured Rebound"], [1, "covered-head"], ["src", "assets/big-savings.png", "alt", "Installment Benefit", "title", "Instalment Benefit"], ["src", "assets/pre-hospitalization.png", "alt", "No Medical Test Upto 45 Years", "title", "No Medical Test Upto 45 Years"], [1, "cover-txt"], ["src", "assets/homehealthicon.png", "alt", "Cashless Home Health care**", "title", "Cashless Home Health care**"], ["src", "assets/in-patient-treatment.png", "alt", "Hospitalisation expenses", "title", "Hospitalisation expenses"], ["src", "assets/posthospitalisationicon.png", "alt", "Pre & Post Hospitalisation", "title", "Pre & Post Hospitalisation"], [1, "text-center", 2, "align-content", "center"], [1, "btn", "btn-primary", "btn-lg", 2, "text-align", "center", "align-content", "center", 3, "click"]], template: function PolicyDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PolicyDetailsComponent_Template_button_click_19_listener() { return ctx.buy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Claim Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "What is covered in a health insurance policy?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "b", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Sum Insured rebound");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "This acts like a magical back-up, which recharges your exhausted health cover to treat the next hospitalization of a new illness or injury.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "b", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Cumulative Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "We reward you with additional sum insured when you do not make claim in a policy year by increasing your sum insured.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "b", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "No Medical Test Upto 45 Years");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "If you are young, hale and hearty then get yourself a health insurance plan by HDFC ERGO without any medical check-ups.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "b", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Cashless Home Health care**");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "If your Doctor recommends you can get yourself treated at home and avail cashless medical facilities then this feature would be of utmost help.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "b", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Hospitalization expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Just like every other health insurance plan, we cover you for your medical hospitalization due to illnesses and injuries seamlessly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "b", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Pre & Post Hospitalisation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "It means all your pre-hospitalization expenses upto 60 days of admission and post-discharge expenses till 180 days get covered, like the costs for diagnostics, investigation etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PolicyDetailsComponent_Template_button_click_78_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.policy.policyName, " Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.policy.policyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Type: ", ctx.policy.policyType, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Duration (in years) : ", ctx.policy.duration, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Starting At : Rs. ", ctx.policy.premiumAmount / 12, "/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Description : ", ctx.policy.description, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2xpY3ktZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class UserService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:9098/users';
    }
    createUser(user) {
        return this.http.post(`${this.baseUrl}/addUser`, user);
    }
    updateUser(user) {
        return this.http.put(`${this.baseUrl}/updateUser/`, user);
    }
    deleteUser(id) {
        return this.http.delete(`${this.baseUrl}/deleteUser/${id}`, { responseType: 'text' });
    }
    getUser(userId) {
        return this.http.get(`${this.baseUrl}/viewUser/${userId}`);
    }
    getUserId(email) {
        return this.http.get(`${this.baseUrl}/viewUserbyEmail/${email}`);
    }
    getUserList() {
        return this.http.get(`${this.baseUrl}/getAllUsers`);
    }
    userlogin(email, password) {
        return this.http.get(`${this.baseUrl}/customerlogin/${email}/${password}`);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "sgBM":
/*!*************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.ts ***!
  \*************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification.service */ "OC8m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function UserListComponent_tr_28_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", role_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r4);
} }
function UserListComponent_tr_28_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", status_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](status_r5);
} }
function UserListComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserListComponent_tr_28_Template_select_ngModelChange_14_listener($event) { const user_r1 = ctx.$implicit; return user_r1.role = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserListComponent_tr_28_option_15_Template, 2, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserListComponent_tr_28_Template_select_ngModelChange_17_listener($event) { const user_r1 = ctx.$implicit; return user_r1.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserListComponent_tr_28_option_18_Template, 2, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_tr_28_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const user_r1 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.update(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.phoneNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", user_r1.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.roleList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", user_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.statusList);
} }
class UserListComponent {
    constructor(userService, router, notifyService) {
        this.userService = userService;
        this.router = router;
        this.notifyService = notifyService;
        this.roleList = ["USER", "ADMIN", "SUPERADMIN"];
        this.statusList = ["ACTIVE", "INACTIVE"];
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.users = this.userService.getUserList();
    }
    go() {
        this.router.navigate(['super-admin-profile']);
    }
    deleteUser(userId) {
        this.userService.deleteUser(userId)
            .subscribe(data => {
            alert("Deleted Successfully");
            console.log(data);
            this.reloadData();
        }, error => console.log(error));
    }
    userDetails(userId) {
        this.router.navigate(['userDetails', userId]);
    }
    update(user) {
        console.log(user);
        this.userService.updateUser(user).subscribe(response => {
            console.log('Successfully Updated!', response),
                this.notifyService.showSuccessWithTimeout("Updated successfully.", "Notification", 2000);
            // alert("Updated Successfully!")
            this.router.navigate(['/user-list']);
        }, error => {
            console.log(error),
                this.notifyService.showErrorWithTimeout("ERROR !!Data not updated", "Warning", 2000);
            //alert("ERROR !!Data not updated")
        });
    }
    updateUser(userId) {
        this.router.navigate(['updateUser', userId]);
    }
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"])); };
UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["app-user-list"]], decls: 38, vars: 3, consts: [[1, "panel", "panel-primary"], [1, "panel-heading"], [2, "text-align", "center"], [1, "panel-body"], ["border", "4", 1, "table", "table-info", "table-striped", "table-hover", "table-sm"], [1, "table-secondary"], [1, "table-striped"], [4, "ngFor", "ngForOf"], [1, "text-center"], ["id", "ExplPlanbtn", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "form-control", "wp-70", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [3, "ngValue"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "USERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "User Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "ACTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserListComponent_tr_28_Template, 22, 10, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_36_listener() { return ctx.go(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Go Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 1, ctx.users));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "t73M":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin-policy-list/admin-policy-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminPolicyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPolicyListComponent", function() { return AdminPolicyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/notification.service */ "OC8m");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/policy.service */ "Ypg5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");







function AdminPolicyListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPolicyListComponent_div_13_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const policy_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.policyDetails(policy_r1.policyId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Know More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPolicyListComponent_div_13_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const policy_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deletePolicy(policy_r1.policyId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPolicyListComponent_div_13_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const policy_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.updatePolicy(policy_r1.policyId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const policy_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r1.policyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r1.policyType);
} }
class AdminPolicyListComponent {
    constructor(notifyService, router, policyService, route) {
        this.notifyService = notifyService;
        this.router = router;
        this.policyService = policyService;
        this.route = route;
        this.searchText = '';
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        // this.policies = this.policyService.getPolicyList();
        this.policyService.getPolicyList().subscribe(res => this.policies = res);
        //window.location.reload();
    }
    deletePolicy(policyId) {
        this.policyService.deletePolicy(policyId)
            .subscribe(data => {
            console.log(data);
            this.notifyService.showSuccessWithTimeout("Deleted Successfully!!", "Notification", 2000);
            // alert("Deleted successfully");
            this.reloadData();
        }, error => {
            this.notifyService.showErrorWithTimeout("Error while Deleting the Policy!!", "Warning", 2000);
            // alert("Error !!");
            console.log(error);
        });
    }
    policyDetails(policyId) {
        this.router.navigate(['admin-policy-details', policyId]);
    }
    updatePolicy(policyId) {
        this.router.navigate(['updatePolicy', policyId]);
    }
    add() {
        this.router.navigate(['add-Policy']);
    }
    go() {
        this.router.navigate(['admin-userpolicy-details']);
    }
}
AdminPolicyListComponent.ɵfac = function AdminPolicyListComponent_Factory(t) { return new (t || AdminPolicyListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_3__["PolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AdminPolicyListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminPolicyListComponent, selectors: [["app-admin-policy-list"]], decls: 19, vars: 5, consts: [["id", "team", 1, "pb-5"], [1, "container"], [1, "col-xs-6", "col-sm-12", "col-md-12", "form-outline"], ["type", "text", "name", "search", "autocomplete", "off", "placeholder", "Search Policy here", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "section-title", 2, "text-align", "center"], ["id", "ExplPlanbtn", 1, "btn", "btn-warning", "float-right", 3, "click"], [1, "row"], ["class", "col-xs-6 col-sm-12 col-md-4", 4, "ngFor", "ngForOf"], [1, "text-center"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "col-xs-6", "col-sm-12", "col-md-4"], [1, "card"], [1, "card-body", "text-center"], [1, "card-header", "bg-info"], [1, "card-text"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 2, "margin-left", "10px", 3, "click"], [1, "btn", "btn-success", "btn-sm", 2, "margin-left", "10px", 3, "click"]], template: function AdminPolicyListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminPolicyListComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "OUR POLICIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPolicyListComponent_Template_button_click_9_listener() { return ctx.go(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " User & Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminPolicyListComponent_div_13_Template, 15, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Want to Include More Policies ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPolicyListComponent_Template_button_click_17_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 2, ctx.policies, ctx.searchText));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipe"]], styles: [".button[_ngcontent-%COMP%] {\r\n    line-height: 12px;\r\n    width: 18px;\r\n    font-size: 8pt;\r\n    font-family: tahoma;\r\n    margin-top: 1px;\r\n    margin-right: 2px;\r\n    position:absolute;\r\n    top:0;\r\n    right:0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXBvbGljeS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsS0FBSztJQUNMLE9BQU87QUFDWCIsImZpbGUiOiJhZG1pbi1wb2xpY3ktbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgZm9udC1zaXplOiA4cHQ7XHJcbiAgICBmb250LWZhbWlseTogdGFob21hO1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgcmlnaHQ6MDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "tYz8":
/*!*****************************************************************!*\
  !*** ./src/app/components/policy-list/policy-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: PolicyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyListComponent", function() { return PolicyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/policy.service */ "Ypg5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");






function PolicyListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PolicyListComponent_div_9_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const policy_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.policyDetails(policy_r1.policyId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Know More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const policy_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r1.policyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r1.policyType);
} }
class PolicyListComponent {
    constructor(policyService, router) {
        this.policyService = policyService;
        this.router = router;
        this.searchText = '';
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        // this.policies = this.policyService.getPolicyList();
        this.policyService.getPolicyList().subscribe(res => this.policies = res);
    }
    deletePolicy(policyId) {
        this.policyService.deletePolicy(policyId)
            .subscribe(data => {
            console.log(data);
            this.reloadData();
        }, error => console.log(error));
    }
    updatePolicy(policyId) {
        this.router.navigate(['updatePolicy', policyId])
            .then(() => {
            window.location.reload();
        });
    }
    policyDetails(policyId) {
        this.router.navigate(['policyDetails', policyId]);
    }
    go() {
        this.router.navigate(['user-home-page']);
    }
}
PolicyListComponent.ɵfac = function PolicyListComponent_Factory(t) { return new (t || PolicyListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_1__["PolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PolicyListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PolicyListComponent, selectors: [["app-policy-list"]], decls: 14, vars: 5, consts: [["id", "team", 1, "pb-5"], [1, "container"], [1, "col-xs-12", "col-sm-6", "col-md-12", "form-outline"], ["type", "text", "name", "search", "autocomplete", "off", "placeholder", "Search Policy here", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "section-title", 2, "text-align", "center"], [1, "row"], ["class", "col-xs-12 col-sm-6 col-md-4", 4, "ngFor", "ngForOf"], [1, "text-center"], ["id", "ExplPlanbtn", 1, "btn", "btn-primary", 3, "click"], [1, "col-xs-12", "col-sm-6", "col-md-4"], [1, "card"], [1, "card-body", "text-center"], [1, "card-header", "bg-info"], [1, "card-text"], [1, "btn", "btn-success", "btn-sm", 3, "click"]], template: function PolicyListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolicyListComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Recommended Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PolicyListComponent_div_9_Template, 11, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PolicyListComponent_Template_button_click_12_listener() { return ctx.go(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Go Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 2, ctx.policies, ctx.searchText));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2xpY3ktbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_add_policy_add_policy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/add-policy/add-policy.component */ "7fhm");
/* harmony import */ var _components_admin_home_page_admin_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin-home-page/admin-home-page.component */ "QYyE");
/* harmony import */ var _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin-login/admin-login.component */ "TtoB");
/* harmony import */ var _components_admin_policy_details_admin_policy_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin-policy-details/admin-policy-details.component */ "6b2e");
/* harmony import */ var _components_admin_policy_list_admin_policy_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin-policy-list/admin-policy-list.component */ "t73M");
/* harmony import */ var _components_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin-profile/admin-profile.component */ "FBU2");
/* harmony import */ var _components_admin_user_and_policy_details_admin_user_and_policy_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin-user-and-policy-details/admin-user-and-policy-details.component */ "gYxB");
/* harmony import */ var _components_adminview_policy_details_adminview_policy_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/adminview-policy-details/adminview-policy-details.component */ "9eyB");
/* harmony import */ var _components_carosol_carosol_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/carosol/carosol.component */ "wgVi");
/* harmony import */ var _components_home_background_home_background_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home-background/home-background.component */ "C32k");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "atC9");
/* harmony import */ var _components_login_home_page_login_home_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login-home-page/login-home-page.component */ "gmy/");
/* harmony import */ var _components_policy_details_policy_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/policy-details/policy-details.component */ "nKy8");
/* harmony import */ var _components_policy_list_policy_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/policy-list/policy-list.component */ "tYz8");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_search_policy_search_policy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/search-policy/search-policy.component */ "4Ezj");
/* harmony import */ var _components_superadmin_profile_superadmin_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/superadmin-profile/superadmin-profile.component */ "A6Xv");
/* harmony import */ var _components_update_policy_update_policy_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/update-policy/update-policy.component */ "U/OT");
/* harmony import */ var _components_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/update-user/update-user.component */ "P5rk");
/* harmony import */ var _components_user_claimed_policy_details_user_claimed_policy_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/user-claimed-policy-details/user-claimed-policy-details.component */ "zRVK");
/* harmony import */ var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/user-details/user-details.component */ "TEsU");
/* harmony import */ var _components_user_holded_policies_user_holded_policies_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/user-holded-policies/user-holded-policies.component */ "YQxu");
/* harmony import */ var _components_user_home_page_user_home_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/user-home-page/user-home-page.component */ "knnZ");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "sgBM");
/* harmony import */ var _components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/user-login/user-login.component */ "c8v6");
/* harmony import */ var _components_users_policy_list_users_policy_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/users-policy-list/users-policy-list.component */ "ddwz");
/* harmony import */ var _services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/authentication.guard */ "WDth");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ "fXoL");






























const routes = [
    { path: '', component: _components_home_background_home_background_component__WEBPACK_IMPORTED_MODULE_10__["HomeBackgroundComponent"] },
    { path: 'register', component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"] },
    { path: 'login', component: _components_login_home_page_login_home_page_component__WEBPACK_IMPORTED_MODULE_12__["LoginHomePageComponent"] },
    { path: 'user-login', component: _components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_25__["UserLoginComponent"] },
    { path: 'admin-home-page', component: _components_admin_home_page_admin_home_page_component__WEBPACK_IMPORTED_MODULE_2__["AdminHomePageComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'admin-login', component: _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_3__["AdminLoginComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'add-Policy', component: _components_add_policy_add_policy_component__WEBPACK_IMPORTED_MODULE_1__["AddPolicyComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'policy-list', component: _components_policy_list_policy_list_component__WEBPACK_IMPORTED_MODULE_14__["PolicyListComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'policyDetails/:policyId', component: _components_policy_details_policy_details_component__WEBPACK_IMPORTED_MODULE_13__["PolicyDetailsComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'updatePolicy/:policyId', component: _components_update_policy_update_policy_component__WEBPACK_IMPORTED_MODULE_18__["UpdatePolicyComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'user-home-page', component: _components_user_home_page_user_home_page_component__WEBPACK_IMPORTED_MODULE_23__["UserHomePageComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'user-list', component: _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_24__["UserListComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'users-policy-list', component: _components_users_policy_list_users_policy_list_component__WEBPACK_IMPORTED_MODULE_26__["UsersPolicyListComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'search-policy', component: _components_search_policy_search_policy_component__WEBPACK_IMPORTED_MODULE_16__["SearchPolicyComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'carasol', component: _components_carosol_carosol_component__WEBPACK_IMPORTED_MODULE_9__["CarosolComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'userDetails/:userId', component: _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_21__["UserDetailsComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'updateUser/:userId', component: _components_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_19__["UpdateUserComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'admin-policy-list', component: _components_admin_policy_list_admin_policy_list_component__WEBPACK_IMPORTED_MODULE_5__["AdminPolicyListComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'admin-policy-details/:policyId', component: _components_admin_policy_details_admin_policy_details_component__WEBPACK_IMPORTED_MODULE_4__["AdminPolicyDetailsComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'admin-userpolicy-details', component: _components_admin_user_and_policy_details_admin_user_and_policy_details_component__WEBPACK_IMPORTED_MODULE_7__["AdminUserAndPolicyDetailsComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'user-holded-policies/:userId', component: _components_user_holded_policies_user_holded_policies_component__WEBPACK_IMPORTED_MODULE_22__["UserHoldedPoliciesComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'corosol', component: _components_carosol_carosol_component__WEBPACK_IMPORTED_MODULE_9__["CarosolComponent"] },
    { path: 'user-claimed-policy-details/:userId/:planId', component: _components_user_claimed_policy_details_user_claimed_policy_details_component__WEBPACK_IMPORTED_MODULE_20__["UserClaimedPolicyDetailsComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'admin-profile', component: _components_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_6__["AdminProfileComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'super-admin-profile', component: _components_superadmin_profile_superadmin_profile_component__WEBPACK_IMPORTED_MODULE_17__["SuperadminProfileComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] },
    { path: 'adminView-policyHolderDetails', component: _components_adminview_policy_details_adminview_policy_details_component__WEBPACK_IMPORTED_MODULE_8__["AdminviewPolicyDetailsComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"]] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wgVi":
/*!*********************************************************!*\
  !*** ./src/app/components/carosol/carosol.component.ts ***!
  \*********************************************************/
/*! exports provided: CarosolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarosolComponent", function() { return CarosolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/notification.service */ "OC8m");


class CarosolComponent {
    constructor(notifyService) {
        this.notifyService = notifyService;
        this.title = "carosol";
    }
    ngOnInit() {
    }
}
CarosolComponent.ɵfac = function CarosolComponent_Factory(t) { return new (t || CarosolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"])); };
CarosolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarosolComponent, selectors: [["app-carosol"]], decls: 39, vars: 0, consts: [[1, "section-wrap", "ani-common"], [1, "newbie-sec", "happy-mem-sect"], [1, "container", "page-container"], ["data-aos", "fade", "data-aos-duration", "1000", "data-aos-delay", "300", "data-aos-anchor-placement", "center-bottom", 1, "newbie-wrapper"], [1, "newbie-rhs", "ani-lhs"], ["data-attribute", "aa-happy-customer", 1, "newbie-card-wrapper", "newbie-alignment"], ["href", "https://apps.tataaia.com/PG/#!/policyPayment", "rel", "noreferrer noopener", 1, "newbiecard-anc-w"], ["src", "assets/AIA_Icon_Pay%20premium.svg", 1, "lozad"], ["href", "https://apps.tataaia.com/UnclaimedAmount/PLCDetails.jsp", "rel", "noreferrer noopener", 1, "newbiecard-anc-w"], ["src", "/content/dam/tataaia/homepage/icons/AIA_Icon_Download%20statement.svg", 1, "lozad"], ["href", "/customer-service/claim-registration.html", 1, "newbiecard-anc-w"], ["src", "/content/dam/tataaia/homepage/icons/AIA_Icon_Register%20claim.svg", 1, "lozad"], ["href", "https://myinsurance.tataaia.com/", "rel", "noreferrer noopener", 1, "newbiecard-anc-w"], ["src", "/content/dam/tataaia/homepage/icons/AIA_Icon_Raise%20service%20request.svg", 1, "lozad"], ["href", "/customer-service.html", 1, "newbiecard-anc-w"], ["src", "/content/dam/tataaialifeinsurancecompanylimited/customer-service/premium-payment.svg", 1, "lozad"], [1, "f-center"], ["href", "https://myinsurance.tataaia.com/", "data-attribute", "aa-login-button", "rel", "noreferrer noopener", 1, "primary-btn", "primary-bg", "br-10", "white-col", "btn"], [1, "newbie-lhs", "ani-rhs"], ["media", "(max-width:768px)", "srcset", "/content/dam/tataaia/homepage/happy-member.png"], ["src", "assets/happy-member.png", "alt", "", 1, "mb-1", "lozad"], [1, "section-title"]], template: function CarosolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pay premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Download premium certificate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Register claim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Raise service request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Other services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "source", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "I am a Happy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJvc29sLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "zRVK":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/user-claimed-policy-details/user-claimed-policy-details.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: UserClaimedPolicyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserClaimedPolicyDetailsComponent", function() { return UserClaimedPolicyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_claimed_policy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/claimed-policy.service */ "WAZS");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function UserClaimedPolicyDetailsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Policy Holder Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "User Identity Number :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Policy Number :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Duration (in years) :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Premium amount :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Claimed Date :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const claim_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Plan ID = ", claim_r1.claimedPolicy.planId, " :-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", claim_r1.policy.policyName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", claim_r1.user.firstName, " ", claim_r1.user.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", claim_r1.user.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](claim_r1.policy.policyId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](claim_r1.policy.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" INR.", claim_r1.policy.premiumAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", claim_r1.claimedPolicy.claimedDate, "");
} }
class UserClaimedPolicyDetailsComponent {
    constructor(route, router, claimedPolicyService, authservice) {
        this.route = route;
        this.router = router;
        this.claimedPolicyService = claimedPolicyService;
        this.authservice = authservice;
    }
    ngOnInit() {
        this.planId = this.route.snapshot.params['planId'];
        console.log(+this.authservice.getUserId());
        console.log(this.planId);
        this.claimedPolicyService.findByPlanIdAndUserId(+this.authservice.getUserId(), +this.planId).subscribe(data => {
            this.claimpolicy = data;
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    go() {
        this.router.navigate(['policy-list']);
    }
}
UserClaimedPolicyDetailsComponent.ɵfac = function UserClaimedPolicyDetailsComponent_Factory(t) { return new (t || UserClaimedPolicyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_claimed_policy_service__WEBPACK_IMPORTED_MODULE_2__["ClaimedPolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
UserClaimedPolicyDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserClaimedPolicyDetailsComponent, selectors: [["app-user-claimed-policy-details"]], decls: 11, vars: 1, consts: [[1, "pb-5"], [1, "container"], [1, "section-title", 2, "text-align", "center"], [1, "row", "justify-content-center"], [1, "col-xs-4", "col-sm-4", "col-md-4"], [1, "card"], ["class", "card-body text-center", 4, "ngFor", "ngForOf"], [1, "text-center"], ["id", "ExplPlanbtn", 1, "btn", "btn-primary", 3, "click"], [1, "card-body", "text-center"], [1, "card-header", "bg-info"], [1, "card-text"]], template: function UserClaimedPolicyDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserClaimedPolicyDetailsComponent_div_6_Template, 30, 9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserClaimedPolicyDetailsComponent_Template_button_click_9_listener() { return ctx.go(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Go Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.claimpolicy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWNsYWltZWQtcG9saWN5LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map