import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SessionsService } from 'src/app/services/sessions.service';

@Injectable()
export class BearerInterceptor implements HttpInterceptor {
    constructor (
        private readonly sessionsService: SessionsService,
    ) { }

    public intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.sessionsService.isSignedIn) {
            return next.handle(req);
        }

        const { token } = this.sessionsService.currentUser.value.tokens[0];
        const nextReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
        return next.handle(nextReq);
    }
}
