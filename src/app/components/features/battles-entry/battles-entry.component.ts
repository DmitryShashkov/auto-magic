import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationState } from 'src/app/core/decorators/animation-state.decorator';
import { AnimationsContract } from 'src/app/core/contracts/animations.contract';

@Component({
    selector: 'am-battles-entry',
    templateUrl: './battles-entry.component.html',
    styleUrls: ['./battles-entry.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
@AnimationState(AnimationsContract.Battles.ENTRY)
export class BattlesEntryComponent {
    constructor (
        private readonly activatedRoute: ActivatedRoute,
    ) {
        this.activatedRoute.data.subscribe(console.log);
    }
}
