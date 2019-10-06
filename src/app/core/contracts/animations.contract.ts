export namespace AnimationsContract {
    export const VOID = 'void';

    export namespace Home {
        export const ROOT = 'home';
    }

    export namespace Battles {
        export const LIST = 'battles-list';
        export const ENTRY = 'battles-entry';
    }

    export namespace Transitions {
        export const HOME_TO_BATTLES =
            `${AnimationsContract.Home.ROOT} => ${AnimationsContract.Battles.LIST}`;

        export const BATTLES_LIST_TO_HOME =
            `${AnimationsContract.Battles.LIST} => ${AnimationsContract.Home.ROOT}`;
        export const VOID_TO_HOME =
            `${AnimationsContract.VOID} => ${AnimationsContract.Home.ROOT}`;

        export const BATTLE_TO_BATTLES_LIST =
            `${AnimationsContract.Battles.ENTRY} => ${AnimationsContract.Battles.LIST}`;
        export const BATTLES_LIST_TO_BATTLE =
            `${AnimationsContract.Battles.LIST} => ${AnimationsContract.Battles.ENTRY}`;
    }
}
