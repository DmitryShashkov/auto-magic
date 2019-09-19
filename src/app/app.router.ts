import { Routes } from '@angular/router';
import { HomeComponent } from './components/features/home/home.component';
import { RoutingContract } from './core/contracts/routing.contract';

export const APP_ROUTES: Routes = [
    {
        path: RoutingContract.ROOT,
        component: HomeComponent,
    },
    {
        path: RoutingContract.Battles.ROOT,
        loadChildren: () => import('./components/features/battles/battles.module')
            .then((factory) => factory.BattlesModule),
    },
];
