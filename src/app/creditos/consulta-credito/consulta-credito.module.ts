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
import {MatDividerModule} from '@angular/material/divider';

import { ConsultaCreditoRoutingModule } from './consulta-credito-routing.module';
import { AdmConsultaCreditoComponent } from './components/adm-consulta-credito/adm-consulta-credito.component';
import { ShowCreditoComponent } from './components/show-credito/show-credito.component';
import { ShowCronogramaComponent } from './components/show-cronograma/show-cronograma.component';

@NgModule({
  imports: [
    CommonModule,
    ConsultaCreditoRoutingModule,
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
    MatDividerModule,
  ],
  declarations: [AdmConsultaCreditoComponent, ShowCreditoComponent, ShowCronogramaComponent]
})
export class ConsultaCreditoModule { }
