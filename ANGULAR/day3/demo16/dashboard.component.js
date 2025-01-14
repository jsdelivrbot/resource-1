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
var DashboardComponent = (function () {
    function DashboardComponent(myAR) {
        this.myAR = myAR;
        this.userName = "";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        //接收通过路由传递来的参数？
        this.myAR.params.subscribe(function (data) {
            console.log(data);
            _this.userName = data.uname;
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            template: "\n     <h1>\u8FD9\u662F\u4E3B\u9875\u9762 {{userName}}</h1>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map