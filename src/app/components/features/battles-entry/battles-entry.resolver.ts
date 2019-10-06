import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { BattleModel } from 'src/app/models/battle.model';
import { Observable, of } from 'rxjs';
import { BattlesEntryRouterState } from './battles-entry.router-state';
import { BattlesService } from '../../../services/battles.service';
import { RoutingContract } from 'src/app/core/contracts/routing.contract';
import { Injectable } from '@angular/core';

@Injectable()
export class BattlesEntryResolver implements Resolve<BattleModel> {
    constructor (
        private readonly router: Router,
        private readonly battlesService: BattlesService,
    ) { }

    public resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BattleModel> {
        const routerState: BattlesEntryRouterState = this.router
            .getCurrentNavigation()
            .extras.state as BattlesEntryRouterState;

        if (routerState && routerState.battle) {
            return of(routerState.battle);
        }

        const battleId: number = Number(route.params[RoutingContract.Battles.PARAM_BATTLE_ID]);
        return this.battlesService.findOne(battleId);
    }
}
