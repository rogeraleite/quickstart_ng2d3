"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var basic_charts_component_1 = require("./basic-charts.component");
var line_chart_component_1 = require("./line-chart/line-chart.component");
var force_directed_graph_component_1 = require("./force-directed-graph/force-directed-graph.component");
var bubble_chart_component_1 = require("./bubble-chart/bubble-chart.component");
var parallel_coordinates_component_1 = require("./parallel-coordinates/parallel-coordinates.component");
var dc_graphs_component_1 = require("./dc-graphs/dc-graphs.component");
var routes = [
    {
        path: '',
        component: basic_charts_component_1.BasicChartsComponent,
        children: [
            { path: 'line-chart', component: line_chart_component_1.LineChartComponent },
            { path: 'force-directed-graph', component: force_directed_graph_component_1.ForceDirectedGraphComponent },
            { path: 'bubble-chart', component: bubble_chart_component_1.BubbleChartComponent },
            { path: 'parallel-coordinates', component: parallel_coordinates_component_1.ParallelCoordinatesComponent },
            { path: 'dc-graphs', component: dc_graphs_component_1.DcGraphsComponent }
        ]
    }
];
var BasicChartsRoutingModule = (function () {
    function BasicChartsRoutingModule() {
    }
    return BasicChartsRoutingModule;
}());
BasicChartsRoutingModule.components = [basic_charts_component_1.BasicChartsComponent, line_chart_component_1.LineChartComponent,
    force_directed_graph_component_1.ForceDirectedGraphComponent, bubble_chart_component_1.BubbleChartComponent, parallel_coordinates_component_1.ParallelCoordinatesComponent,
    dc_graphs_component_1.DcGraphsComponent];
BasicChartsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], BasicChartsRoutingModule);
exports.BasicChartsRoutingModule = BasicChartsRoutingModule;
//# sourceMappingURL=basic-charts-routing.module.js.map