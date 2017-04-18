import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicChartsComponent }   from './basic-charts.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ForceDirectedGraphComponent } from './force-directed-graph/force-directed-graph.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';

const routes: Routes = [
  {
    path: '',
    component: BasicChartsComponent,
    children: [
      { path: 'line-chart',  component: LineChartComponent },
      { path: 'force-directed-graph',  component: ForceDirectedGraphComponent },
      { path: 'bubble-chart',  component: BubbleChartComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BasicChartsRoutingModule {
  static components = [ BasicChartsComponent, LineChartComponent,
  ForceDirectedGraphComponent, BubbleChartComponent ];
}
