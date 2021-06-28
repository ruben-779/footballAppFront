import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { ViewPlayerComponent } from './views/view-player/view-player.component';
import { ViewTeamComponent } from './views/view-team/view-team.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { ViewPlayersTeamComponent } from './views/view-players-team/view-players-team.component';
import { ViewTeamsLeagueComponent } from './views/view-teams-league/view-teams-league.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    TeamsComponent,
    ViewPlayerComponent,
    ViewTeamComponent,
    LeaguesComponent,
    ViewPlayersTeamComponent,
    ViewTeamsLeagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
