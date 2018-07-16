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



import { PersonaNaturalRoutingModule } from './persona-natural-routing.module';
import { CreatePersonaNaturalComponent } from './components/create-persona-natural/create-persona-natural.component';
import { UpdatePersonaNaturalComponent } from './components/update-persona-natural/update-persona-natural.component';

import { PersonaModule } from '../persona/persona.module';
import { AdmPersonaNaturalComponent } from './components/adm-persona-natural/adm-persona-natural.component';

@NgModule({
  imports: [
    CommonModule,
    PersonaNaturalRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule,
    FormsModule,
    PersonaModule,
    MatPaginatorModule, 
    MatIconModule,
    MatTableModule,
  ],
  declarations: [CreatePersonaNaturalComponent, UpdatePersonaNaturalComponent, AdmPersonaNaturalComponent]
})
export class PersonaNaturalModule { }
