import { AnimationQueryMetadata, query, style, animate } from '@angular/animations';

// https://github.com/angular/angular/issues/15477
export const HACK_QUERY: AnimationQueryMetadata = query(
    'router-outlet ~ *',
    [
        style({}),
        animate(1, style({})),
    ],
    { optional: true },
);
