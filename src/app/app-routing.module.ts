import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { JsonHomeComponent } from './json-home/json-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'json-home', pathMatch: 'full' },
  { path: 'json-home', component: JsonHomeComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
