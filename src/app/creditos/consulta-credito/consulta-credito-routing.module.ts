import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmConsultaCreditoComponent } from './components/adm-consulta-credito/adm-consulta-credito.component';
import { ShowCreditoComponent } from './components/show-credito/show-credito.component';

const routes: Routes = [
  { path: 'adm', component: AdmConsultaCreditoComponent },
  { path: 'show', component: ShowCreditoComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaCreditoRoutingModule { }
