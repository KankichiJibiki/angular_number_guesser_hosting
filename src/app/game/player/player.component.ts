import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/types/Player';
import { GuessService } from './guess/guess.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player = {} as Player;

  constructor(private guessService: GuessService) {
  }

  ngOnInit(): void {
  }

}
