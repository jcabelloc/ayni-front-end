import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimulacionCreditoComponent } from './components/simulacion-credito/simulacion-credito.component';

const routes: Routes = [
  { path: 'simulacion', component: SimulacionCreditoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulacionCreditoRoutingModule { }
