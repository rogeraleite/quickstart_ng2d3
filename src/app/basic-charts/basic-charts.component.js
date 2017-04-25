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
var BasicChartsComponent = (function () {
    function BasicChartsComponent(router) {
        this.router = router;
    }
    BasicChartsComponent.prototype.ngOnInit = function () {
        this.setDataFile();
    };
    BasicChartsComponent.prototype.setDataFile = function () {
        this.file_add = "../app/shared/cars.csv";
    };
    return BasicChartsComponent;
}());
BasicChartsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-basic-charts',
        templateUrl: 'basic-charts.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], BasicChartsComponent);
exports.BasicChartsComponent = BasicChartsComponent;
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
//# sourceMappingURL=basic-charts.component.js.map