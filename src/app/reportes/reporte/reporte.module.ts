import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';


import { ReporteRoutingModule } from './reporte-routing.module';
import { RptCarteraCreditosComponent } from './components/rpt-cartera-creditos/rpt-cartera-creditos.component';

@NgModule({
  imports: [
    CommonModule,
    ReporteRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule,
  ],
  declarations: [RptCarteraCreditosComponent]
})
export class ReporteModule { }
