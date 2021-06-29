import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Players } from '../app.component';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-query-players',
  templateUrl: './query-players.component.html',
  styleUrls: ['./query-players.component.css']
})
export class QueryPlayersComponent implements OnInit {
  players: Players[] = []
  error: boolean = false
  constructor(private playersService: PlayersService, private route: ActivatedRoute) {
    console.log(this.players)

  }

  ngOnInit(): void {
    this.playersService.getByName(this.route.snapshot.paramMap.get("name") as string).then(res => {
      this.players = res
      if (res[0] == undefined) {
        this.error = true
      }
      console.log(this.players[0])
    }).catch(err => {

    })
  }

}
