import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: './seguridad/inicio/inicio.module#InicioModule'
  },
  {
    path: 'personas/persona-natural',
    loadChildren: './personas/persona-natural/persona-natural.module#PersonaNaturalModule'
  },
  {
    path: 'creditos/simulacion-credito',
    loadChildren: './creditos/simulacion-credito/simulacion-credito.module#SimulacionCreditoModule'
  },
  {
    path: '',
    redirectTo: 'inicio/ingreso',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
