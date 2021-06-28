import { Component, OnInit } from '@angular/core';
import { Teams } from '../app.component';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Teams[] = []
  constructor(private teamsService: TeamsService) {
    this.teamsService.getAllTeams().then(res => {
      this.teams = res
      console.log(this.teams);
      return this.teams
    })
  }

  ngOnInit(): void {
  }

}
