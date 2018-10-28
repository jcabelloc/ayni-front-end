import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { FormsModule }   from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';


import { RegistroGastoRoutingModule } from './registro-gasto-routing.module';
import { AdmRegistroGastoComponent } from './components/adm-registro-gasto/adm-registro-gasto.component';
import { CreateRegistroGastoComponent } from './components/create-registro-gasto/create-registro-gasto.component';
import { ShowRegistroGastoComponent } from './components/show-registro-gasto/show-registro-gasto.component';


@NgModule({
  imports: [
    CommonModule,
    RegistroGastoRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule,
    FormsModule,
    MatPaginatorModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
  ],
  declarations: [AdmRegistroGastoComponent, CreateRegistroGastoComponent, ShowRegistroGastoComponent]
})
export class RegistroGastoModule { }
