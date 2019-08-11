import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { GOOGLE_CLIENT_ID, SELF_URL } from '../../../../environments/environment';
import { RoutingContract } from '../../../core/contracts/routing.contract';

@Component({
    selector: 'am-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    constructor (
        @Inject(DOCUMENT) private readonly document: Document,
    ) { }
    
    public signIn (): void {
        const redirectUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
        const scopes: string[] = [
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile',
            'openid',
        ];
        
        redirectUrl.searchParams.append('access_type', 'offline');
        redirectUrl.searchParams.append('scope', scopes.join(' '));
        redirectUrl.searchParams.append('response_type', 'code');
        redirectUrl.searchParams.append('client_id', GOOGLE_CLIENT_ID);
        redirectUrl.searchParams.append('redirect_uri', `${SELF_URL}/${RoutingContract.CompleteSignIn.ROOT}`);
        
        this.document.location.href = redirectUrl.href;
    }
}
