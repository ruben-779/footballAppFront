import { Injectable } from '@angular/core';
import axios from 'axios';
import { Teams } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  apiURL = "http://localhost:3000/"
  getAllTeams() {
    return axios.get(this.apiURL + "teams/").then(res => res.data).catch(err => console.log(err))
  }

  getByid(id: string) {
    return axios.get(this.apiURL + "teams/" + id).then(r => r.data).catch(err => console.log(err))
  }

  getByLeague(leagueId: string) {
    return axios.get(this.apiURL + "teams?Liga=" + leagueId).then(res => res.data).catch(err => console.log(err))
  }
  createTeam(team: Teams) {
    return axios.post(this.apiURL + "teams/", team).then(res => res.data).catch(err => console.log(err))
  }
  editTeam(team: Teams, id: string) {
    return axios.patch(this.apiURL + "teams/" + id, team).then(res => res).catch(err => console.log(err))
  }
  deleteTeam(id: string) {
    return axios.delete(this.apiURL + "teams/" + id).then(res => res.data).catch(err => console.log(err))
  }
  getNameTeam(name: string) {
    return axios.get(this.apiURL + "teams?Nombre%20del%20equipo_like=" + name).then(res => res.data).catch(err => console.log(err))
  }
  constructor() { }

}