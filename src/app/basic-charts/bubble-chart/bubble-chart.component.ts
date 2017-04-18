import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import * as d3 from 'd3';
@Component({
    moduleId: module.id,
    selector: 'cm-bubble-chart',
    templateUrl: 'bubble-chart.component.html'
})
export class BubbleChartComponent implements OnInit {
        
    private svg: any;
    private width: any;
    private height: any;
    private color: any;
    private format: any;
    private pack: any;

    constructor(private route: ActivatedRoute){
        this.width =+ 900;
        this.height =+ 500;
    }

    ngOnInit(): void {
        this.svg = d3.select('svg');
        this.format = d3.format(",d");
        this.color = d3.scaleOrdinal(d3.schemeCategory20c);
        
        this.pack = d3.pack()
            .size([this.width, this.height])
            .padding(1.5);
        this.createChart();
    }

    private createChart(){
        d3.csv("../app/shared/flare.csv", (d:any) => {
            d.value = +d.value;
            if (d.value) return d;
        },(error, classes)=>{
            var root = d3.hierarchy({children: classes})
            .sum((d:any) => { return d.value; })
            .each((d:any) => {
                if (id = d.data.id) {
                var id:any, i:any = id.lastIndexOf(".");
                d.id = id;
                d.package = id.slice(0, i);
                d.class = id.slice(i + 1);
                }
            });

            var node = this.svg.selectAll(".node")
                .data(this.pack(root).leaves())
                .enter().append("g")
                .attr("transform", (d:any) => { return "translate(" + d.x + "," + d.y + ")"; });

            node.append("circle")
                .attr("id", (d:any)=> { return d.id; })
                .attr("r", (d:any)=> { return d.r; })
                .style("fill", (d:any)=> { return this.color(d.package); });

            node.append("clipPath")
                .attr("id", (d:any)=> { return "clip-" + d.id; })
                .append("use")
                .attr("xlink:href", (d:any)=> { return "#" + d.id; });

            node.append("text")
                .attr("clip-path", (d:any)=> { return "url(#clip-" + d.id + ")"; })
                .selectAll("tspan")
                .data((d:any)=> { return d.class.split(/(?=[A-Z][^A-Z])/g); })
                .enter().append("tspan")
                .attr("x", 0)
                .attr("y", (d:any, i:any, nodes:any) => { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
                .text((d:any)=> { return d; });

            node.append("title")
                .text((d:any)=> { return d.id + "\n" + this.format(d.value); });
         });
    }
    // tslint:disable-next-line:no-trailing-whitespace
}