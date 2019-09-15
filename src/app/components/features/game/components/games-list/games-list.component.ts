import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'am-games-list',
    templateUrl: './games-list.component.html',
    styleUrls: ['./games-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesListComponent { }
