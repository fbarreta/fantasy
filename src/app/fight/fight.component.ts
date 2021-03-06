import { Component, OnInit, Input } from '@angular/core';

import { Bout } from '../model/bout';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {
  @Input() bout: Bout;

  ngOnInit() {
  }
}
