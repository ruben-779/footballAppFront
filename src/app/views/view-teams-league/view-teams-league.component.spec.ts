import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeamsLeagueComponent } from './view-teams-league.component';

describe('ViewTeamsLeagueComponent', () => {
  let component: ViewTeamsLeagueComponent;
  let fixture: ComponentFixture<ViewTeamsLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTeamsLeagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeamsLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
