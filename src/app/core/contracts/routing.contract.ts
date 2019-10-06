export namespace RoutingContract {
    export const ROOT = '';

    export namespace CompleteSignIn {
        export const ROOT = 'complete-sign-in';
    }

    export namespace Battles {
        export const ROOT = 'battles';

        export const PARAM_BATTLE_ID = 'battleId';

        export const LIST = `${RoutingContract.Battles.ROOT}/list`;
        export const ENTRY = `${RoutingContract.Battles.ROOT}/:${RoutingContract.Battles.PARAM_BATTLE_ID}`;

        export const RESOLVE_BATTLE_ENTRY = 'battleEntry';
    }
}
