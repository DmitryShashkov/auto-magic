import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HasAnimatedTransitions } from 'src/app/core/types/has-animated-transitions';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from 'src/app/core/animations';

@Component({
    selector: 'am-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [routerTransition],
})
export class GameComponent implements HasAnimatedTransitions {
    public getAnimationState (outlet: RouterOutlet): string {
        return outlet
            && outlet.activatedRouteData
            && outlet.activatedRouteData['state'];
    }
}
