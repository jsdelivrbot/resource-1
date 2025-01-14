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
var Demo10Component = (function () {
    function Demo10Component() {
        this.opacityValue = 0;
    }
    Demo10Component.prototype.ngOnInit = function () { };
    Demo10Component.prototype.handleClick = function () {
        var _this = this;
        //启动定时器，修改数据
        setInterval(function () {
            _this.opacityValue += 0.1;
            if (_this.opacityValue > 1) {
                _this.opacityValue = 0;
            }
        }, 500);
    };
    Demo10Component = __decorate([
        core_1.Component({
            selector: 'demo10',
            template: "\n    <p [ngStyle]=\"{opacity:opacityValue}\"> it is a paragraph </p>\n    <button (click)=\"handleClick()\">clickMe</button>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Demo10Component);
    return Demo10Component;
}());
exports.Demo10Component = Demo10Component;
//# sourceMappingURL=demo10.component.js.map