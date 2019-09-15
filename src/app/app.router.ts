import { Routes } from '@angular/router';
import { HomeComponent } from './components/features/home/home.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { state: 'home' },
    },
    {
        path: 'games',
        loadChildren: () => import('./components/features/game/game.module').then((a) => a.GameModule),
    },
];
