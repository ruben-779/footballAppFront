import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Players } from 'src/app/app.component';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.component.html',
  styleUrls: ['./view-player.component.css']
})
export class ViewPlayerComponent implements OnInit {
  players: Players = {
    id: "",
    "Nombre del Jugador": "",
    teamId: "",
    Avatar: ""


  }
  constructor(private playersService: PlayersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.playersService.getByid(this.route.snapshot.paramMap.get("id") as string).then(res => {

      this.players = res
      console.log(this.players);

    }).catch(err => console.log(err)
    )

  }

}
