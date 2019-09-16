import { Routes } from '@angular/router';
import { GameComponent } from './game.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { RoutingContract } from 'src/app/core/contracts/routing.contract';
import { AnimationsContract as AC } from '../../../core/contracts/animations.contract';

export const GAME_ROUTES: Routes = [
    {
        path: '',
        component: GameComponent,
        children: [
            {
                path: RoutingContract.Games.LIST,
                component: GamesListComponent,
            },
        ],
    },
];
