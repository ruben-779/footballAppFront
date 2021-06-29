import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Players, Teams } from 'src/app/app.component';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.component.html',
  styleUrls: ['./view-player.component.css']
})
export class ViewPlayerComponent implements OnInit {
  actualTeam: string = ""
  teams: Teams[] = []
  teamName: string = ""
  player: Players = {
    id: "",
    "Nombre del Jugador": "",
    teamId: "",
    Avatar: ""


  }

  editPlayer() {
    this.teams.forEach(team => {
      if (this.teamName == team["Nombre del equipo"]) {
        this.player.teamId = team.id
      }
    })
    this.playersService.editPlayer(this.player, this.player.id).then(res => console.log(res)
    ).catch(err => console.log(err))
  }

  constructor(private playersService: PlayersService, private teamsService: TeamsService, private route: ActivatedRoute) {
    this.playersService.getByid(this.route.snapshot.paramMap.get("id") as string).then(res => {

      this.player = res

    }).catch(err => console.log(err)
    )


  }

  ngOnInit(): void {
    this.teamsService.getAllTeams().then(res => {

      this.teams = res
      this.teams.forEach(team => {
        console.log(this.player.teamId);

        if (this.player.teamId == team.id) {
          this.actualTeam = team['Nombre del equipo']
          console.log(this.actualTeam)
        }
      })
    }).catch(err => console.log(err)
    )

  }

}
