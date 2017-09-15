import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmComponent } from './adm.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdmComponent],
  exports: [AdmComponent]
})
export class AdmModule { }
