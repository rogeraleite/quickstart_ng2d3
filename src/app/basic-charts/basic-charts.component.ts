import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


import * as d3 from 'd3';
declare var jQuery: any;
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'cm-basic-charts',
  templateUrl: 'basic-charts.component.html'
})
export class BasicChartsComponent implements OnInit {
    
	public file_add : string;

    constructor(private router: Router) { }

    ngOnInit(): void {
    	this.setDataFile();
    }

    private setDataFile(){
    	this.file_add = "../app/shared/cars.csv";
    }

    
    
// tslint:disable-next-line:eofline
}



	// private readCSV(){
 //    	this.parseList(["../app/shared/cars.csv"]);
 //    }

 //    private parseList(filenames:string[]){
	//   var q = d3.queue();

	//   filenames.forEach(function(d) {
	// 	    //add your csv call to the queue
	// 	    q.defer(function(callback) {
	// 	      d3.csv(d,function(res) { callback(null, res) });
	// 	      // d3.csv(d,function(res) { 
	// 	      // 	this.data_ = res;
	// 	      // });
	// 	    });
	//   });

	//   q.await(this.getLoadedData);
	// }  

	// private getLoadedData(err:any, results:any) {
	//   //results is an array of each of your csv results
	//   this.data_ = results;
	//   this.data_.forEach(function(d:any) {    
	//   		console.log(this.data_);
	//   });

	// }