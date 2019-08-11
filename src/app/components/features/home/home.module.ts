import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HOME_ROUTES } from "./home.router";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(HOME_ROUTES),
    ],
    declarations: [
        HomeComponent,
    ],
})
export class HomeModule { }
