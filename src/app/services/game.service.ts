import { Injectable } from '@angular/core';
import { Player } from '../types/Player';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  playerStartedImg: string = 'https://cdn-icons-png.flaticon.com/512/21/21104.png';
  players: Player[] = [];
  correctAns: number = 0;
  counter: number = 0;
  gameCount: number = 0;
  playerIndex: number = 0;

  isCorrect: boolean = false;

  constructor() { 
    this.correctAns = this.randomAns();
  }

  answerByPlayer(answer: number, diff: number){
    //Using Round lobin to rotate in players
    this.playerIndex = (this.counter%this.players.length);
    console.log("Player"+ this.playerIndex);
    if(this.playerIndex == 1) this.gameCount++;
    console.log("gameCount"+ this.gameCount);
    
    this.players[this.playerIndex].guess = answer;
    this.players[this.playerIndex].diff = diff;
    console.log("answer"+ this.players[this.playerIndex].guess);
    console.log("correctAns"+ this.correctAns);
    console.log("diff"+ diff);
    
    if(diff == 0){
      this.isCorrect = true;
    }
    console.log("correct"+ this.isCorrect);

    this.counter++;

    return this.gameCount > 5 ? true : false;
  }

  createMsg(){
    if(this.isCorrect){
      return `Player ${this.playerIndex+1} won. Correct Answer is ${this.correctAns}. Play Again?`
    }
    
    return `No one figured the right answer. Correct Answer is ${this.correctAns}. Play Again?`
  }

  reset(){
    for(let i = 0; i < this.players.length; i++){
      this.players[i].guess = 0;
      this.players[i].diff = 0;
      this.players[i].img = this.playerStartedImg;
    }
    console.log(this.players);
    this.isCorrect = false;
    this.correctAns = this.randomAns();
    this.counter = 0;
    this.gameCount = 0;
    this.playerIndex = 0;
  }

  backPage(){
    this.players = [];
    this.isCorrect = false;
    this.correctAns = this.randomAns();
    this.counter = 0;
    this.gameCount = 0;
    this.playerIndex = 0;
  }

  randomAns(){
    return Math.floor(Math.random() * (100-0) + 0);
  }

  setPlayers(players: Player[]){
    this.players = players;
    console.log(this.players);
  }
}
