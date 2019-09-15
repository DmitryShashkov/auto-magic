import { Routes } from '@angular/router';
import { GameComponent } from './game.component';
import { GamesListComponent } from './components/games-list/games-list.component';

export const GAME_ROUTES: Routes = [
    {
        path: '',
        component: GameComponent,
        children: [
            {
                path: 'list',
                component: GamesListComponent,
                data: { state: 'lazy3' },
            },
        ],
    },
];
