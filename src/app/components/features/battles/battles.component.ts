import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { HasAnimatedTransitions } from 'src/app/core/types/has-animated-transitions';
import { routerTransition } from 'src/app/core/animations';
import { AnimationStateService } from 'src/app/services/animation-state.service';
import { Observable } from 'rxjs';
import { MetaDataContract } from 'src/app/core/contracts/meta-data.contract';
import 'reflect-metadata';

@Component({
    selector: 'am-battles',
    templateUrl: './battles.component.html',
    styleUrls: ['./battles.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [routerTransition],
})
export class BattlesComponent implements HasAnimatedTransitions {
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
