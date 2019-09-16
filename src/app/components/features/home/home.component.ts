import { Component, ChangeDetectionStrategy, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { GOOGLE_CLIENT_ID, SELF_URL } from '../../../../environments/environment';
import { RoutingContract } from '../../../core/contracts/routing.contract';
import { CardsService } from '../../../services/cards.service';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { CardModel } from '../../../models/card.model';
import { map, filter, delay, switchMap, tap } from 'rxjs/operators';
import { HINTS } from './home.hints';
import { SessionsService } from 'src/app/services/sessions.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { AnimationState } from 'src/app/core/decorators/animation-state.decorator';
import { AnimationsContract } from 'src/app/core/contracts/animations.contract';

@Component({
    selector: 'am-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
@AnimationState(AnimationsContract.Home.ROOT)
export class HomeComponent implements OnInit {
    public readonly isCardClicked: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public randomCard: Observable<CardModel>;

    constructor (
        @Inject(DOCUMENT) private readonly document: Document,
        private readonly cardsService: CardsService,
        private readonly sessionsService: SessionsService,
        private readonly usersService: UsersService,
        private readonly router: Router,
    ) { }

    public ngOnInit (): void {
        this.randomCard = this.cardsService.getRandom().pipe(
            map((card: CardModel) => {
                card.text = `Click ${card.name}: enter the game.`;

                if (!card.flavorText) {
                    card.flavorText = HINTS[Math.floor(Math.random() * HINTS.length)];
                }

                return card;
            }),
        );

        this.isCardClicked.pipe(
            filter((isClicked) => isClicked),
            delay(500),
            switchMap(() => {
                return (this.sessionsService.isSignedIn)
                    ? of(null)
                    : this.usersService.createTemporaryUser();
            }),
            tap((newUser) => {
                if (newUser) {
                    this.sessionsService.saveUser(newUser);
                }
            }),
        ).subscribe(this.enterTheGame.bind(this));
    }

    public onCardClicked (): void {
        this.isCardClicked.next(true);
    }

    private signIn (): void {
        // todo: move this functionality to profile settings
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

    private enterTheGame (): void {
        // this.router.navigate([`/${RoutingContract.Game.ROOT}`]);
        this.router.navigate(['games', 'list']);
    }
}
