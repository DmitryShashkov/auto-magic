import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit, AfterViewInit, ViewChild, OnChanges } from '@angular/core';
import { PageChangeEvent } from './types/page-change.event';
import { Router, ActivatedRoute } from '@angular/router';
import { take, delay } from 'rxjs/operators';
import { Paginator } from 'primeng/paginator';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';

@Component({
    selector: 'am-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent implements OnChanges {
    @Input() public rows: number;
    @Input() private totalRecords: number;
    @Input() private useRouter: boolean = true;

    @Input() private firstPageRows: number;

    @Output() public pageChanged: EventEmitter<PageChangeEvent> = new EventEmitter();

    @ViewChild('paginator', { static: true })
    private paginator: Paginator;

    public get calculatedTotalRecords (): number {
        if (!this.totalRecords) { return 0; }
        if (!this.firstPageRows) { return this.totalRecords; }

        return this.totalRecords - this.firstPageRows + this.rows;
    }

    constructor (
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
    ) { }

    public ngOnChanges (): void {
        if (this.useRouter) {
            this.activatedRoute.queryParams
                .pipe(
                    take(1),
                    delay(0, animationFrame),
                )
                .subscribe((queryParams) => {
                    let offset: number = Number(queryParams.offset) || 0;
                    if (this.firstPageRows && offset) {
                        offset = offset + this.rows - this.firstPageRows;
                    }

                    const pageNumber: number = Math.floor(offset / this.rows);
                    this.paginator.changePage(pageNumber);
                });
        }
    }

    public onPageChange (event: PageChangeEvent): void {
        this.pageChanged.emit(event);

        if (this.useRouter) {
            let offset: number = event.page * this.rows;
            if (this.firstPageRows && offset) {
                offset = offset - this.rows + this.firstPageRows;
            }

            this.router.navigate([], {
                queryParams: { offset },
                queryParamsHandling: 'merge',
            });
        }
    }
}
