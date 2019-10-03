import { ServiceBase } from 'src/app/core/classes/service.base';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TableService } from 'src/app/core/utils/table/types/table.service';
import { BattleModel } from 'src/app/models/battle.model';
import { TableFilter } from 'src/app/core/utils/table/types/table.filter';
import { Observable } from 'rxjs';
import { ListResponse } from 'src/app/core/types/list-response';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

@Injectable()
export class BattlesService
    extends ServiceBase
    implements TableService<BattleModel> {
    constructor (
        private readonly httpClient: HttpClient,
    ) {
        super('/battles');
    }

    public findList (filter: TableFilter): Observable<ListResponse<BattleModel>> {
        const params: HttpParams = new HttpParams({
            fromObject: filter,
        });

        return this.httpClient
            .get<ListResponse<any>>(this.apiEndpoint, { params })
            .pipe(
                map((response) => ({
                    rows: response.rows.map((data) => plainToClass(BattleModel, data)),
                    count: response.count,
                })),
            );
    }

    public findOne (id: number): Observable<BattleModel> {
        return this.httpClient
            .get<any>(`${this.apiEndpoint}/${id}`)
            .pipe(
                map((data) => plainToClass(BattleModel, data)),
            );
    }

    public create (): Observable<BattleModel> {
        return this.httpClient
            .post<any>(this.apiEndpoint, null)
            .pipe(
                map((data) => plainToClass(BattleModel, data)),
            );
    }
}
