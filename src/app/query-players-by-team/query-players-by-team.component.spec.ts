import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryPlayersByTeamComponent } from './query-players-by-team.component';

describe('QueryPlayersByTeamComponent', () => {
  let component: QueryPlayersByTeamComponent;
  let fixture: ComponentFixture<QueryPlayersByTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryPlayersByTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryPlayersByTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
