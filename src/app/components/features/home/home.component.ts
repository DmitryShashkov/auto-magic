import { Component, ChangeDetectionStrategy, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { GOOGLE_CLIENT_ID, SELF_URL } from '../../../../environments/environment';
import { RoutingContract } from '../../../core/contracts/routing.contract';
import { CardsService } from '../../../services/cards.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { CardModel } from '../../../models/card.model';
import { map, filter, delay } from 'rxjs/operators';

@Component({
    selector: 'am-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
    public readonly isCardClicked: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public randomCard: Observable<CardModel>;

    constructor (
        @Inject(DOCUMENT) private readonly document: Document,
        private readonly cardsService: CardsService,
    ) { }

    public ngOnInit (): void {
        this.randomCard = this.cardsService.getRandom().pipe(
            map((card: CardModel) => {
                card.text = `Click ${card.name}: enter the game.`;
                return card;
            }),
        );

        this.isCardClicked.pipe(
            filter((isClicked) => isClicked),
            delay(500),
        ).subscribe(this.signIn.bind(this));
    }

    public onCardClicked (): void {
        this.isCardClicked.next(true);
    }
    
    private signIn (): void {
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
