import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RptCarteraCreditosComponent } from './components/rpt-cartera-creditos/rpt-cartera-creditos.component';
import { RptAmortizacionesComponent } from './components/rpt-amortizaciones/rpt-amortizaciones.component';

const routes: Routes = [
  { path: 'cartera-creditos', component: RptCarteraCreditosComponent },
  { path: 'amortizaciones', component: RptAmortizacionesComponent },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }
