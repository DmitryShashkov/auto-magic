import { Component, ChangeDetectionStrategy } from '@angular/core';
import { routerTransition } from './core/animations';
import { HasAnimatedTransitions } from './core/types/has-animated-transitions';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'am-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [routerTransition],
})
export class AppComponent implements HasAnimatedTransitions {
    public getAnimationState (outlet: RouterOutlet): string {
        return outlet
            && outlet.activatedRouteData
            && outlet.activatedRouteData['state'];
    }
}
