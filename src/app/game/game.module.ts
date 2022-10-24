import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { GuessComponent } from './player/guess/guess.component';
import { FormsModule } from '@angular/forms';
import { GameService } from '../services/game.service';
import { PlayerComponent } from './player/player.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [GameComponent, PlayerComponent, GuessComponent],
  providers: [GameService],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [GameComponent]
})
export class GameModule { }
