import { AnimationTransitionMetadata, transition, group, query, style, animate } from '@angular/animations';
import { AnimationsContract } from '../../contracts/animations.contract';
import { FIXED_POSITION_QUERY } from '../fixed-position.query';
import { HACK_QUERY } from '../hack.query';

export const HOME_TO_BATTLES_LIST_TRANSITION: AnimationTransitionMetadata = transition(
    AnimationsContract.Transitions.HOME_TO_BATTLES,
    [
        FIXED_POSITION_QUERY,

        group([
            query(
                ':enter',
                [
                    style({
                        transform: 'translateY(100%)',
                    }),
                    animate(
                        '1.0s ease-in-out',
                        style({
                            transform: 'translateY(0%)',
                        }),
                    ),
                ] ,
                { optional: true },
            ),
            query(
                ':leave',
                [
                    style({
                        transform: 'translateY(0%)',
                    }),
                    animate(
                        '1.0s ease-in-out',
                        style({
                            transform: 'translateY(-100%)',
                        }),
                    ),
                ],
                { optional: true },
            ),
        ]),

        HACK_QUERY,
    ],
);
