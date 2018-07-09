import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'personas/persona-natural',
    loadChildren: './personas/persona-natural/persona-natural.module#PersonaNaturalModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
