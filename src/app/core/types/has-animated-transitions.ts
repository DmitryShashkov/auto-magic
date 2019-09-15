import { RouterOutlet } from '@angular/router';

export interface HasAnimatedTransitions {
    getAnimationState: (outlet: RouterOutlet) => string;
}
