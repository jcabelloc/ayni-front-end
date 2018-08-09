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



import { DesembolsoRoutingModule } from './desembolso-routing.module';
import { AdmDesembolsoComponent } from './components/adm-desembolso/adm-desembolso.component';
import { CreateDesembolsoComponent } from './components/create-desembolso/create-desembolso.component';
import { DatosDesembolsoComponent } from './components/datos-desembolso/datos-desembolso.component';

import { SimulacionCreditoModule } from '../simulacion-credito/simulacion-credito.module' 
import { SharedClienteModule} from '../../clientes/shared-cliente/shared-cliente.module'

@NgModule({
  imports: [
    CommonModule,
    DesembolsoRoutingModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    SimulacionCreditoModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    SharedClienteModule,
  ],
  declarations: [AdmDesembolsoComponent, CreateDesembolsoComponent, DatosDesembolsoComponent]
})
export class DesembolsoModule { }
