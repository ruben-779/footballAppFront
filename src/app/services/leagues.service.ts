import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  apiURL = "http://localhost:3000/leagues/"
  getLeagues() {
    return axios.get(this.apiURL).then(res => res.data).catch(err => console.log(err))
  }
  constructor() { }
}
