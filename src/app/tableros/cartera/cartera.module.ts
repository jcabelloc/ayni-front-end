import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarteraRoutingModule } from './cartera-routing.module';
import { TblResumenCarteraComponent } from './components/tbl-resumen-cartera/tbl-resumen-cartera.component';

import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    CarteraRoutingModule,
    ChartsModule
  ],
  declarations: [TblResumenCarteraComponent]
})
export class CarteraModule { }
