import { AnimationTransitionMetadata, transition, query, style, animate } from '@angular/animations';
import { AnimationsContract } from '../../contracts/animations.contract';
import { FIXED_POSITION_QUERY } from '../fixed-position.query';
import { HACK_QUERY } from '../hack.query';

export const VOID_TO_HOME_TRANSITION: AnimationTransitionMetadata = transition(
    `${AnimationsContract.VOID} => ${AnimationsContract.Home.ROOT}`,
    [
        FIXED_POSITION_QUERY,

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

        HACK_QUERY,
    ],
);
