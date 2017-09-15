import { Component, OnInit } from '@angular/core';
import { Bout } from '../model/bout';
import { Fighter } from '../model/fighter';
import { BoutService } from '../service/bout.service';
import { FighterService } from '../service/fighter.service';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {

  fighters: Fighter[];
  bouts: Bout[];
  newBout: Bout = {id: 0, fighter1: null, fighter2: null, rounds: null};

  constructor(
    private boutService: BoutService,
    private fighterService: FighterService
  ) { }

  ngOnInit() {
    // Fill bouts
    this.bouts = this.getBouts();
    // Fill fighters combo
    this.fighterService.getFighters()
    .then((fighters: Fighter[]) => {
      this.fighters = fighters;
    }).catch(err => console.log(err));
  }

  getBouts(): Bout[] {
    this.boutService.getBouts()
    .then((bouts: Bout[]) => {
      return bouts;
    }).catch(err => console.log(err));
    return null;
  }

  addBout() {
    this.newBout.id = this.bouts.length + 1;
    this.boutService.create(this.newBout)
    .then(() => console.log('Bout Added.')).catch(err => console.log(err));
    this.bouts = this.getBouts();
  }

  deleteBout(bout: Bout) {
    this.boutService.delete(bout)
    .then(() => console.log('Bout Deleted.')).catch(err => console.log(err));
    this.bouts = this.getBouts();
  }

}
