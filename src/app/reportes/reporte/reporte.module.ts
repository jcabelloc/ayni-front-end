import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { RptCarteraCreditosComponent } from './components/rpt-cartera-creditos/rpt-cartera-creditos.component';

@NgModule({
  imports: [
    CommonModule,
    ReporteRoutingModule
  ],
  declarations: [RptCarteraCreditosComponent]
})
export class ReporteModule { }
