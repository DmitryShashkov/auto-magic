import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card.component";
import { DirectivesModule } from "../../../directives/directives.modules";

@NgModule({
    imports: [
        CommonModule,
        DirectivesModule,
    ],
    declarations: [
        CardComponent,
    ],
    exports: [
        CardComponent,
    ],
})
export class CardModule { }
