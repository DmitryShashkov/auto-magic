import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { BattleModel } from 'src/app/models/battle.model';
import { Observable, of } from 'rxjs';
import { BattleEntryRouterState } from '../types/battle-entry.router-state';
import { BattlesService } from '../battles.service';
import { RoutingContract } from 'src/app/core/contracts/routing.contract';
import { Injectable } from '@angular/core';

@Injectable()
export class BattlesEntryResolver implements Resolve<BattleModel> {
    constructor (
        private readonly router: Router,
        private readonly battlesService: BattlesService,
    ) { }

    public resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BattleModel> {
        const routerState: BattleEntryRouterState = this.router
            .getCurrentNavigation()
            .extras.state as BattleEntryRouterState;

        if (routerState && routerState.battle) {
            return of(routerState.battle);
        }

        const battleId: number = Number(route.params[RoutingContract.Battles.BATTLE_ID]);
        return this.battlesService.findOne(battleId);
    }
}
