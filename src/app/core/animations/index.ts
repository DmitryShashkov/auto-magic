import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('void => home', [
        query(':enter, :leave', style({ position: 'fixed', width:'100%', height:'100%' }), { optional: true }),

        query(
            ':enter',
            [
                style({ transform: 'translateY(100%)' }),
                animate('1.0s ease-in-out', style({ transform: 'translateY(0%)' })),
            ] ,
            { optional: true },
        ),

        // https://github.com/angular/angular/issues/15477
        query('router-outlet ~ *', [style({}), animate(1, style({}))], { optional: true }),
    ]),

    transition('home => games-list', [
        query(':enter, :leave', style({ position: 'fixed', width:'100%', height:'100%' }), { optional: true }),

        group([
            query(
                ':enter',
                [
                    style({ transform: 'translateY(100%)' }),
                    animate('1.0s ease-in-out', style({ transform: 'translateY(0%)' })),
                ] ,
                { optional: true },
            ),
            query(
                ':leave',
                [
                    style({ transform: 'translateY(0%)' }),
                    animate('1.0s ease-in-out', style({ transform: 'translateY(-100%)' })),
                ],
                { optional: true },
            ),
        ]),

        // https://github.com/angular/angular/issues/15477
        query('router-outlet ~ *', [style({}), animate(1, style({}))], { optional: true }),
    ]),

    transition('games-list => home', [
        query(':enter, :leave', style({ position: 'fixed', width:'100%', height:'100%' }), { optional: true }),

        group([
            query(
                ':enter',
                [
                    style({ transform: 'translateY(-100%)' }),
                    animate('1.0s ease-in-out', style({ transform: 'translateY(0%)' })),
                ] ,
                { optional: true },
            ),
            query(
                ':leave',
                [
                    style({ transform: 'translateY(0%)' }),
                    animate('1.0s ease-in-out', style({ transform: 'translateY(100%)' })),
                ],
                { optional: true },
            ),
        ]),

        // https://github.com/angular/angular/issues/15477
        query('router-outlet ~ *', [style({}), animate(1, style({}))], { optional: true }),
    ]),
]);
