import { Component, OnInit } from '@angular/core';
import { Leagues } from '../app.component';
import { LeaguesService } from '../services/leagues.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  leagues: Leagues[] = []
  constructor(private leaguesService: LeaguesService) {
    this.leaguesService.getLeagues().then(res => this.leagues = res)
  }

  ngOnInit(): void {
  }

}
