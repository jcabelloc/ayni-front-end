import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmRegistroGastoComponent } from './components/adm-registro-gasto/adm-registro-gasto.component';
import { CreateRegistroGastoComponent } from './components/create-registro-gasto/create-registro-gasto.component';
import { ShowRegistroGastoComponent } from './components/show-registro-gasto/show-registro-gasto.component';

const routes: Routes = [
  { path: 'adm', component: AdmRegistroGastoComponent },
  { path: 'create', component: CreateRegistroGastoComponent},
  { path: 'show/:id', component: ShowRegistroGastoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroGastoRoutingModule { }
