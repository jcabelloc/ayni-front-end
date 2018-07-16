import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePersonaNaturalComponent } from './components/create-persona-natural/create-persona-natural.component';
import { UpdatePersonaNaturalComponent } from './components/update-persona-natural/update-persona-natural.component';
import { AdmPersonaNaturalComponent } from './components/adm-persona-natural/adm-persona-natural.component';


const routes: Routes = [
  { path: 'create', component: CreatePersonaNaturalComponent },
  { path: 'update/:id', component: UpdatePersonaNaturalComponent },
  { path: 'adm', component: AdmPersonaNaturalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaNaturalRoutingModule { }
