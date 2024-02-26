import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-monster-card-stat',
    templateUrl: './monster-card-stat.component.html',
    styleUrls: ['./monster-card-stat.component.scss']
})

export class MonsterCardStatComponent {
    @Input() public label!: string | null;
    @Input() public stat!: number | null;
}