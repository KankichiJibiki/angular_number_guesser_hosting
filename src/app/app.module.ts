import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './game/game.module';
import { PlayersModule } from './players/players.module';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,GameModule, PlayersModule, AppRoutingModule,],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
