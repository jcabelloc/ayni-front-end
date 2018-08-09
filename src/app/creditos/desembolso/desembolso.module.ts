import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';


import { DesembolsoRoutingModule } from './desembolso-routing.module';
import { AdmDesembolsoComponent } from './components/adm-desembolso/adm-desembolso.component';
import { CreateDesembolsoComponent } from './components/create-desembolso/create-desembolso.component';

@NgModule({
  imports: [
    CommonModule,
    DesembolsoRoutingModule,
    MatButtonModule,
  ],
  declarations: [AdmDesembolsoComponent, CreateDesembolsoComponent]
})
export class DesembolsoModule { }
