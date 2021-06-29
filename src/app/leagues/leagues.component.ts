import { Component, OnInit } from '@angular/core';
import { Leagues } from '../app.component';
import { LeaguesService } from '../services/leagues.service';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  teamQuery: string = ""
  nameQuery: string = ""
  leagues: Leagues[] = []
  constructor(private leaguesService: LeaguesService, private primengConfig: PrimeNGConfig) {
    this.leaguesService.getLeagues().then(res => this.leagues = res)
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
