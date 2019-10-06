import { Routes } from '@angular/router';
import { HomeComponent } from './components/features/home/home.component';
import { RoutingContract } from './core/contracts/routing.contract';
import { BattlesListComponent } from './components/features/battles-list/battles-list.component';
import { BattlesEntryComponent } from './components/features/battles-entry/battles-entry.component';
import { BattlesEntryResolver } from './components/features/battles-entry/battles-entry.resolver';

export const APP_ROUTES: Routes = [
    {
        path: RoutingContract.ROOT,
        component: HomeComponent,
    },
    {
        path: RoutingContract.Battles.LIST,
        component: BattlesListComponent,
    },
    {
        path: RoutingContract.Battles.ENTRY,
        component: BattlesEntryComponent,
        resolve: {
            // RoutingContract.Battles.RESOLVE_BATTLE_ENTRY
            battleEntry: BattlesEntryResolver,
        },
    },
];
