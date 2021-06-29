import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teams } from 'src/app/app.component';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent implements OnInit {
  team: Teams = {
    id: "",
    "Nombre del equipo": "",
    "Logo del Equipo": "",
    Liga: ""
  }
  constructor(private teamsService: TeamsService, private route: ActivatedRoute) {
    this.teamsService.getByid(this.route.snapshot.paramMap.get("id") as string).then(res => this.team = res).catch(err => console.log(err)
    )
  }

  ngOnInit(): void {
  }

}
