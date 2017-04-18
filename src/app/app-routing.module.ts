import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/basic-charts' },
  { path: 'basic-charts', loadChildren: 'app/basic-charts/basic-charts.module#BasicChartsModule'},
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule'},
  { path: '**', pathMatch: 'full', redirectTo: '/basic-charts' }
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }