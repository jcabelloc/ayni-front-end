import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RptCarteraCreditosComponent } from './components/rpt-cartera-creditos/rpt-cartera-creditos.component';

const routes: Routes = [
  { path: 'cartera-creditos', component: RptCarteraCreditosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }
