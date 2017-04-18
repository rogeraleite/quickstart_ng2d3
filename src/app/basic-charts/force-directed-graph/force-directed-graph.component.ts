import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as d3 from 'd3';

@Component(
    {
        moduleId: module.id,
        selector: 'cm-force-directed-graph',
        templateUrl: 'force-directed-graph.component.html'
    }
)
export class ForceDirectedGraphComponent implements OnInit {

    private svg: any;
    private width: any;
    private height: any;
    private color: any;
    public simulation: any;

    constructor(route: ActivatedRoute) {

        this.width = + 900;
        this.height = + 600;
        this.simulation = d3.forceSimulation()
            .force("link", d3.forceLink().distance(10).strength(0.5))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(this.width / 2, this.height / 2));
    }
    ngOnInit(): void {
        this.svg = d3.select('svg');
        this.color = d3.scaleOrdinal(d3.schemeCategory20);
        d3.json("../app/shared/miserables.json")
            .get((error: any, graph: any) => {
                if (error) throw error;
                let nodes = graph.nodes,
                    nodeById = d3.map(nodes, (d: any) => d.id),
                    links = graph.links,
                    bilinks: any = [];

                links.forEach(function (link: any) {
                    var s = link.source = nodeById.get(link.source),
                        t = link.target = nodeById.get(link.target),
                        i = {}; // intermediate node
                    nodes.push(i);
                    links.push({ source: s, target: i }, { source: i, target: t });
                    bilinks.push([s, i, t]);
                });

                let link = this.svg.selectAll(".link")
                    .data(bilinks)
                    .enter().append("path")
                    .attr("class", "link");

                let node = this.svg.selectAll(".node")
                    .data(nodes.filter((d: any) => d.id))
                    .enter().append("circle")
                    .attr("class", "node")
                    .attr("r", 5)
                    .attr("fill", (d: any) => this.color(d.group))
                    .call(d3.drag()
                        .on("start", (d: any) => {
                                        if (!d3.event.active) 
                                            this.simulation.alphaTarget(0.3).restart();
                                        d.fx = d.x, d.fy = d.y;
                        })
                        .on("drag", this.dragged)
                        .on("end", (d: any) => {
                            if (!d3.event.active) this.simulation.alphaTarget(0);
                            d.fx = null, d.fy = null;
                        }));

                node.append("title")
                    .text((d: any) => d.id);

                this.simulation
                    .nodes(nodes)
                    .on("tick", ()=>{link.attr("d", this.positionLink); node.attr("transform", this.positionNode);});

                this.simulation.force("link")
                    .links(links);
            });
    }
   
    private positionLink(d: any) {
        return "M" + d[0].x + "," + d[0].y
            + "S" + d[1].x + "," + d[1].y
            + " " + d[2].x + "," + d[2].y;
    }

    private positionNode(d: any) {
        return "translate(" + d.x + "," + d.y + ")";
    }

    private dragged(d: any) {
        d.fx = d3.event.x, d.fy = d3.event.y;
    }
    // tslint:disable-next-line:one-line
}