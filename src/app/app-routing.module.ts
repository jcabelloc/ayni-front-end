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
    path: 'clientes/adm-cliente',
    loadChildren: './clientes/adm-cliente/adm-cliente.module#AdmClienteModule'
  },
  {
    path: 'creditos/simulacion-credito',
    loadChildren: './creditos/simulacion-credito/simulacion-credito.module#SimulacionCreditoModule'
  },
  {
    path: 'operaciones/creditos/desembolso-credito',
    loadChildren: './operaciones/creditos/desembolso-credito/desembolso-credito.module#DesembolsoCreditoModule'
  },
  {
    path: 'operaciones/creditos/amortizacion-credito',
    loadChildren: './operaciones/creditos/amortizacion-credito/amortizacion-credito.module#AmortizacionCreditoModule'
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
