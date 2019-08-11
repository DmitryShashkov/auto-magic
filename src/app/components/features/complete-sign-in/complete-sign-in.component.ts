import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'am-complete-sign-in',
    templateUrl: './complete-sign-in.component.html',
    styleUrls: ['./complete-sign-in.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompleteSignInComponent { }
