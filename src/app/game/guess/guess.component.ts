import { Component, Input, OnInit } from '@angular/core';
import { Feelings } from 'src/app/types/Guess';
import { GuessService } from './guess.service';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {
  @Input() answer: number = {} as number;
  @Input() diff: number = {} as number;
  @Input() correctAns: number = {} as number;
  image: string = '';
  color: string = '';
  hintMsg: string = '';


  constructor(private guessService: GuessService) { }

  ngOnInit(): void {
  }

  createHint(){
    this.color = this.guessService.getColor(this.diff);
    this.image = this.guessService.getImage(this.diff);
    this.hintMsg = this.guessService.getMsg(this.diff);

    return this.color;
  }

}
