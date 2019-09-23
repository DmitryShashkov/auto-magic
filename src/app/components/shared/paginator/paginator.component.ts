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
    @Input() public totalRecords: number;
    @Input() public useRouter: boolean = true;

    @Output() public pageChanged: EventEmitter<PageChangeEvent> = new EventEmitter();

    constructor (
        private readonly router: Router,
    ) { }

    public onPageChange (event: PageChangeEvent): void {
        this.pageChanged.emit(event);

        if (this.useRouter) {
            this.router.navigate([], {
                queryParams: {
                    offset: event.page * this.rows,
                },
                queryParamsHandling: 'merge',
            });
        }
    }
}
