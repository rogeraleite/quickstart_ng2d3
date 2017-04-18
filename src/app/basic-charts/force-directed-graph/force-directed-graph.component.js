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
var ForceDirectedGraphComponent = (function () {
    function ForceDirectedGraphComponent(route) {
        this.width = +900;
        this.height = +600;
        this.simulation = d3.forceSimulation()
            .force("link", d3.forceLink().distance(10).strength(0.5))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(this.width / 2, this.height / 2));
    }
    ForceDirectedGraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.svg = d3.select('svg');
        this.color = d3.scaleOrdinal(d3.schemeCategory20);
        d3.json("../app/shared/miserables.json")
            .get(function (error, graph) {
            if (error)
                throw error;
            var nodes = graph.nodes, nodeById = d3.map(nodes, function (d) { return d.id; }), links = graph.links, bilinks = [];
            links.forEach(function (link) {
                var s = link.source = nodeById.get(link.source), t = link.target = nodeById.get(link.target), i = {}; // intermediate node
                nodes.push(i);
                links.push({ source: s, target: i }, { source: i, target: t });
                bilinks.push([s, i, t]);
            });
            var link = _this.svg.selectAll(".link")
                .data(bilinks)
                .enter().append("path")
                .attr("class", "link");
            var node = _this.svg.selectAll(".node")
                .data(nodes.filter(function (d) { return d.id; }))
                .enter().append("circle")
                .attr("class", "node")
                .attr("r", 5)
                .attr("fill", function (d) { return _this.color(d.group); })
                .call(d3.drag()
                .on("start", function (d) {
                if (!d3.event.active)
                    _this.simulation.alphaTarget(0.3).restart();
                d.fx = d.x, d.fy = d.y;
            })
                .on("drag", _this.dragged)
                .on("end", function (d) {
                if (!d3.event.active)
                    _this.simulation.alphaTarget(0);
                d.fx = null, d.fy = null;
            }));
            node.append("title")
                .text(function (d) { return d.id; });
            _this.simulation
                .nodes(nodes)
                .on("tick", function () { link.attr("d", _this.positionLink); node.attr("transform", _this.positionNode); });
            _this.simulation.force("link")
                .links(links);
        });
    };
    ForceDirectedGraphComponent.prototype.positionLink = function (d) {
        return "M" + d[0].x + "," + d[0].y
            + "S" + d[1].x + "," + d[1].y
            + " " + d[2].x + "," + d[2].y;
    };
    ForceDirectedGraphComponent.prototype.positionNode = function (d) {
        return "translate(" + d.x + "," + d.y + ")";
    };
    ForceDirectedGraphComponent.prototype.dragged = function (d) {
        d.fx = d3.event.x, d.fy = d3.event.y;
    };
    return ForceDirectedGraphComponent;
}());
ForceDirectedGraphComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-force-directed-graph',
        templateUrl: 'force-directed-graph.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ForceDirectedGraphComponent);
exports.ForceDirectedGraphComponent = ForceDirectedGraphComponent;
//# sourceMappingURL=force-directed-graph.component.js.map