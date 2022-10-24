import { Injectable } from '@angular/core';
import { GameService } from '../services/game.service';
import { Player } from '../types/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  players: Player = {} as Player;
  constructor(private gameService: GameService) { }

  setPlayers(num: number){
    return this.players = {
      name: 'Player' + num.toString(),
      guess: 0,
      diff: 0,
      msg: '',
      img: this.gameService.playerStartedImg,
    }
  }
}
