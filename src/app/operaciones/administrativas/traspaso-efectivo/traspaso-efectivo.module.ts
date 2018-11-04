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

import { TraspasoEfectivoRoutingModule } from './traspaso-efectivo-routing.module';
import { AdmTraspasoEfectivoComponent } from './components/adm-traspaso-efectivo/adm-traspaso-efectivo.component';
import { CreateTraspasoEfectivoComponent } from './components/create-traspaso-efectivo/create-traspaso-efectivo.component';
import { ShowTraspasoEfectivoComponent } from './components/show-traspaso-efectivo/show-traspaso-efectivo.component';

@NgModule({
  imports: [
    CommonModule,
    TraspasoEfectivoRoutingModule,
    CommonModule,
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
  declarations: [AdmTraspasoEfectivoComponent, CreateTraspasoEfectivoComponent, ShowTraspasoEfectivoComponent]
})
export class TraspasoEfectivoModule { }
