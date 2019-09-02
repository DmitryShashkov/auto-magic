import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { SessionsService } from "../../services/sessions.service";
import { map, tap } from "rxjs/operators";

@Injectable()
export class AuthorizedGuard implements CanActivate, CanActivateChild {
    constructor (
        private readonly sessionsService: SessionsService,
        private readonly router: Router,
    ) { }

    public canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.sessionsService.currentUser.pipe(
            tap((user) => {
                if (!user) {
                    this.router.navigate(['/']);
                }
            }),
            map((user) => !!user),
        );
    }

    public canActivateChild (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(route, state);
    }
}

// todo: add unauthorized guard for home page to redirect to game screen is usr is logged in already
