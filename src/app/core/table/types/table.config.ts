import { TableService } from './table.service';
import { TableFilter } from './table.filter';
import { Observable } from 'rxjs';

export interface TableConfig<T> {
    readonly service: TableService<T>;
    readonly filter: Observable<TableFilter>;
}
