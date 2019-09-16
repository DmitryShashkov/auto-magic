import 'reflect-metadata';
import { MetaDataContract } from '../contracts/meta-data.contract';

// tslint:disable-next-line:function-name
export function AnimationState (state: string): Function {
    return function (constructor: Function) : void {
        Reflect.set(constructor, MetaDataContract.ANIMATION_STATE, state);
    };
}
