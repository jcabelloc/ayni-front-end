import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';



import { PersonaRoutingModule } from './persona-routing.module';
import { AdmDireccionComponent } from './components/adm-direccion/adm-direccion.component';

@NgModule({
  imports: [
    CommonModule,
    PersonaRoutingModule,
    MatExpansionModule,
    MatTableModule,
    MatButtonModule,
  ],
  declarations: [AdmDireccionComponent],
  exports: [
    AdmDireccionComponent,
  ]

})
export class PersonaModule { }
