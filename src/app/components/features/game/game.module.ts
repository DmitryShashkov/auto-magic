import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { RouterModule } from '@angular/router';
import { GAME_ROUTES } from './game.router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(GAME_ROUTES),
    ],
    declarations: [
        GameComponent,
    ],
})
export class GameModule {}
