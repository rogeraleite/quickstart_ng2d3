"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var cars_1 = require("../shared/cars");
var CarsService = (function () {
    function CarsService() {
    }
    CarsService.prototype.getCars = function () {
        return Promise.resolve(cars_1.Cars);
    };
    return CarsService;
}());
CarsService = __decorate([
    core_1.Injectable()
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map