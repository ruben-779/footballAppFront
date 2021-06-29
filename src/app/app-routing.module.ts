import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { PlayersComponent } from './players/players.component';
import { QueryPlayersByTeamComponent } from './query-players-by-team/query-players-by-team.component';
import { QueryPlayersComponent } from './query-players/query-players.component';
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
  { path: "teams/:leagueId", component: ViewTeamsLeagueComponent },
  { path: "createTeam", component: CreateTeamComponent },
  { path: "createPlayer", component: CreatePlayerComponent },
  { path: "query/:name", component: QueryPlayersComponent },
  { path: "querybyteam/:team", component: QueryPlayersByTeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
