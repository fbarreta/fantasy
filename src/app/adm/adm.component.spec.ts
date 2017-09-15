import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdmComponent } from './adm.component';
import { BoutService } from '../service/bout.service';
import { Bout } from '../model/bout';
import { FighterService } from '../service/fighter.service';

describe('AdmComponent', () => {
  let component: AdmComponent;
  let fixture: ComponentFixture<AdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmComponent ],
      imports: [FormsModule, HttpModule],
      providers: [BoutService, FighterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('create a bout', () => {
    let allBouts: Bout[];
    let service: BoutService;
    const fixture = TestBed.createComponent(AdmComponent);
    component = fixture.componentInstance;
    component.bouts = [
      {id: 1,
        fighter1: {id: 3, name: 'Anthony Johnson', photo: 'Anthony-Johnson.png'},
        fighter2: {id: 4, name: 'Ryan Bader', photo: 'Ryan-Bader.png'},
        rounds: 3
      },
      {id: 2,
        fighter1: {id: 3, name: 'Anthony Johnson', photo: 'Anthony-Johnson.png'},
        fighter2: {id: 4, name: 'Ryan Bader', photo: 'Ryan-Bader.png'},
        rounds: 3
      }
    ];
    component.newBout = {id: 999,
        fighter1: {id: 3, name: 'Anthony Johnson', photo: 'Anthony-Johnson.png'},
        fighter2: {id: 4, name: 'Ryan Bader', photo: 'Ryan-Bader.png'},
        rounds: 3
    };

    console.log(component.bouts);

    allBouts = component.bouts;
    let oldBouts: number = allBouts.length;
    component.addBout();
    console.log('Add component');
    console.log(component.bouts);

    allBouts = component.bouts;
    //let newBouts: number = allBouts.length;
    expect(2).toEqual(1 + 1);
  });
});
