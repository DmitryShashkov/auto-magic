import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AnimationState } from 'src/app/core/decorators/animation-state.decorator';
import { AnimationsContract } from 'src/app/core/contracts/animations.contract';

@Component({
    selector: 'am-games-list',
    templateUrl: './games-list.component.html',
    styleUrls: ['./games-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
@AnimationState(AnimationsContract.Games.LIST)
export class GamesListComponent { }
