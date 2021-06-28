import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  apiURL = "http://localhost:3000/"
  getAllTeams() {
    return axios.get(this.apiURL + "teams/").then(res => res.data).catch(err => console.log(err))
  }

  getByid(id: string) {
    return axios.get(this.apiURL + "teams/" + id).then(r => r.data).catch(err => console.log(err)
    )
  }

  getByLeague(leagueId: string) {
    return axios.get(this.apiURL + "teams?Liga=" + leagueId).then(res => res.data).catch(err => console.log(err)
    )
  }
  constructor() { }

}