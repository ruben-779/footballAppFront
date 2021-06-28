import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaguesComponent } from './leagues/leagues.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { ViewPlayerComponent } from './views/view-player/view-player.component';
import { ViewPlayersTeamComponent } from './views/view-players-team/view-players-team.component';
import { ViewTeamComponent } from './views/view-team/view-team.component';
import { ViewTeamsLeagueComponent } from './views/view-teams-league/view-teams-league.component';

const routes: Routes = [
  { path: "", component: LeaguesComponent },
  { path: "players", component: PlayersComponent },
  { path: "teams", component: TeamsComponent },
  { path: "team/:id", component: ViewTeamComponent },
  { path: "player/:id", component: ViewPlayerComponent },
  { path: "players/:teamId", component: ViewPlayersTeamComponent },
  { path: "teams/:leagueId", component: ViewTeamsLeagueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
