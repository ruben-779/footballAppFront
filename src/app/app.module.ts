import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu'
import { SharedModule } from 'primeng/api';
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
    NgModule,
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    TabMenuModule,
    SharedModule

  ],
  providers: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
