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

  players: Players[] = []

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
