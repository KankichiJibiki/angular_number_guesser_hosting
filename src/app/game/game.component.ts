import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  inputNum: number = {} as number;
  counter: number = 0;
  correctAns: number = 0;
  playerFinalAns: number = 0;
  diff: number = Math.abs(this.correctAns-this.playerFinalAns);
  
  isCorrect: boolean = false;
  clearMsg: string = '';

  constructor(private gameService: GameService) {
    this.correctAns = this.gameService.randomAns();
  }

  ngOnInit(): void {
  }

  answerByPlayer(){
    if(this.inputNum > 100  || this.inputNum <= 0) return;

    this.counter++;
    
    this.playerFinalAns = this.inputNum;
    this.diff = Math.abs(this.correctAns-this.playerFinalAns);

    if(this.playerFinalAns == this.correctAns){
      this.isCorrect = true;
      this.clearMsg = `It took a player ${this.counter} guesses. Play again?`;
    }
  }

  reset(){
    this.playerFinalAns = 0;
    this.inputNum = {} as number;
    this.isCorrect = false;
    this.correctAns = this.gameService.randomAns();
    this.counter = 0;
  }

}
