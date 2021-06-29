import { Component, OnInit } from '@angular/core';
import { Leagues, Teams } from '../app.component';
import { LeaguesService } from '../services/leagues.service';
import { PlayersService } from '../services/players.service';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  leagues: Leagues[] = []
  leagueName: string = ""
  newTeam: Teams = {
    id: "",
    "Nombre del equipo": "",
    "Logo del Equipo": "",
    Liga: ""
  }
  createTeam() {
    this.leagues.forEach(league => {
      if (this.leagueName == league["Nombre De La Liga"]) {
        this.newTeam.Liga = league["Identificador"]
      }
    })
    this.teamsService.createTeam(this.newTeam).then(res => console.log(res))
      .catch(err => console.log(err))
  }

  constructor(private leaguesService: LeaguesService, private teamsService: TeamsService) {
    this.leaguesService.getLeagues().then(res => this.leagues = res).catch(err => console.log(err)
    )
  }

  ngOnInit(): void {
  }

}
