import { AnimationQueryMetadata, style, query } from '@angular/animations';

export const FIXED_POSITION_QUERY: AnimationQueryMetadata = query(
    ':enter, :leave',
    style({
        position: 'fixed',
        width:'100%',
        height:'100%',
    }),
    { optional: true },
);
