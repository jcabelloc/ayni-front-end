import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';



import { PersonaRoutingModule } from './persona-routing.module';
import { AdmDireccionComponent } from './components/adm-direccion/adm-direccion.component';
import { CreateDireccionComponent } from './components/create-direccion/create-direccion.component';

@NgModule({
  imports: [
    CommonModule,
    PersonaRoutingModule,
    MatExpansionModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
  ],
  entryComponents: [CreateDireccionComponent],
  declarations: [AdmDireccionComponent, CreateDireccionComponent],
  exports: [
    AdmDireccionComponent,
  ]

})
export class PersonaModule { }
