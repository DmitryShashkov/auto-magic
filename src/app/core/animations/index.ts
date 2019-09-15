import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* => *', [
        query(':enter, :leave', style({ position: 'fixed', width:'100%', height:'100%' }), { optional: true }),
        query(':enter', style({ transform: 'translateX(100%)' }), { optional: true }),

        group([
            query(
                ':leave',
                [
                    style({ transform: 'translateX(0%)' }),
                    animate('1.0s ease-in-out', style({ transform: 'translateX(-100%)' })),
                ],
                { optional: true },
            ),
            query(
                ':enter',
                [
                    animate('1.0s ease-in-out', style({ transform: 'translateX(0%)' })),
                    animateChild(),
                ],
                { optional: true },
            ),
        ]),

        query('router-outlet ~ *', [style({}), animate(1, style({}))], { optional: true }),
    ]),
]);
