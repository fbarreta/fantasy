import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetComponent } from './bet.component';
import { FightComponent } from '../fight/fight.component';
import { Bout } from '../model/bout';
import { BoutService } from '../service/bout.service';

describe('BetComponent', () => {
  let component: BetComponent;
  let fixture: ComponentFixture<BetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetComponent, MockFightComponent ],
      providers: [BoutService],
      imports: [HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-fight',
  template: ''
})
class MockFightComponent {
  @Input() bout: Bout;
}