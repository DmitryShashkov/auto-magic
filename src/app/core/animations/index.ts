import { trigger } from '@angular/animations';
import { VOID_TO_HOME_TRANSITION } from './to-home/void-to-home.transition';
import { HOME_TO_BATTLES_LIST_TRANSITION } from './to-battles-list/home-to-battles-list.transition';
import { BATTLES_LIST_TO_HOME_TRANSITION } from './to-home/battles-list-to-home.transition';

export const routerTransition = trigger('routerTransition', [
    VOID_TO_HOME_TRANSITION,
    HOME_TO_BATTLES_LIST_TRANSITION,
    BATTLES_LIST_TO_HOME_TRANSITION,
]);
