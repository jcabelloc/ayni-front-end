import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule }   from '@angular/forms';

import { InicioRoutingModule } from './inicio-routing.module';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';

@NgModule({
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
  ],
  declarations: [IngresoComponent, BienvenidaComponent]
})
export class InicioModule { }
