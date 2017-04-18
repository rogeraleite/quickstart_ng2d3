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
var d3 = require("d3");
var BubbleChartComponent = (function () {
    function BubbleChartComponent(route) {
        this.route = route;
        this.width = +900;
        this.height = +500;
    }
    BubbleChartComponent.prototype.ngOnInit = function () {
        this.svg = d3.select('svg');
        this.format = d3.format(",d");
        this.color = d3.scaleOrdinal(d3.schemeCategory20c);
        this.pack = d3.pack()
            .size([this.width, this.height])
            .padding(1.5);
        this.createChart();
    };
    BubbleChartComponent.prototype.createChart = function () {
        var _this = this;
        d3.csv("../app/shared/flare.csv", function (d) {
            d.value = +d.value;
            if (d.value)
                return d;
        }, function (error, classes) {
            var root = d3.hierarchy({ children: classes })
                .sum(function (d) { return d.value; })
                .each(function (d) {
                if (id = d.data.id) {
                    var id, i = id.lastIndexOf(".");
                    d.id = id;
                    d.package = id.slice(0, i);
                    d.class = id.slice(i + 1);
                }
            });
            var node = _this.svg.selectAll(".node")
                .data(_this.pack(root).leaves())
                .enter().append("g")
                .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });
            node.append("circle")
                .attr("id", function (d) { return d.id; })
                .attr("r", function (d) { return d.r; })
                .style("fill", function (d) { return _this.color(d.package); });
            node.append("clipPath")
                .attr("id", function (d) { return "clip-" + d.id; })
                .append("use")
                .attr("xlink:href", function (d) { return "#" + d.id; });
            node.append("text")
                .attr("clip-path", function (d) { return "url(#clip-" + d.id + ")"; })
                .selectAll("tspan")
                .data(function (d) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
                .enter().append("tspan")
                .attr("x", 0)
                .attr("y", function (d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
                .text(function (d) { return d; });
            node.append("title")
                .text(function (d) { return d.id + "\n" + _this.format(d.value); });
        });
    };
    return BubbleChartComponent;
}());
BubbleChartComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-bubble-chart',
        templateUrl: 'bubble-chart.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], BubbleChartComponent);
exports.BubbleChartComponent = BubbleChartComponent;
//# sourceMappingURL=bubble-chart.component.js.map