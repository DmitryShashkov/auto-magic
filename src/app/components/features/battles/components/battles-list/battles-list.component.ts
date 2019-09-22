import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AnimationState } from 'src/app/core/decorators/animation-state.decorator';
import { AnimationsContract } from 'src/app/core/contracts/animations.contract';
import { BattlesService } from '../../battles.service';
import { Table } from 'src/app/core/utils/table/table';
import { BattleModel } from 'src/app/models/battle.model';
import { ActivatedRoute } from '@angular/router';
import { UrlFilterProvider } from 'src/app/core/utils/table/filter-providers/url.filter-provider';

@Component({
    selector: 'am-battles-list',
    templateUrl: './battles-list.component.html',
    styleUrls: ['./battles-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
@AnimationState(AnimationsContract.Battles.LIST)
export class BattlesListComponent {
    public battlesTable: Table<BattleModel>;

    constructor (
        private readonly battlesService: BattlesService,
        private readonly activatedRoute: ActivatedRoute,
    ) {
        this.battlesTable = new Table({
            filter: UrlFilterProvider.forRoute(this.activatedRoute),
            service: this.battlesService,
        });
    }
}