import { AlertModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AdmComponent } from './adm/adm.component';
import { BetComponent } from './bet/bet.component';
import { FightComponent } from './fight/fight.component';
import { BoutService } from './service/bout.service';
import { FighterService } from './service/fighter.service';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmComponent,
    BetComponent,
    FightComponent,
    ModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    BoutService,
    FighterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
