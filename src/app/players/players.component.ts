import { Component, OnInit } from '@angular/core';
import { Players } from '../app.component';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Players[] = []
  constructor(private playersService: PlayersService) {
    this.playersService.getAllPlayers().then(r => this.players = r)
  }

  ngOnInit(): void {
  }

}
