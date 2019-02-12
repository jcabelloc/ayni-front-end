import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarteraRoutingModule } from './cartera-routing.module';
import { TblResumenCarteraComponent } from './components/tbl-resumen-cartera/tbl-resumen-cartera.component';

import { ChartsModule } from 'ng2-charts';
import { ChartSaldoCarteraComponent } from './components/chart-saldo-cartera/chart-saldo-cartera.component';
import { ChartMoraComponent } from './components/chart-mora/chart-mora.component';


@NgModule({
  imports: [
    CommonModule,
    CarteraRoutingModule,
    ChartsModule
  ],
  declarations: [TblResumenCarteraComponent, ChartSaldoCarteraComponent, ChartMoraComponent]
})
export class CarteraModule { }
