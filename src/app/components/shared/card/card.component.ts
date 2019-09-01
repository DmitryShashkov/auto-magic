import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { CardModel } from "../../../models/card.model";

@Component({
    selector: 'am-card',
    templateUrl: './card.component.html',
    styleUrls: ['./../../../../assets/styles/mana-colors.scss', './card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input() public card: CardModel;
}

// todo: remove ?1562857017 from art crop link in DB, add it manually instead
// todo: show game hints instead of flavor text if there isn't one