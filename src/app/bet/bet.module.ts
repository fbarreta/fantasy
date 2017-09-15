import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetComponent } from './bet.component';
import { FightComponent } from '../fight/fight.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BetComponent,
    FightComponent
  ]
})
export class BetModule { }
