import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmAmortizacionCreditoComponent } from './components/adm-amortizacion-credito/adm-amortizacion-credito.component';
import { CreateAmortizacionCreditoComponent } from './components/create-amortizacion-credito/create-amortizacion-credito.component';
import { ShowAmortizacionComponent } from './components/show-amortizacion/show-amortizacion.component';

const routes: Routes = [
  { path: 'adm', component: AdmAmortizacionCreditoComponent },
  { path: 'create', component: CreateAmortizacionCreditoComponent },
  { path: 'show/:id', component: ShowAmortizacionComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmortizacionCreditoRoutingModule { }
