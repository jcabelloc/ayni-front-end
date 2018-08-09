import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { FormsModule }   from '@angular/forms';




import { SimulacionCreditoRoutingModule } from './simulacion-credito-routing.module';
import { SimulacionCreditoComponent } from './components/simulacion-credito/simulacion-credito.component';
import { DatosSimulacionCreditoComponent } from './components/datos-simulacion-credito/datos-simulacion-credito.component';
import { SimulacionCronogramaComponent } from './components/simulacion-cronograma/simulacion-cronograma.component';

@NgModule({
  imports: [
    CommonModule,
    SimulacionCreditoRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatTableModule,
    FormsModule,
  ],
  declarations: [SimulacionCreditoComponent, DatosSimulacionCreditoComponent, SimulacionCronogramaComponent],
  exports: [
    SimulacionCronogramaComponent,
  ]
})
export class SimulacionCreditoModule { }
