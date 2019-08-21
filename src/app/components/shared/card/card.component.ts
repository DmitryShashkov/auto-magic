import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { CardModel } from "../../../models/card.model";

@Component({
    selector: 'am-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input() public card: CardModel;
}
