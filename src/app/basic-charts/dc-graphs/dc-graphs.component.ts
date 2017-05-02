import {Component, OnInit, enableProdMode } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
//import {CrossFilter} from '../../../../node_modules/retyped-crossfilter-tsd-ambient/crossfilter.d';

/// <reference path="../../../../node_modules/@types/crossfilter/index.d.ts" />
/// <reference path="../../../../node_modules/@types/dc/index.d.ts" />

import * as d3 from 'd3';

declare var $: any;
declare var dc: any;
//import '../../../../node_modules/crossfilter/crossfilter.js';//important also to import in index.html
//import '../../../../node_modules/dc/dc.js';//important also to import in index.html
interface Spend {
    name: string;
    spent: number;
    year: number;
}

@Component({
    moduleId: module.id,
    selector: 'cm-dc-graphs',
    templateUrl: 'dc-graphs.component.html'
})
export class DcGraphsComponent implements OnInit {

    private margin = {top: 20, right: 20, bottom: 30, left: 50};
    private width: number;
    private height: number;
    private x: any;
    private y: any[];
    private svg: any;

    private yearRingChart: any;
    private spendHistChart: any;
    private spenderRowChart: any;

    private yearDim: any;
    private spendPerName: any;
    private nameDim: any;

    private spendPerYear: any;
    private spendDim: any;
    private spendHist: any;

    private ndx: any;    

    private spendData: any[] = [
      {name: 'Mr A', spent: 40, year: 2011},
      {name: 'Mr B', spent: 10, year: 2011},
      {name: 'Mr C', spent: 40, year: 2011},
      {name: 'Mr A', spent: 70, year: 2012},
      {name: 'Mr B', spent: 20, year: 2012},
      {name: 'Mr B', spent: 50, year: 2013},
      {name: 'Mr C', spent: 30, year: 2013}
    ];


    constructor(private router: Router, private route: ActivatedRoute) {
      this.width = 960 - this.margin.left - this.margin.right;
      this.height = 500 - this.margin.top - this.margin.bottom;
      this.y = [];
    }

    ngOnInit() {
      this.createPCFunction();

      this.dim_and_group_construction();
      this.graphs_construction();
      this.style_fix();
    }

    private createPCFunction(){
      //this solution to manage other library comes from:
      //http://stackoverflow.com/questions/37081943/angular2-import-external-js-file-into-component
      //new dc(); //parcoords is a var in dc.js
    }

    private dim_and_group_construction(){

        this.ndx = crossfilter(this.spendData);

        this.yearDim  = this.ndx.dimension(function(d: any) {return +d.year;});
        this.spendDim = this.ndx.dimension(function(d: any) {return Math.floor(d.spent/10);});
        this.nameDim  = this.ndx.dimension(function(d: any) {return d.name;});

        this.spendPerYear = this.yearDim.group().reduceSum(function(d: any) {return +d.spent;});
        this.spendPerName = this.nameDim.group().reduceSum(function(d: any) {return +d.spent;});
        this.spendHist    = this.spendDim.group().reduceCount();
    }

    private graphs_construction(){
      this.yearRingChart   = dc.pieChart("#chart-ring-year"),
      this.spendHistChart  = dc.barChart("#chart-hist-spend"),
      this.spenderRowChart = dc.rowChart("#chart-row-spenders");

      this.yearRingChart.dimension(this.yearDim)
                        .group(this.spendPerYear)
                        .innerRadius(50)
                        .controlsUseVisibility(true);

      this.spendHistChart.dimension(this.spendDim)
                         .group(this.spendHist)
                         .x(d3.scaleLinear().domain([0,10]))
                         .elasticY(true)
                         .controlsUseVisibility(true);

      this.spendHistChart.xAxis().tickFormat(function(d: any) {return d*10}); // convert back to base unit
      this.spendHistChart.yAxis().ticks(2);

      this.spenderRowChart.dimension(this.nameDim)
                          .group(this.spendPerName)
                          .elasticX(true)
                          .controlsUseVisibility(true);

      dc.renderAll();
    }

    private style_fix(){
      //etwas
    }


}