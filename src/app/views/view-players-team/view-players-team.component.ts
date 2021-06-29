import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Players } from 'src/app/app.component';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-view-players-team',
  templateUrl: './view-players-team.component.html',
  styleUrls: ['./view-players-team.component.css']
})
export class ViewPlayersTeamComponent implements OnInit {
  teamId: any = this.route.snapshot.paramMap.get("teamId")
  players: Players[] = []
  cButton: boolean = false
  newPlayer: any = {
    id: "",
    teamId: this.teamId,
    "Nombre del Jugador": "",
    Avatar: ""
  }

  createButton() {
    if (this.cButton == false) {
      this.cButton = true
    } else this.cButton = false
  }

  createPlayer() {
    this.playersService.createPlayer(this.newPlayer).then((res: Players) => this.players.push(res)
    ).catch((err) => console.log(err)
    )
  }


  constructor(private playersService: PlayersService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.playersService.getByTeam(this.route.snapshot.paramMap.get("teamId") as string).then(res => {
      console.log(res);
      this.players = res
    }).catch(err => console.log(err)
    )
  }

}
