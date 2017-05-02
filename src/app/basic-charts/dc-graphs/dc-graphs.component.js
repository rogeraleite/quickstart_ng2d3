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
/// <reference path="../../../../node_modules/@types/crossfilter/index.d.ts" />
/// <reference path="../../../../node_modules/@types/dc/index.d.ts" />
var d3 = require("d3");
var DcGraphsComponent = (function () {
    function DcGraphsComponent(router, route) {
        this.router = router;
        this.route = route;
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        this.spendData = [
            { name: 'Mr A', spent: 40, year: 2011 },
            { name: 'Mr B', spent: 10, year: 2011 },
            { name: 'Mr C', spent: 40, year: 2011 },
            { name: 'Mr A', spent: 70, year: 2012 },
            { name: 'Mr B', spent: 20, year: 2012 },
            { name: 'Mr B', spent: 50, year: 2013 },
            { name: 'Mr C', spent: 30, year: 2013 }
        ];
        this.width = 960 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
        this.y = [];
    }
    DcGraphsComponent.prototype.ngOnInit = function () {
        this.dim_and_group_construction();
        this.graphs_construction();
        this.style_fix();
    };
    DcGraphsComponent.prototype.dim_and_group_construction = function () {
        this.ndx = crossfilter(this.spendData);
        this.yearDim = this.ndx.dimension(function (d) { return +d.year; });
        this.spendDim = this.ndx.dimension(function (d) { return Math.floor(d.spent / 10); });
        this.nameDim = this.ndx.dimension(function (d) { return d.name; });
        this.spendPerYear = this.yearDim.group().reduceSum(function (d) { return +d.spent; });
        this.spendPerName = this.nameDim.group().reduceSum(function (d) { return +d.spent; });
        this.spendHist = this.spendDim.group().reduceCount();
    };
    DcGraphsComponent.prototype.graphs_construction = function () {
        this.yearRingChart = dc.pieChart("#chart-ring-year"),
            this.spendHistChart = dc.barChart("#chart-hist-spend"),
            this.spenderRowChart = dc.rowChart("#chart-row-spenders");
        this.yearRingChart.dimension(this.yearDim)
            .group(this.spendPerYear)
            .innerRadius(50)
            .controlsUseVisibility(true);
        this.spendHistChart.dimension(this.spendDim)
            .group(this.spendHist)
            .x(d3.scaleLinear().domain([0, 10]))
            .elasticY(true)
            .controlsUseVisibility(true);
        this.spendHistChart.xAxis().tickFormat(function (d) { return d * 10; }); // convert back to base unit
        this.spendHistChart.yAxis().ticks(2);
        this.spenderRowChart.dimension(this.nameDim)
            .group(this.spendPerName)
            .elasticX(true)
            .controlsUseVisibility(true);
        dc.renderAll();
    };
    DcGraphsComponent.prototype.style_fix = function () {
        //etwas
    };
    return DcGraphsComponent;
}());
DcGraphsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-dc-graphs',
        templateUrl: 'dc-graphs.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], DcGraphsComponent);
exports.DcGraphsComponent = DcGraphsComponent;
//# sourceMappingURL=dc-graphs.component.js.map