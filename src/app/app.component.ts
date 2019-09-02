import { Component, ChangeDetectionStrategy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { LoaderService } from './services/loader.service';

@Component({
    selector: 'am-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    constructor (
        private readonly router: Router,
        private readonly loaderService: LoaderService,
        @Inject(PLATFORM_ID) private readonly platformId: Object,
    ) { }

    public ngOnInit (): void {
        if (isPlatformBrowser(this.platformId)) {
            this.router.events.subscribe((event) => {
                if (event instanceof NavigationStart) {
                    this.loaderService.start();
                }
                if ((event instanceof NavigationEnd) ||
                    (event instanceof NavigationCancel) ||
                    (event instanceof NavigationError)
                ) {
                    this.loaderService.stop();
                }
            });
        }
    }
}
