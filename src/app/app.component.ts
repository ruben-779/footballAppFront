import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'footballApp';
}
export interface Players {
  id: string,
  "Nombre del Jugador": string,
  teamId: string,
  Avatar: string
}

export interface Teams {
  id: string,
  "Nombre del equipo": string,
  "Logo del Equipo": string,
  Liga: string
}

export interface Leagues {
  "Nombre De La Liga": string,
  "Identificador": string,
  "Logo de la Liga": string,
}
