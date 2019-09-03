import { Routes } from '@angular/router';
import { RoutingContract } from '../../../core/contracts/routing.contract';
import { AuthorizedGuard } from '../../../core/guards/authorized.guards';

export const AUTHORIZED_LAYOUT_ROUTES: Routes = [
    {
        path: RoutingContract.Game.ROOT,
        canActivate: [AuthorizedGuard],
        loadChildren: './../../features/game/game.module#GameModule',
    },
];
