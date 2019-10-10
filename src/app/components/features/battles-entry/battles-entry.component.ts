import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationState } from 'src/app/core/decorators/animation-state.decorator';
import { AnimationsContract } from 'src/app/core/contracts/animations.contract';
import { BehaviorSubject } from 'rxjs';
import { BattleModel } from 'src/app/models/battle.model';
import { pluck } from 'rxjs/operators';
import { RoutingContract } from 'src/app/core/contracts/routing.contract';
import { UnitModel } from 'src/app/models/unit.model';

@Component({
    selector: 'am-battles-entry',
    templateUrl: './battles-entry.component.html',
    styleUrls: ['./../../../../assets/styles/mana-colors.scss', './battles-entry.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
@AnimationState(AnimationsContract.Battles.ENTRY)
export class BattlesEntryComponent {
    public readonly battle: BehaviorSubject<BattleModel> = new BehaviorSubject(null);

    public readonly hoveredEnemy: BehaviorSubject<UnitModel> = new BehaviorSubject(null);

    constructor (
        private readonly activatedRoute: ActivatedRoute,
    ) {
        this.activatedRoute.data
            .pipe(pluck(RoutingContract.Battles.RESOLVE_BATTLE_ENTRY))
            .subscribe(this.battle.next.bind(this.battle));
    }
}
