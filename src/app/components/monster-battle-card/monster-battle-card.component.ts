import { Component, Input } from '@angular/core';
import { Monster } from 'src/app/interfaces/monster.interface';

@Component({
  selector: 'app-monster-battle-card',
  templateUrl: './monster-battle-card.component.html',
  styleUrls: ['./monster-battle-card.component.scss'],
})
export class MonsterBattleCardComponent {
  @Input() public monster!: Monster | null;
  @Input() public title: string | null = null;
}
