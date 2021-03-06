import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Leagues, Players, Teams } from 'src/app/app.component';
import { LeaguesService } from 'src/app/services/leagues.service';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent implements OnInit {
  leagues: Leagues[] = []
  leagueName: string = ""
  team: Teams = {
    id: "",
    "Nombre del equipo": "",
    "Logo del Equipo": "",
    Liga: ""
  }
  players: Players[] = []
  editTeam() {
    this.leagues.forEach(league => {
      if (this.leagueName == league["Nombre De La Liga"]) {
        this.team.Liga = league["Identificador"]
      }
    })

    this.teamsService.editTeam(this.team, this.team.id).then(res => console.log(res))
      .catch(err => console.log(err))
  }
  deleteTeam() {
    this.teamsService.deleteTeam(this.team.id).then(res => console.log(res)).catch(err => console.log(err))
    this.players.forEach(player => {
      if (this.team.id == player.teamId) {
        this.playersService.deletePlayer(player.id).then(res => console.log(res)).catch(err => console.log(err))
      }
    })
  }
  constructor(private teamsService: TeamsService, private leaguesService: LeaguesService, private route: ActivatedRoute, private playersService: PlayersService) {
    this.teamsService.getByid(this.route.snapshot.paramMap.get("id") as string).then(res => this.team = res).catch(err => console.log(err)
    )
    this.leaguesService.getLeagues().then(res => this.leagues = res).catch(err => console.log(err)
    )
    this.playersService.getAllPlayers().then(res => this.players = res).catch(err => console.log(err))
  }

  ngOnInit(): void {
  }

}
