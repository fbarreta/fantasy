import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmComponent } from './adm.component';

const routes: Routes = [
  {
    path: 'adm/teste',
    component: AdmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, AdmComponent]
})
export class AppRoutingModule { }
