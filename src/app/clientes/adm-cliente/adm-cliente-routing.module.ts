import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmClienteComponent } from './components/adm-cliente/adm-cliente.component';

const routes: Routes = [
  { path: 'adm', component: AdmClienteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmClienteRoutingModule { }
