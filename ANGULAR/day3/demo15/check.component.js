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
var CheckComponent = (function () {
    function CheckComponent(myRouter, myAR) {
        this.myRouter = myRouter;
        this.myAR = myAR;
    }
    CheckComponent.prototype.ngOnInit = function () {
        this.myAR.params
            .subscribe(function (data) {
            console.log(data);
        });
    };
    //跳转到支付页面
    CheckComponent.prototype.jumpToPay = function () {
        this.myRouter.navigateByUrl('/pay/100');
    };
    CheckComponent = __decorate([
        core_1.Component({
            selector: 'check',
            template: "\n    <h1> \u8FD9\u662F\u5546\u54C1\u67E5\u770B\u9875\u9762 </h1>\n    <button (click)=\"jumpToPay()\">\u53BB\u652F\u4ED8</button>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], CheckComponent);
    return CheckComponent;
}());
exports.CheckComponent = CheckComponent;
//# sourceMappingURL=check.component.js.map