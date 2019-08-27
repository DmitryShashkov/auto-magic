import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HOME_ROUTES } from "./home.router";
import { HomeComponent } from "./home.component";
import { CardsService } from "src/app/services/cards.service";
import { CardModule } from "../../shared/card/card.module";
import { DirectivesModule } from "../../../directives/directives.modules";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(HOME_ROUTES),
        CardModule,
        DirectivesModule,
    ],
    declarations: [
        HomeComponent,
    ],
    providers: [
        CardsService,
    ],
})
export class HomeModule { }
