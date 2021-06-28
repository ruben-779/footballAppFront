import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlayersTeamComponent } from './view-players-team.component';

describe('ViewPlayersTeamComponent', () => {
  let component: ViewPlayersTeamComponent;
  let fixture: ComponentFixture<ViewPlayersTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPlayersTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlayersTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
