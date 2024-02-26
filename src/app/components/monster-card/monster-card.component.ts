import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Monster } from 'src/app/interfaces/monster.interface';

@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss'],
})
export class MonsterCardComponent {
  @Input() public monster!: Monster | null;
  @Input() public isSelected: boolean = false;
  @Output() public selected = new EventEmitter();

  handleMonsterClick(monster: Monster | null) {
    this.selected.emit(monster);
  }
}
