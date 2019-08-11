import { Routes } from "@angular/router";
import { RoutingContract } from '../../../core/contracts/routing.contract';

export const UNAUTHORIZED_LAYOUT_ROUTES: Routes = [
    {
        path: '',
        loadChildren: './../../features/home/home.module#HomeModule',
    },
    {
        path: RoutingContract.CompleteSignIn.ROOT,
        loadChildren: './../../features/complete-sign-in/complete-sign-in.module#CompleteSignInModule',
    },
];
