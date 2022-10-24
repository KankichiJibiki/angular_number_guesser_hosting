import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameService } from '../services/game.service';
import { Player } from '../types/Player';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  // @Output() playersEmitter = new EventEmitter<number[]>();
  players: Player[] =  [];
  playerAmount: number = 1;
  // isGameStarted: boolean = false;

  constructor(private playersService: PlayersService, private gameService: GameService) { 

  }

  ngOnInit(): void {
  }

  startGame(){
    for(let i = 1; i < this.playerAmount+1; i++) {
      this.players.push(this.playersService.setPlayers(i));
    }
    // this.playersEmitter.emit(this.players);
    this.gameService.setPlayers(this.players);
  }

}

