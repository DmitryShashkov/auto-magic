import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: 'am-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent {}
