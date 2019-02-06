import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RptCarteraCreditosComponent } from './components/rpt-cartera-creditos/rpt-cartera-creditos.component';
import { RptAmortizacionesComponent } from './components/rpt-amortizaciones/rpt-amortizaciones.component';
import { RptOperacionesComponent } from './components/rpt-operaciones/rpt-operaciones.component';

const routes: Routes = [
  { path: 'cartera-creditos', component: RptCarteraCreditosComponent },
  { path: 'amortizaciones', component: RptAmortizacionesComponent },
  { path: 'operaciones', component: RptOperacionesComponent },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }
