import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import { DesembolsoCreditoRoutingModule } from './desembolso-credito-routing.module';
import { AdmDesembolsoCreditoComponent } from './components/adm-desembolso-credito/adm-desembolso-credito.component';
import { CreateDesembolsoCreditoComponent } from './components/create-desembolso-credito/create-desembolso-credito.component';
import { DatosDesembolsoCreditoComponent } from './components/datos-desembolso-credito/datos-desembolso-credito.component';


import { SimulacionCreditoModule } from '../../../creditos/simulacion-credito/simulacion-credito.module';
import { SharedClienteModule } from '../../../clientes/shared-cliente/shared-cliente.module';

@NgModule({
  imports: [
    CommonModule,
    DesembolsoCreditoRoutingModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    SimulacionCreditoModule,
    SharedClienteModule,
  ],
  declarations: [AdmDesembolsoCreditoComponent, CreateDesembolsoCreditoComponent, DatosDesembolsoCreditoComponent]
})
export class DesembolsoCreditoModule { }
