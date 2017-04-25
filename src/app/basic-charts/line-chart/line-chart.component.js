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
var d3 = require("d3");
var data_1 = require("../../shared/data");
var LineChartComponent = (function () {
    function LineChartComponent(router, route, _carsService) {
        this.router = router;
        this.route = route;
        this._carsService = _carsService;
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
    }
    LineChartComponent.prototype.ngOnInit = function () {
        this.getCars();
        this.initSvg();
        this.initAxis();
        this.drawAxis();
        this.drawLine();
    };
    LineChartComponent.prototype.initSvg = function () {
        this.svg = d3.select('#cm-linechart svg')
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        ;
    };
    LineChartComponent.prototype.initAxis = function () {
        this.x = d3.scaleTime().range([0, this.width]);
        this.y = d3.scaleLinear().range([this.height, 0]);
        this.x.domain(d3.extent(data_1.Stocks, function (d) { return d.date; }));
        this.y.domain(d3.extent(data_1.Stocks, function (d) { return d.value; }));
    };
    LineChartComponent.prototype.drawAxis = function () {
        this.svg.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3.axisBottom(this.x));
        this.svg.append('g')
            .attr('class', 'axis axis--y')
            .call(d3.axisLeft(this.y))
            .append('text')
            .attr('class', 'axis-title')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '.71em')
            .style('text-anchor', 'end')
            .text('Price ($)');
    };
    LineChartComponent.prototype.drawLine = function () {
        var _this = this;
        this.line = d3.line()
            .x(function (d) { return _this.x(d.date); })
            .y(function (d) { return _this.y(d.value); });
        this.svg.append('path')
            .datum(data_1.Stocks)
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-linejoin', 'round')
            .attr('stroke-linecap', 'round')
            .attr('stroke-width', 1.5)
            .attr('d', this.line);
    };
    LineChartComponent.prototype.getCars = function () {
        var _this = this;
        this._carsService.getCars().then(function (cars) { return _this.cars = cars; });
    };
    return LineChartComponent;
}());
LineChartComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-linechart',
        templateUrl: 'line-chart.component.html',
        providers: [cars_service_1.CarsService]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, cars_service_1.CarsService])
], LineChartComponent);
exports.LineChartComponent = LineChartComponent;
//# sourceMappingURL=line-chart.component.js.map