import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { RouterModule } from '@angular/router';
import { GAME_ROUTES } from './game.router';
import { GamesListComponent } from './components/games-list/games-list.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(GAME_ROUTES),
    ],
    declarations: [
        GamesListComponent,
        GameComponent,
    ],
})
export class GameModule {}
