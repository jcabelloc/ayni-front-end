import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { FormsModule }   from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule }   from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';


import { AmortizacionCreditoRoutingModule } from './amortizacion-credito-routing.module';
import { AdmAmortizacionCreditoComponent } from './components/adm-amortizacion-credito/adm-amortizacion-credito.component';
import { CreateAmortizacionCreditoComponent } from './components/create-amortizacion-credito/create-amortizacion-credito.component';
import { ShowCuotasPendientesComponent } from './components/show-cuotas-pendientes/show-cuotas-pendientes.component';
import { SimularAmortizacionCuotasComponent } from './components/simular-amortizacion-cuotas/simular-amortizacion-cuotas.component';

@NgModule({
  imports: [
    CommonModule,
    AmortizacionCreditoRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    MatPaginatorModule,
    MatIconModule,
    MatTableModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatExpansionModule,
  ],
  declarations: [AdmAmortizacionCreditoComponent, CreateAmortizacionCreditoComponent, ShowCuotasPendientesComponent, SimularAmortizacionCuotasComponent]
})
export class AmortizacionCreditoModule { }
