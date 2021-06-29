import { Injectable } from '@angular/core';
import axios from 'axios';
import { Players } from '../app.component';

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
  createPlayer(player: Players) {
    return axios.post(this.apiURL + "players/", player).then(res => res.data).catch(err => console.log(err)
    )
  }
  editPlayer(player: Players, id: string) {
    return axios.patch(this.apiURL + "players/" + id, player).then(res => res).catch(err => console.log(err))
  }
  deletePlayer(id: string) {
    return axios.delete(this.apiURL + "players/" + id).then(res => res.data).catch(err => console.log(err))
  }
  constructor() { }
}

