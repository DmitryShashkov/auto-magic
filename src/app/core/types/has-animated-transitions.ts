import { Observable } from 'rxjs';

export interface HasAnimatedTransitions {
    animationState: Observable<string>;
    setAnimationState: (nextComponent: Function) => void;
}
