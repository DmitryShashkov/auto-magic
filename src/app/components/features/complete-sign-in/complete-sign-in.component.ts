import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SessionsService } from '../../../services/sessions.service';
import { ActivatedRoute } from '@angular/router';

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
    ) { }

    public ngOnInit (): void {
        const code: string = this.activatedRoute.snapshot.queryParamMap.get('code');
        this.sessionsService.signIn(code).subscribe(console.log);
    }
}
