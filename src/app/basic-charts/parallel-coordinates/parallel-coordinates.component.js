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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var cars_service_1 = require("../../services/cars.service");
require("../../../../node_modules/d3.parcoords.js/d3.parcoords.js");
// D3 Example
// https://bl.ocks.org/mbostock/22994cc97fefaeede0d861e6815a847e
// *observe how some d3 calls were also updated
// * ex: d3.drag()
var ParallelCoordinatesComponent = (function () {
    function ParallelCoordinatesComponent(router, route, _carsService) {
        this.router = router;
        this.route = route;
        this._carsService = _carsService;
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        this.temp_data = [
            [0, -0, 0, 0, 0, 3],
            [1, -1, 1, 2, 1, 6],
            [2, -2, 4, 4, 0.5, 2],
            [3, -3, 9, 6, 0.33, 4],
            [4, -4, 16, 8, 0.25, 9]
        ];
        this.width = 960 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
        this.y = [];
    }
    ParallelCoordinatesComponent.prototype.ngOnInit = function () {
        this.getCars();
        this.createPCFunction();
        this.temp_pc();
    };
    ParallelCoordinatesComponent.prototype.getCars = function () {
        var _this = this;
        this._carsService.getCars().then(function (cars) { return _this.cars = cars; });
    };
    ParallelCoordinatesComponent.prototype.createPCFunction = function () {
        //this solution to manage other library comes from:
        //http://stackoverflow.com/questions/37081943/angular2-import-external-js-file-into-component
        new parcoords(); //parcoords is a function in d3.parcoods.js (originally: d3.parcoords)
    };
    ParallelCoordinatesComponent.prototype.temp_pc = function () {
        parcoords()("#cm-parallelcoordinates")
            .data(this.temp_data)
            .render()
            .createAxes();
    };
    return ParallelCoordinatesComponent;
}());
ParallelCoordinatesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-parallelcoordinates',
        templateUrl: 'parallel-coordinates.component.html',
        providers: [cars_service_1.CarsService]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, cars_service_1.CarsService])
], ParallelCoordinatesComponent);
exports.ParallelCoordinatesComponent = ParallelCoordinatesComponent;
//# sourceMappingURL=parallel-coordinates.component.js.map