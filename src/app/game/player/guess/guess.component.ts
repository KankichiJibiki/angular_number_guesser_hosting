import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { GuessService } from './guess.service';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit, OnDestroy, OnChanges {
  @Input() answer: number = {} as number;
  @Input() diff: number = {} as number;
  correctAns: number = 0;
  image: string = '';
  color: string = '';
  hintMsg: string = '';


  constructor(private guessService: GuessService, private gameService: GameService) {
    this.correctAns = this.gameService.correctAns;
  }
  
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.correctAns = this.gameService.correctAns;
  }

  ngOnDestroy(): void {
      
  }

  getColor(){
    this.color = this.guessService.getColor(this.diff);
    return this.color;
  }

  getHint(){
    this.hintMsg = this.guessService.getMsg(this.diff);
    return this.hintMsg;
  }

  getImage(){
    this.image = this.guessService.getImage(this.diff);
    return this.image;
  }

}
