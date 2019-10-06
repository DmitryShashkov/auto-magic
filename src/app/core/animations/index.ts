import { trigger } from '@angular/animations';
import { VOID_TO_HOME_TRANSITION } from './to-home/void-to-home.transition';
import { HOME_TO_BATTLES_LIST_TRANSITION } from './to-battles-list/home-to-battles-list.transition';
import { BATTLES_LIST_TO_HOME_TRANSITION } from './to-home/battles-list-to-home.transition';
import { BATTLES_LIST_TO_BATTLE_TRANSITION } from './to-battles-entry/battles-list-to-battle.transition';
import { BATTLE_TO_BATTLES_LIST_TRANSITION } from './to-battles-list/battle-to-battles-list.transition';

export const routerTransition = trigger('routerTransition', [
    VOID_TO_HOME_TRANSITION,
    HOME_TO_BATTLES_LIST_TRANSITION,
    BATTLES_LIST_TO_HOME_TRANSITION,
    BATTLES_LIST_TO_BATTLE_TRANSITION,
    BATTLE_TO_BATTLES_LIST_TRANSITION,
]);
