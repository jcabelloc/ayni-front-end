import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmDesembolsoCreditoComponent } from './components/adm-desembolso-credito/adm-desembolso-credito.component';
import { CreateDesembolsoCreditoComponent } from './components/create-desembolso-credito/create-desembolso-credito.component';

const routes: Routes = [
  { path: 'adm', component: AdmDesembolsoCreditoComponent },
  { path: 'create', component: CreateDesembolsoCreditoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesembolsoCreditoRoutingModule { }
