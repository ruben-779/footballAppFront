import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'footballApp';

  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: "/" },
      { label: 'Teams', icon: 'pi pi-fw pi-shield', routerLink: "/teams" },
      { label: 'Players', icon: 'pi pi-fw pi-android', routerLink: "/players" },
      { label: 'Añadir jugador', icon: 'pi pi-fw pi-android', routerLink: "/createPlayer" },
      { label: 'Añadir Equipo', icon: 'pi pi-fw pi-shield', routerLink: "/createTeam" },

    ];
  }

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
