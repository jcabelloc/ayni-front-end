import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';

const routes: Routes = [
  { path: 'ingreso', component: IngresoComponent },
  { path: 'bienvenida', component: BienvenidaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
