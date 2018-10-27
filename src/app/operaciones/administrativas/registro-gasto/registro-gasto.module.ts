import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroGastoRoutingModule } from './registro-gasto-routing.module';
import { AdmRegistroGastoComponent } from './components/adm-registro-gasto/adm-registro-gasto.component';
import { CreateRegistroGastoComponent } from './components/create-registro-gasto/create-registro-gasto.component';
import { ShowRegistroGastoComponent } from './components/show-registro-gasto/show-registro-gasto.component';

@NgModule({
  imports: [
    CommonModule,
    RegistroGastoRoutingModule
  ],
  declarations: [AdmRegistroGastoComponent, CreateRegistroGastoComponent, ShowRegistroGastoComponent]
})
export class RegistroGastoModule { }
