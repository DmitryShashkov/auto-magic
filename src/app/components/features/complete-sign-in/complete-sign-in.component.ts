import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SessionsService } from '../../../services/sessions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutingContract } from '../../../core/contracts/routing.contract';

@Component({
    selector: 'am-complete-sign-in',
    templateUrl: './complete-sign-in.component.html',
    styleUrls: ['./complete-sign-in.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompleteSignInComponent implements OnInit {
    constructor (
        private readonly activatedRoute: ActivatedRoute,
        private readonly sessionsService: SessionsService,
        private readonly router: Router,
    ) { }

    public ngOnInit (): void {
        const code: string = this.activatedRoute.snapshot.queryParamMap.get('code');
        this.sessionsService.signIn(code).subscribe(() => {
            this.router.navigate([`/${RoutingContract.Game.ROOT}`]);
        });
    }
}
