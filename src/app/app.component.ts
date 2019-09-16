import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { routerTransition } from './core/animations';
import { HasAnimatedTransitions } from './core/types/has-animated-transitions';
import { AnimationStateService } from './services/animation-state.service';
import { Observable } from 'rxjs';
import 'reflect-metadata';
import { MetaDataContract } from './core/contracts/meta-data.contract';

@Component({
    selector: 'am-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [routerTransition],
})
export class AppComponent implements HasAnimatedTransitions {
    constructor (
        private readonly animationStateService: AnimationStateService,
    ) { }

    public get animationState (): Observable<string> {
        return this.animationStateService.currentState;
    }
    public setAnimationState (nextComponent: Function): void {
        const nextState: string = Reflect.get(nextComponent.constructor, MetaDataContract.ANIMATION_STATE);
        if (nextState) {
            this.animationStateService.setState(nextState);
        }
    }
}
