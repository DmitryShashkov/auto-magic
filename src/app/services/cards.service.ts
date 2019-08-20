import { ServiceBase } from "../core/classes/service.base";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { CardModel } from "../models/card.model";
import { ListResponse } from "../core/types/list-response";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";

export class CardsService extends ServiceBase {
    constructor (
        private readonly httpClient: HttpClient,
    ) {
        super('/cards');
    }

    public getRandom (): Observable<CardModel> {
        const params: HttpParams = new HttpParams({
            fromObject: { limit: '1' },
        });

        return this.httpClient
            .get<ListResponse<any>>(this.apiEndpoint, { params })
            .pipe(
                map((response) => plainToClass(CardModel, response.rows[0])),
            );
    }
}
