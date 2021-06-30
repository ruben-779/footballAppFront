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
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { QueryPlayersComponent } from './query-players/query-players.component';
import { QueryPlayersByTeamComponent } from './query-players-by-team/query-players-by-team.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    TeamsComponent,
    ViewPlayerComponent,
    ViewTeamComponent,
    LeaguesComponent,
    ViewPlayersTeamComponent,
    ViewTeamsLeagueComponent,
    CreatePlayerComponent,
    CreateTeamComponent,
    QueryPlayersComponent,
    QueryPlayersByTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    TabMenuModule,
    SharedModule,
    FormsModule,
    MessageModule,
    MessagesModule,
    AutoCompleteModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
