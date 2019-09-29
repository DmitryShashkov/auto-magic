import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { PageChangeEvent } from './types/page-change.event';
import { Router } from '@angular/router';

@Component({
    selector: 'am-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
    @Input() public rows: number;
    @Input() private totalRecords: number;
    @Input() private useRouter: boolean = true;

    @Input() private firstPageRows: number;

    @Output() public pageChanged: EventEmitter<PageChangeEvent> = new EventEmitter();

    public get calculatedTotalRecords (): number {
        if (!this.totalRecords) { return 0; }
        if (!this.firstPageRows) { return this.totalRecords; }

        return this.totalRecords - this.firstPageRows + this.rows;
    }

    constructor (
        private readonly router: Router,
    ) { }

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
