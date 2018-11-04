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
    path: 'creditos/consulta-credito',
    loadChildren: './creditos/consulta-credito/consulta-credito.module#ConsultaCreditoModule'
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
    path: 'operaciones/administrativas/registro-gasto',
    loadChildren: './operaciones/administrativas/registro-gasto/registro-gasto.module#RegistroGastoModule'
  },
  {
    path: 'operaciones/administrativas/traspaso-efectivo',
    loadChildren: './operaciones/administrativas/traspaso-efectivo/traspaso-efectivo.module#TraspasoEfectivoModule'
  },
  {
    path: 'reportes/reporte',
    loadChildren: './reportes/reporte/reporte.module#ReporteModule'
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
