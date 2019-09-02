import { Injectable } from '@angular/core';
import { ServiceBase } from '../core/classes/service.base';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { Storage } from '../core/utils/storage';

@Injectable({ providedIn: 'root' })
export class SessionsService extends ServiceBase {
    private readonly storage: Storage<UserModel> = new Storage('user', UserModel);
    public readonly currentUser: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(null);

    constructor (
        private readonly httpClient: HttpClient,
    ) {
        super('/sessions');
        this.currentUser.next(this.storage.restore());
    }

    public signIn (code: string): Observable<UserModel> {
        return this.httpClient
            .post(this.apiEndpoint, { code })
            .pipe(
                map((data) => plainToClass(UserModel, data)),
                tap((user) => {
                    this.storage.save(user);
                    this.currentUser.next(user);
                }),
            );
    }

    public signOut (): void {
        this.storage.clear();
        this.currentUser.next(null);
    }
}
