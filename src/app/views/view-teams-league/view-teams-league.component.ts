import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teams } from 'src/app/app.component';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-view-teams-league',
  templateUrl: './view-teams-league.component.html',
  styleUrls: ['./view-teams-league.component.css'],

})
export class ViewTeamsLeagueComponent implements OnInit {
  teams: Teams[] = []
  constructor(private teamsService: TeamsService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.teamsService.getByLeague(this.route.snapshot.paramMap.get("leagueId") as string).then(res => this.teams = res)

  }

}
