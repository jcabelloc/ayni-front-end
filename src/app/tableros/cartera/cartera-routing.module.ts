import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TblResumenCarteraComponent } from './components/tbl-resumen-cartera/tbl-resumen-cartera.component';


const routes: Routes = [
  { path: 'resumen', component: TblResumenCarteraComponent },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarteraRoutingModule { }
