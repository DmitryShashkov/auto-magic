import { trigger } from '@angular/animations';
import { VOID_TO_HOME_TRANSITION } from './to-home/void-to-home.transition';
import { GAMES_LIST_TO_HOME_TRANSITION } from './to-home/games-list-to-home.transition';
import { HOME_TO_GAMES_LIST_TRANSITION } from './to-games-list/home-to-games-list.transition';

export const routerTransition = trigger('routerTransition', [
    VOID_TO_HOME_TRANSITION,
    HOME_TO_GAMES_LIST_TRANSITION,
    GAMES_LIST_TO_HOME_TRANSITION,
]);
