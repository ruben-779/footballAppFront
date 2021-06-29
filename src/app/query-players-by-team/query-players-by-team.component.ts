import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Players, Teams } from '../app.component';
import { PlayersService } from '../services/players.service';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-query-players-by-team',
  templateUrl: './query-players-by-team.component.html',
  styleUrls: ['./query-players-by-team.component.css']
})
export class QueryPlayersByTeamComponent implements OnInit {
  teams: Teams[] = []
  players: Players[] = []
  name: any = ""
  error: boolean = false



  constructor(private teamsService: TeamsService, private playersService: PlayersService, private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get("team")

    function upperFirstLetter(str: string) {

      str = str.charAt(0).toUpperCase() + str.slice(1);
      return str

    }
    upperFirstLetter(this.name)
    this.teamsService.getNameTeam(this.name).then(res => {
      if (!res) {
        console.log("fdelek")
        this.error = true
      }
      this.playersService.getByTeam(res[0].id).then(resp => this.players = resp).catch(err => console.log(err))
    }).catch(err => {
      if (err) {
        this.error = true
      }
    })


  }

  ngOnInit(): void {

  }

}
