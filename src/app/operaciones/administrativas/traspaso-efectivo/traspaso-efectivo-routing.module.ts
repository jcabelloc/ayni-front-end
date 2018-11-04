import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmTraspasoEfectivoComponent } from './components/adm-traspaso-efectivo/adm-traspaso-efectivo.component';
import { CreateTraspasoEfectivoComponent } from './components/create-traspaso-efectivo/create-traspaso-efectivo.component';
import { ShowTraspasoEfectivoComponent } from './components/show-traspaso-efectivo/show-traspaso-efectivo.component';

const routes: Routes = [
  { path: 'adm', component: AdmTraspasoEfectivoComponent },
  { path: 'create', component: CreateTraspasoEfectivoComponent},
  { path: 'show/:id', component: ShowTraspasoEfectivoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraspasoEfectivoRoutingModule { }
