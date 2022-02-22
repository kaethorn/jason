import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonComponent } from 'src/app/json/json.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'json',
    pathMatch: 'full'
  },
  {
    path: 'json',
    component: JsonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
