import { Component, OnInit } from '@angular/core';
import { Leagues, Players } from '../app.component';
import { LeaguesService } from '../services/leagues.service';
import { PrimeNGConfig } from 'primeng/api';
import { PlayersService } from '../services/players.service';
import { TeamsService } from '../services/teams.service';


@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  teamQuery: string = ""
  nameQuery: string = ""
  leagues: Leagues[] = []
  results: string[] = []
  nameResults: {} = {}
  search(event: any) {
    this.playersService.getByName(event.query).then(data => {
      this.results = data;
      this.results = this.results.map((r: any) => r["Nombre del Jugador"])
      console.log(this.nameResults);

    });
  }
  searchT(event: any) {
    this.teamsService.getNameTeam(event.query).then(data => {
      this.results = data;
      this.results = this.results.map((r: any) => r["Nombre del equipo"])
      console.log(this.nameResults);

    });
  }
  constructor(private leaguesService: LeaguesService, private primengConfig: PrimeNGConfig, private playersService: PlayersService, private teamsService: TeamsService) {
    this.leaguesService.getLeagues().then(res => this.leagues = res)
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
