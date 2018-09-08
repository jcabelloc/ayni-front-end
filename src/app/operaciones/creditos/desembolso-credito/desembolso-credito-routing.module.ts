import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmDesembolsoCreditoComponent } from './components/adm-desembolso-credito/adm-desembolso-credito.component';
import { CreateDesembolsoCreditoComponent } from './components/create-desembolso-credito/create-desembolso-credito.component';
import { ShowDesembolsoComponent } from './components/show-desembolso/show-desembolso.component';

const routes: Routes = [
  { path: 'adm', component: AdmDesembolsoCreditoComponent },
  { path: 'create', component: CreateDesembolsoCreditoComponent},
  { path: 'show/:id', component: ShowDesembolsoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesembolsoCreditoRoutingModule { }
