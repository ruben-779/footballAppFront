import { Component, OnInit } from '@angular/core';
import { Players, Teams } from '../app.component';
import { PlayersService } from '../services/players.service';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {
  teams: Teams[] = []
  teamName: string = ""
  newPlayer: Players = {
    id: "",
    teamId: "",
    "Nombre del Jugador": "",
    Avatar: ""
  }
  createPlayer() {
    this.teams.forEach(team => {
      if (this.teamName == team["Nombre del equipo"]) {
        this.newPlayer.teamId = team.id
      }
    })
    this.playersService.createPlayer(this.newPlayer).then(res => console.log(res)
    ).catch(err => console.log(err))
  }
  constructor(private teamsService: TeamsService, private playersService: PlayersService) {
    this.teamsService.getAllTeams().then(res => this.teams = res).catch(err => console.log(err)
    )

  }

  ngOnInit(): void {
  }

}
