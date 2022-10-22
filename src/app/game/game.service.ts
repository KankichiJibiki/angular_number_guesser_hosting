import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  randomAns(){
    return Math.floor(Math.random() * (100-0) + 0);
  }
}
