import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimationsContract } from '../core/contracts/animations.contract';

@Injectable({
    providedIn: 'root',
})
export class AnimationStateService {
    private readonly state: BehaviorSubject<string> = new BehaviorSubject(AnimationsContract.VOID);

    public get currentState (): Observable<string> {
        return this.state.asObservable();
    }

    public setState (newState: string): void {
        this.state.next(newState);
    }
}
