import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  apiURL = "http://localhost:4000/players"
  getAllPlayers() {
    return axios.get(this.apiURL).then(res => res.data).catch(err => console.log(err)
    )
  }
  constructor() { }
}
