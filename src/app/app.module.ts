import { AlertModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';

import { AppComponent } from './app.component';
import { FightComponent } from './fight/fight.component';
import { BoutService } from './service/bout.service';

@NgModule({
  declarations: [
    AppComponent,
    FightComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [BoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
