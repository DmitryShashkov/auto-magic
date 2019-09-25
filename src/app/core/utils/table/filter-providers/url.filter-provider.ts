import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TableFilter } from '../types/table.filter';
import { map } from 'rxjs/operators';
import { DEFAULT_LIMIT } from 'src/app/app.constants';
import { UrlFilterProviderDto } from '../types/url-filter-provider.dto';

export class UrlFilterProvider {
    public static forRoute (route: ActivatedRoute, dto?: UrlFilterProviderDto): Observable<TableFilter> {
        return route.queryParams.pipe(
            map((query) => {
                const limit: number = query.limit
                    || (dto && dto.limit)
                    || DEFAULT_LIMIT;
                const offset: number = query.offset || 0;

                return { limit, offset, ...query };
            }),
        );
    }
}
