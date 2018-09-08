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

import { PersonaModule } from '../../personas/persona/persona.module';
import { AdmClienteRoutingModule } from './adm-cliente-routing.module';
import { AdmClienteComponent } from './components/adm-cliente/adm-cliente.component';
import { CreateClienteComponent } from './components/create-cliente/create-cliente.component';
import { UpdateClienteComponent } from './components/update-cliente/update-cliente.component';

@NgModule({
  imports: [
    CommonModule,
    AdmClienteRoutingModule,
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
    PersonaModule,
  ],
  declarations: [AdmClienteComponent, CreateClienteComponent, UpdateClienteComponent]
})
export class AdmClienteModule { }
