import { Component, OnInit } from '@angular/core';
import { Bout } from '../model/bout';
import { BoutService } from '../service/bout.service';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {

  fights: Bout[];

  constructor(
    private boutService: BoutService
  ) {}

  ngOnInit(): void {
    this.boutService.getBouts()
      .then((bouts: Bout[]) => {
        this.fights = bouts;
      }).catch(err => console.log(err));
  }

}
