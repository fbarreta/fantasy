import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightComponent } from './fight.component';
import { Bout } from '../model/bout';

describe('FightComponent', () => {
  let component: FightComponent;
  let fixture: ComponentFixture<FightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightComponent, MockModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightComponent);
    component = fixture.componentInstance;
    component.bout = {id: 1,
                          fighter1: {id: 1, name: 'Ben Rothwell', photo: 'Ben-Rothwell.png'},
                          fighter2: {id: 2, name: 'Josh Barnett', photo: 'Josh-Barnett.png'},
                          rounds: 3
                      };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-modal',
  template: ''
})
class MockModalComponent {
}