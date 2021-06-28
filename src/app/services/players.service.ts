import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  apiURL = "http://localhost:3000/"
  getAllPlayers() {
    return axios.get(this.apiURL + "players/").then(res => res.data).catch(err => console.log(err)
    )
  }

  getByid(id: string) {
    return axios.get(this.apiURL + "players/" + id).then(r => r.data).catch(err => console.log(err)
    )
  }
  getByTeam(teamId: string) {
    return axios.get(this.apiURL + "players?teamId=" + teamId).then(res => res.data).catch(err => console.log(err)
    )
  }
  constructor() { }
}
