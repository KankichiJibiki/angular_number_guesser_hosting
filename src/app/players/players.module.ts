import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [PlayersComponent,],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  exports: [PlayersComponent]
})
export class PlayersModule { }
