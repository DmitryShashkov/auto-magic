import { ComponentRef, Inject, Injectable, OnDestroy, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { InjectionService } from './injection.service';
import { map, share } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { LoaderComponent } from '../components/shared/loader/loader.component';

@Injectable({
    providedIn: 'root',
})
export class LoaderService implements OnDestroy {
    private readonly loadingProcesses = new BehaviorSubject<number>(0);
    private readonly subscriptions = new Subscription();

    private readonly loader: ComponentRef<LoaderComponent>;
    public readonly isLoaderShown: Observable<boolean>;

    private readonly pageWrapper: HTMLElement;
    private readonly renderer: Renderer2;

    constructor (
        private readonly injectionService: InjectionService,
        private readonly rendererFactory: RendererFactory2,
        @Inject(DOCUMENT) private readonly document: Document,
    ) {
        this.isLoaderShown = this.loadingProcesses.pipe(
            map((loadingProcessesCount) => loadingProcessesCount > 0),
            share(),
        );

        this.subscriptions.add(
            this.isLoaderShown
                .subscribe((isLoaderShown) => {
                    if (!this.loader) { return; }

                    (isLoaderShown)
                        ? this.loader.instance.show()
                        : this.loader.instance.hide();
                }),
        );

        this.injectionService.setRootViewContainer(this.document.getElementById('loader-container'));
        this.loader = this.injectionService.appendComponent(LoaderComponent);

        this.pageWrapper = this.document.getElementById('page-wrapper');
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }

    public start (): void {
        if (this.loadingProcesses.value === 0) {
            this.renderer.addClass(this.pageWrapper, 'blurred');
        }

        this.loadingProcesses.next(this.loadingProcesses.value + 1);
    }

    public stop (): void {
        this.loadingProcesses.next(this.loadingProcesses.value - 1);

        if (this.loadingProcesses.value === 0) {
            this.renderer.removeClass(this.pageWrapper, 'blurred');
        }
    }

    public ngOnDestroy (): void {
        this.subscriptions.unsubscribe();
    }
}

// todo: show "we're still loading" message when loading taked more than 5s
