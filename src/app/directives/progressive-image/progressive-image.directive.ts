import { Directive, ElementRef, Input, OnChanges, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PROGRESSIVE_IMAGE_LOADER_DATA } from './progressive-image.loader-data';
import { Subject, combineLatest } from 'rxjs';
import { first } from 'rxjs/operators';

@Directive({
    selector: '[progressiveImage]',
})
export class ProgressiveImageDirective implements OnChanges, AfterViewInit {
    @Input() public width: number = 0;
    @Input() public height: number = 0;
    @Input() public source: string;

    private get element (): HTMLElement {
        return this.elementRef.nativeElement;
    }

    private sourceInitialized: Subject<boolean> = new Subject<boolean>();
    private viewInitialized: Subject<boolean> = new Subject<boolean>();

    private static get isNativeLazyLoadingSupported (): boolean {
        return 'loading' in HTMLImageElement.prototype;
    }

    constructor (
        private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(DOCUMENT) private readonly document: Document,
    ) {
        combineLatest(this.sourceInitialized, this.viewInitialized)
            .pipe(first())
            .subscribe(this.injectImage.bind(this));
    }

    public ngOnChanges (): void {
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        if (this.source) {
            this.sourceInitialized.next(true);
        }
    }

    public ngAfterViewInit (): void {
        this.element.style.position = 'relative';

        const spinnerLayer: HTMLDivElement = this.document.createElement('div');

        spinnerLayer.style.width = '40px';
        spinnerLayer.style.height = '40px';
        spinnerLayer.style.position = 'absolute';
        spinnerLayer.style.top = '50%';
        spinnerLayer.style.left  = '50%';
        spinnerLayer.style.marginTop = '-20px';
        spinnerLayer.style.marginLeft = '-20px';
        spinnerLayer.style.animation = 'rotation 1.5s infinite linear';

        spinnerLayer.innerHTML = PROGRESSIVE_IMAGE_LOADER_DATA;

        this.element.appendChild(spinnerLayer);

        this.viewInitialized.next(true);
    }

    private injectImage (): void {
        const imageLayer: HTMLImageElement = this.document.createElement('img');

        if (ProgressiveImageDirective.isNativeLazyLoadingSupported) {
            const imageLoadingAttr: Attr = this.document.createAttribute('loading');
            imageLoadingAttr.value = 'lazy';

            imageLayer.src = this.source;
            imageLayer.attributes.setNamedItem(imageLoadingAttr);
        } else {
            const dataSrcAttribute: Attr = this.document.createAttribute('data-src');
            dataSrcAttribute.value = this.source;

            imageLayer.attributes.setNamedItem(dataSrcAttribute);
            imageLayer.classList.add('lazyload');
        }

        imageLayer.style.width = '100%';
        imageLayer.style.height = '100%';
        imageLayer.style.objectFit = 'cover';
        imageLayer.style.objectPosition = 'center';
        imageLayer.style.position = 'relative';

        this.element.appendChild(imageLayer);
    }
}
