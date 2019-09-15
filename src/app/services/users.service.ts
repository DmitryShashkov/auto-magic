import { ServiceBase } from '../core/classes/service.base';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UsersService extends ServiceBase {
    constructor (
        private readonly httpClient: HttpClient,
    ) {
        super('/users');
    }

    public createTemporaryUser (): Observable<UserModel> {
        return this.httpClient
            .post(this.apiEndpoint, { })
            .pipe(
                map((data) => plainToClass(UserModel, data)),
            );
    }
}
