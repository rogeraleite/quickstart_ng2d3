import {Component, OnInit, enableProdMode } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {CarsService} from '../../services/cars.service';
import {Cars} from '../../shared/cars';

declare var parcoords: any;

import '../../../../node_modules/d3.parcoords.js/d3.parcoords.js';

import * as d3 from 'd3';
declare var $: any;



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
    private pc: any;
    //private line: d3.svg;

    public cars: Cars[];

    private blue_to_red: any;
    private teste: any;


    constructor(private router: Router, private route: ActivatedRoute, private _carsService: CarsService) {
      this.width = 960 - this.margin.left - this.margin.right;
      this.height = 500 - this.margin.top - this.margin.bottom;
      this.y = [];
    }

    ngOnInit() {
      this.getCars();
      this.createPCFunction();

      this.pc_construction();
      this.setupParCoordBehavior();
      this.style_fix();
    }

    getCars(){
      this._carsService.getCars().then((cars: Cars[]) => this.cars = cars);
    }

    private createPCFunction(){
      //this solution to manage other library comes from:
      //http://stackoverflow.com/questions/37081943/angular2-import-external-js-file-into-component
      new parcoords(); //parcoords is a function in d3.parcoods.js (originally: d3.parcoords)
      
    }

    private pc_construction(){
      /*
        this.blue_to_red = d3.scaleQuantize()
                               .domain([0, 50])
                               //.interpolate(d3.interpolateRgb(d3.color("blue"), d3.color("red")))
                               .range([d3.color("blue"), d3.color("red")]);
                               //.interpolator(['red', 'blue'])
                               //.interpolateRgb(d3.color("blue"), d3.color("red"));
                               //.interpolate(d3.interpolateLab);
      */ 
        this.teste = "banana";
        this.pc = parcoords()("#cm-parallelcoordinates")
                .data(Cars)
                .hideAxis(["name"])
                .smoothness(0)
                //.bundleDimension("cylinders") //#presenting bugs
                .showControlPoints(false)
                //.color(function(d: any) { return this.blue_to_brown(d['economy_mpg']); })  // quantitative color scale
                .color(function(d: any) { return d3.color("blue"); })  // quantitative color scale
                .alpha(0.35)
                .render()
                .brushMode("1D-axes")  // enable brushing
                .reorderable()
                .interactive();  // command line mode

    }

    private setupParCoordBehavior(){
            //position bug: fix
            /*
            var panel_deviation = [-10,20];
            var mouse_deviation = [8,10];
            $("#pcscores svg g")[0].setAttribute('transform','translate('+panel_deviation[0]+','+panel_deviation[1]+')');
            */

            //s.resetPC();

            //add hover event
            var svg = d3.select("#cm-parallelcoordinates svg");
            svg.on('mouseup', function(){

                //$("canvas").addClass( "faded" );
                
                // if(parcoords()("#cm-parallelcoordinates").brushed()){
                //   console.log("aaaaa");  
                // }
                // else{console.log("bbbbb");}
              });
            //console.log(this.pc());
            //debugger; 
    }

    private style_fix(){
      $("g.brush").css({ fill: "#CCC", opacity: 0.4}); 
      //$("g.brush").css("opacity", "0.5"); 
    }

}