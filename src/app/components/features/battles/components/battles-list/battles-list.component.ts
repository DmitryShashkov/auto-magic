import { Component, ChangeDetectionStrategy, AfterViewInit, OnDestroy, ChangeDetectorRef, ViewChildren, QueryList, ElementRef, Renderer2 } from '@angular/core';
import { AnimationState } from 'src/app/core/decorators/animation-state.decorator';
import { AnimationsContract } from 'src/app/core/contracts/animations.contract';
import { BattlesService } from '../../battles.service';
import { Table } from 'src/app/core/utils/table/table';
import { BattleModel } from 'src/app/models/battle.model';
import { ActivatedRoute } from '@angular/router';
import { UrlFilterProvider } from 'src/app/core/utils/table/filter-providers/url.filter-provider';
import { DEFAULT_LIMIT } from '../../../../../app.constants';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PageChangeEvent } from 'src/app/components/shared/paginator/types/page-change.event';

@Component({
    selector: 'am-battles-list',
    templateUrl: './battles-list.component.html',
    styleUrls: ['./battles-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
@AnimationState(AnimationsContract.Battles.LIST)
export class BattlesListComponent {
    public battlesTable: Table<BattleModel>;
    public limit: number = 4;

    public currentPage: BehaviorSubject<number> = new BehaviorSubject(0);

    @ViewChildren('entry')
    private entries: QueryList<ElementRef>;

    constructor (
        private readonly battlesService: BattlesService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly renderer: Renderer2,
    ) {
        this.battlesTable = new Table({
            filter: UrlFilterProvider.forRoute(
                this.activatedRoute,
                { limit: this.limit },
            ),
            service: this.battlesService,
        });
    }

    public onPageChanged (event: PageChangeEvent): void {
        this.currentPage.next(event.page);
    }

    // public ngAfterViewInit (): void {
    //     of(null).pipe(delay(500)).subscribe(() => {
    //         this.entries.forEach((entry) => {
    //             this.renderer.addClass(entry.nativeElement, 'activated');
    //         });
    //     });
    // }

    // public ngOnDestroy (): void {
    //     this.entries.forEach((entry) => {
    //         this.renderer.removeClass(entry.nativeElement, 'activated');
    //     });
    // }
}
