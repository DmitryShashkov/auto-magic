export namespace RoutingContract {
    export const ROOT = '';

    export namespace CompleteSignIn {
        export const ROOT = 'complete-sign-in';
    }

    export namespace Battles {
        export const ROOT = 'battles';
        export const LIST = 'list';

        export const BATTLE_ID = 'battleId';
        export const PARAM_BATTLE_ID = ':battleId';

        export const RESOLVE_BATTLE_ENTRY = 'battleEntry';
    }
}
