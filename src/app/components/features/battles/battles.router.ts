import { Routes } from '@angular/router';
import { RoutingContract } from 'src/app/core/contracts/routing.contract';
import { BattlesComponent } from './battles.component';
import { BattlesListComponent } from './components/battles-list/battles-list.component';
import { BattlesEntryComponent } from './components/battles-entry/battles-entry.component';
import { BattlesEntryResolver } from './resolvers/battles-entry.resolver';

export const BATTLES_ROUTES: Routes = [
    {
        path: '',
        component: BattlesComponent,
        children: [
            {
                path: RoutingContract.Battles.LIST,
                component: BattlesListComponent,
            },
            {
                path: RoutingContract.Battles.PARAM_BATTLE_ID,
                component: BattlesEntryComponent,
                resolve: {
                    // RoutingContract.Battles.RESOLVE_BATTLE_ENTRY
                    battleEntry: BattlesEntryResolver,
                },
            },
        ],
    },
];
