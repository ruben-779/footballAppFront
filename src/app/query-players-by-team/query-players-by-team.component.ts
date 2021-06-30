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


    this.teamsService.getNameTeam(this.name).then(res => {
      this.teams = res
      console.log(this.teams);

      this.teams.forEach(team => {
        this.playersService.getByTeam(team.id).then(resp => {
          resp.forEach((r: any) => this.players.push(r))
          console.log(this.players);

        }).catch(err => console.log(err))
      })
    }).catch(err => {
      if (err) {
        this.error = true
      }
    })


  }

  ngOnInit(): void {

  }

}
