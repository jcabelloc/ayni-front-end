import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmDesembolsoComponent } from './components/adm-desembolso/adm-desembolso.component';
import { CreateDesembolsoComponent } from './components/create-desembolso/create-desembolso.component';

const routes: Routes = [
  { path: 'adm', component: AdmDesembolsoComponent },
  { path: 'create', component: CreateDesembolsoComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesembolsoRoutingModule { }
