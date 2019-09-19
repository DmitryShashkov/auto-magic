import { Routes } from '@angular/router';
import { RoutingContract } from 'src/app/core/contracts/routing.contract';
import { BattlesComponent } from './battles.component';
import { BattlesListComponent } from './components/battles-list/battles-list.component';

export const BATTLES_ROUTES: Routes = [
    {
        path: '',
        component: BattlesComponent,
        children: [
            {
                path: RoutingContract.Battles.LIST,
                component: BattlesListComponent,
            },
        ],
    },
];
