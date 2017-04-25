import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {CarsService} from '../../services/cars.service';
import {Cars} from '../../shared/cars';

declare var parcoords: any;

import '../../../../node_modules/d3.parcoords.js/d3.parcoords.js';

import * as d3 from 'd3';



// D3 Example
// https://bl.ocks.org/mbostock/22994cc97fefaeede0d861e6815a847e
// *observe how some d3 calls were also updated
// * ex: d3.drag()

@Component({
    moduleId: module.id,
    selector: 'cm-parallelcoordinates',
    templateUrl: 'parallel-coordinates.component.html',
    providers: [CarsService]
})
export class ParallelCoordinatesComponent implements OnInit {

    private margin = {top: 20, right: 20, bottom: 30, left: 50};
    private width: number;
    private height: number;
    private x: any;
    private y: any[];
    private svg: any;
    //private line: d3.svg;

    public cars: Cars[];
    public dimensions: any[];

    private background: any;
    private foreground: any;
    private g: any;
    private dragging: any[];
    private line: any;

    private dragstart: any;
    private drag: any;
    private dragend: any;


    private temp_data: any[] = [
      [0,-0,0,0,0,3 ],
      [1,-1,1,2,1,6 ],
      [2,-2,4,4,0.5,2],
      [3,-3,9,6,0.33,4],
      [4,-4,16,8,0.25,9]
    ];


    constructor(private router: Router, private route: ActivatedRoute, private _carsService: CarsService) {
      this.width = 960 - this.margin.left - this.margin.right;
      this.height = 500 - this.margin.top - this.margin.bottom;
      this.y = [];
    }

    ngOnInit() {
      this.getCars();
      this.createPCFunction();

      this.temp_pc();

    }

    getCars(){
      this._carsService.getCars().then((cars: Cars[]) => this.cars = cars);
    }

    private createPCFunction(){
      //this solution to manage other library comes from:
      //http://stackoverflow.com/questions/37081943/angular2-import-external-js-file-into-component
      new parcoords(); //parcoords is a function in d3.parcoods.js (originally: d3.parcoords)
    }

    private temp_pc(){
        parcoords()("#cm-parallelcoordinates")
                .data(this.temp_data)
                .render()
                .createAxes();
    }

/*
    private initSvg() {
      this.svg = d3.select('#cm-parallelcoordinates svg')
                   .append('g')
                   .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
      
      this.line = d3.line();
                    //.x( (d: any) => this.x(d.date) )
                    //.y( (d: any) => this.y(d.value) ); 
    }

    private initAxis() {
      
      this.x = d3.scaleOrdinal().range([0, this.width]);
      // Extract the list of dimensions and create a scale for each.
      this.x.domain(this.dimensions = d3.keys(Cars).filter(function(d) {
        return d != "name" && (this.y[d] = d3.scaleLinear()
            .domain(d3.extent(Cars, function(p) { return +p[d]; }))
            .range([this.height, 0]));
      }));
      // this.x = d3.scaleTime().range([0, this.width]);
      // this.y = d3.scaleLinear().range([this.height, 0]);
      // this.x.domain(d3.extent(Stocks, (d) => d.date ));
      // this.y.domain(d3.extent(Stocks, (d) => d.value ));
    }

    private drawLine() {

      // Add grey background lines for context.

      this.background = this.svg.append("g")
          .attr("class", "background")
          .selectAll("path")
          .data(Cars)
          .enter().append("path")
          .attr("d", this.path);

      // Add blue foreground lines for focus.
      this.foreground = this.svg.append("g")
          .attr("class", "foreground")
          .selectAll("path")
          .data(Cars)
          .enter().append("path")
          .attr("d", this.path);
    }

    private drawAxis(){
      // Add a group element for each dimension.
      //var drag = d3.DragBehavior{};
      this.dragstart =  function(d:any) {
              this.dragging[d] = this.x(d);
              this.background.attr("visibility", "hidden");
            };
      this.drag = function(d:any) {
              this.dragging[d] = Math.min(this.width, Math.max(0, d3.event.x));
              this.foreground.attr("d", this.path);
              this.dimensions.sort(function(a:any, b:any) { return this.position(a) - this.position(b); });
              this.x.domain(this.dimensions);
              g.attr("transform", function(d:any) { return "translate(" + this.position(d) + ")"; })
            };

      this.dragend = function(d:any) {
              delete this.dragging[d];
              this.transition(d3.select(this)).attr("transform", "translate(" + this.x(d) + ")");
              this.transition(this.foreground).attr("d", this.path);
              this.background
                  .attr("d", this.path)
                  .transition()
                  .delay(500)
                  .duration(0)
                  .attr("visibility", null)
            };

      var g = this.svg.selectAll(".dimension")
          .data(this.dimensions)
          .enter().append("g")
          .attr("class", "dimension")
          .attr("transform", function(d:any) { return "translate(" + this.x(d) + ")"; })
          .call(d3.drag()
                  //.origin(function(d:any) { return {x: this.x(d)}; })
                  .on("start", this.dragstart)
                  .on("drag", this.drag)
                  .on("end", this.dragend));

      // Add an axis and title.
      g.append("g")
          .attr("class", "axis")
          .each(function(d:any) { 
            d3.select(this)
               .call(d3.axisLeft(this.y)); 
            })
          .append("text")
          .style("text-anchor", "middle")
          .attr("y", -9)
          .text(function(d:any) { return d; });

      // Add and store a brush for each axis.
      g.append("g")
          .attr("class", "brush")
          .each(function(d:any) {
            d3.select(this).call(this.y[d].brush = this.svg.brush().y(this.y[d]).on("brushstart", this.brushstart).on("brush", this.brush));
          })
          .selectAll("rect")
          .attr("x", -8)
          .attr("width", 16);
    }
    ///////////////////////////////////////////////////////////////////
    
    private position(d:any) {
      var v = this.dragging[d];
      return v == null ? this.x(d) : v;
    }


    private path(d:any){
      
      console.log(this.dimensions.map(function(p:any) {
       return [this.position(p), this.y[p](d[p])]; 
      }));

      return this.line(this.dimensions.map(function(p:any) {
       return [this.position(p), this.y[p](d[p])]; 
      }));
    }

    private transition(g:any) {
      return g.transition().duration(500);
    }
    
    // Returns the path for a given data point.
    private brushstart() {
      d3.event.sourceEvent.stopPropagation();
    }

    // Handles a brush event, toggling the display of foreground lines.
    private brush() {
      var actives = this.dimensions.filter(function(p) { return !this.y[p].brush.empty(); }),
          extents = actives.map(function(p) { return this.y[p].brush.extent(); });
        this.foreground.style("display", function(d:any) {
        return actives.every(function(p, i) {
          return extents[i][0] <= d[p] && d[p] <= extents[i][1];
        }) ? null : "none";
      });
    }
*/
}