import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AnimationState } from 'src/app/core/decorators/animation-state.decorator';
import { AnimationsContract } from 'src/app/core/contracts/animations.contract';

@Component({
    selector: 'am-battles-list',
    templateUrl: './battles-list.component.html',
    styleUrls: ['./battles-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
@AnimationState(AnimationsContract.Battles.LIST)
export class BattlesListComponent { }
