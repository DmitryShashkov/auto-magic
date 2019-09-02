import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    {
        path: '',
        loadChildren: './components/layouts/unauthorized-layout/unauthorized-layout.module#UnauthorizedLayoutModule',
    },
];
