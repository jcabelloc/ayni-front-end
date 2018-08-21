import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmortizacionCreditoRoutingModule } from './amortizacion-credito-routing.module';
import { AdmAmortizacionCreditoComponent } from './components/adm-amortizacion-credito/adm-amortizacion-credito.component';

@NgModule({
  imports: [
    CommonModule,
    AmortizacionCreditoRoutingModule
  ],
  declarations: [AdmAmortizacionCreditoComponent]
})
export class AmortizacionCreditoModule { }
