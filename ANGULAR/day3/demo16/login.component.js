"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(myRouter) {
        this.myRouter = myRouter;
        this.myName = "";
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.doLogin = function () {
        this.myRouter.navigate(['/dashboard', { uname: this.myName }]);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n     <h1> \u8FD9\u662F\u767B\u5F55\u9875\u9762 </h1>\n     <input type=\"text\" [(ngModel)]=\"myName\"/>\n     <br/>\n     <button (click)=\"doLogin()\">\u767B\u5F55</button>\n     <br/>\n     <a [routerLink]=\"['/dashboard',{uname:this.myName}]\"> \n     \u767B\u5F55 \n     </a>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map