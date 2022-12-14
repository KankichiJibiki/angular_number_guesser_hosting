import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameComponent } from "./game/game.component";
import { PlayersComponent } from "./players/players.component";

const routes: Routes = [
    {path: '', component: PlayersComponent},
    {path: 'game', component: GameComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
