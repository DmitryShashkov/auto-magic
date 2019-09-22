import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TableFilter } from '../types/table.filter';
import { map } from 'rxjs/operators';
import { DEFAULT_LIMIT } from 'src/app/app.constants';

export class UrlFilterProvider {
    public static forRoute (route: ActivatedRoute): Observable<TableFilter> {
        return route.queryParams.pipe(
            map((query) => ({
                ...query,
                limit: query.limit || DEFAULT_LIMIT,
                offset: query.offset || 0,
            })),
        );
    }
}
