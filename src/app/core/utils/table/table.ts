import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { TableFilter } from './types/table.filter';
import { TableConfig } from './types/table.config';
import { TableService } from './types/table.service';
import { switchMap, shareReplay, tap, distinctUntilChanged } from 'rxjs/operators';

export class Table<T> {
    private filter: Observable<TableFilter>;
    private service: TableService<T>;

    private currentData: BehaviorSubject<T[]> = new BehaviorSubject([]);
    private totalCount: BehaviorSubject<number> = new BehaviorSubject(0);

    private latestAppliedFilter: TableFilter;

    private subscriptions: Subscription = new Subscription();

    constructor (config: TableConfig<T>) {
        this.filter = config.filter.pipe(shareReplay());
        this.service = config.service;

        this.subscriptions.add(
            this.filter.pipe(
                tap((filter) => {
                    this.latestAppliedFilter = filter;
                }),
                switchMap((filter) => {
                    return this.service.findList(filter);
                }),
            ).subscribe((response) => {
                this.currentData.next(response.rows);
                this.totalCount.next(response.count);
            }),
        );
    }

    public get data (): Observable<T[]> {
        return this.currentData.asObservable();
    }
    public get total (): Observable<number> {
        return this.totalCount
            .asObservable()
            .pipe(
                distinctUntilChanged(),
            );
    }

    public refresh (): void {
        this.service.findList(this.latestAppliedFilter).subscribe((response) => {
            this.currentData.next(response.rows);
            this.totalCount.next(response.count);
        });
    }

    public destroy (): void {
        this.subscriptions.unsubscribe();
    }
}
