import { Component } from '@angular/core';

import { Fighter } from './model/fighter';
import { Bout } from './model/bout';
import { BoutService } from './service/bout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fights:Bout[];

  constructor(
    private boutService: BoutService
  ){}

  ngOnInit():void{
    this.boutService.getBouts()
      .then((bouts: Bout[]) => {
        this.fights = bouts;
      }).catch(err => console.log(err));
  }
}
