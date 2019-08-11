import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";

export const HOME_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
    },
];
