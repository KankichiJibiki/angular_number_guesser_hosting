import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GameService } from '../services/game.service';
import { Player } from '../types/Player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnChanges {
  players: Player[] = [];
  inputNum: number = {} as number;
  counter: number = 0;
  correctAns: number = 0;
  playerFinalAns: number = 0;
  diff: number = 0;
  
  isCorrect: boolean = false;
  isGameOver: boolean = false;
  clearMsg: string = '';

  constructor(private gameService: GameService) {
    this.correctAns = this.gameService.correctAns;
    this.players = this.gameService.players;
    this.counter = this.gameService.counter;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.correctAns = this.gameService.correctAns;
  }

  answerByPlayer(){
    if(this.inputNum > 100  || this.inputNum <= 0) return;

    this.playerFinalAns = this.inputNum;
    this.diff = Math.abs(this.playerFinalAns-this.correctAns);
    this.isGameOver = this.gameService.answerByPlayer(this.playerFinalAns, this.diff);

    this.isCorrect = this.gameService.isCorrect;
    console.log("isCorrect"+this.isCorrect);

    if(this.isCorrect || this.isGameOver){
      this.clearMsg = this.gameService.createMsg();
    }

    this.inputNum = {} as number;
  }

  resetGame(){
    this.gameService.reset();
    this.isCorrect = false;
    this.correctAns = this.gameService.correctAns;
  }

  back(){
    this.gameService.backPage();
  }

}
