import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaNaturalRoutingModule } from './persona-natural-routing.module';
import { CreatePersonaNaturalComponent } from './components/create-persona-natural/create-persona-natural.component';

@NgModule({
  imports: [
    CommonModule,
    PersonaNaturalRoutingModule
  ],
  declarations: [CreatePersonaNaturalComponent]
})
export class PersonaNaturalModule { }
