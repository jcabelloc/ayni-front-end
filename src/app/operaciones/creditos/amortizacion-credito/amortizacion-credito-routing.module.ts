import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmAmortizacionCreditoComponent } from './components/adm-amortizacion-credito/adm-amortizacion-credito.component';

const routes: Routes = [
  { path: 'adm', component: AdmAmortizacionCreditoComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmortizacionCreditoRoutingModule { }
