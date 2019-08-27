import { Directive, ElementRef, Input, OnChanges, AfterViewInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { PROGRESSIVE_IMAGE_LOADER_DATA } from "./progressive-image.loader-data";

@Directive({
    selector: '[progressiveImage]'
})
export class ProgressiveImageDirective implements OnChanges, AfterViewInit {
    @Input() public width: number = 0;
    @Input() public height: number = 0;

    private backgroundColor: string = '#eee';

    private get element (): HTMLElement {
        return this.elementRef.nativeElement;
    }

    constructor (
        private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(DOCUMENT) private readonly document: Document,
    ) { }

    public ngOnChanges (): void {
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
    }

    public ngAfterViewInit (): void {
        this.element.style.backgroundColor = this.backgroundColor;
        this.element.style.position = 'relative';

        const spinnerLayer: HTMLDivElement = this.document.createElement('div');
        spinnerLayer.style.width = '32px';
        spinnerLayer.style.height = '32px';
        spinnerLayer.style.backgroundImage = `url(${PROGRESSIVE_IMAGE_LOADER_DATA})`;
        spinnerLayer.style.backgroundRepeat = 'no-repeat';

        this.element.appendChild(spinnerLayer);
    }
}
