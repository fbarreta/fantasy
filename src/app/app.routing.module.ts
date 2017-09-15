import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdmComponent } from './adm/adm.component';
import { BetComponent } from './bet/bet.component';

const routes: Routes = [
  {
    path: '',
    component: BetComponent
  },
  {
    path: 'adm',
    component: AdmComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
