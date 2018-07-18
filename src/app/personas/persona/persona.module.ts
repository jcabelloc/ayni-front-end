import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';



import { PersonaRoutingModule } from './persona-routing.module';
import { AdmDireccionComponent } from './components/adm-direccion/adm-direccion.component';
import { CreateDireccionComponent } from './components/create-direccion/create-direccion.component';
import { AdmTelefonoComponent } from './components/adm-telefono/adm-telefono.component';
import { CreateTelefonoComponent } from './components/create-telefono/create-telefono.component';

@NgModule({
  imports: [
    CommonModule,
    PersonaRoutingModule,
    MatExpansionModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,

  ],
  entryComponents: [CreateDireccionComponent, CreateTelefonoComponent ],
  declarations: [AdmDireccionComponent, CreateDireccionComponent, AdmTelefonoComponent, CreateTelefonoComponent],
  exports: [
    AdmDireccionComponent, AdmTelefonoComponent, 
  ]

})
export class PersonaModule { }
