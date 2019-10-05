import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'am-battles-entry',
    templateUrl: './battles-entry.component.html',
    styleUrls: ['./battles-entry.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BattlesEntryComponent {
    constructor (
        private readonly activatedRoute: ActivatedRoute,
    ) {
        this.activatedRoute.data.subscribe(console.log);
    }
}
