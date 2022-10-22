import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { GuessComponent } from './guess/guess.component';
import { FormsModule } from '@angular/forms';
import { GameService } from './game.service';



@NgModule({
  declarations: [GameComponent, GuessComponent],
  providers: [GameService],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [GameComponent]
})
export class GameModule { }
