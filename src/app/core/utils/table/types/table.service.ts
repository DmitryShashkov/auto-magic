import { TableFilter } from './table.filter';
import { Observable } from 'rxjs';
import { ListResponse } from '../../../types/list-response';

export interface TableService<T> {
    findList: (filter: TableFilter) => Observable<ListResponse<T>>;
}
