import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmClienteComponent } from './components/adm-cliente/adm-cliente.component';
import { UpdateClienteComponent } from './components/update-cliente/update-cliente.component';
import { CreateClienteComponent } from './components/create-cliente/create-cliente.component';

const routes: Routes = [
  { path: 'adm', component: AdmClienteComponent },
  { path: 'create', component: CreateClienteComponent },
  { path: 'update/:id', component: UpdateClienteComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmClienteRoutingModule { }
