import { Component, OnInit } from '@angular/core';
import { BattleResult, Monster } from '../../interfaces/monster.interface';
import { MonstersService } from '../../services/monsters.service';

@Component({
  selector: 'app-battle-of-monsters',
  templateUrl: './battle-of-monsters.component.html',
  styleUrls: ['./battle-of-monsters.component.scss'],
})
export class BattleOfMonstersComponent implements OnInit {
  public player!: Monster | null;
  public computer!: Monster | null;
  public monsters: Monster[] = [];
  public winnerMessage: string | null = null;

  constructor(private monsterService: MonstersService) {}

  ngOnInit(): void {
    this.monsterService.getAll().subscribe((res) => {
      this.monsters = res;
    });
  }

  monsterSelected(monster: Monster | null): void {
    this.player = monster;
    this.computer = monster ? this.getComputerMonster() : null;
  }

  getComputerMonster(): Monster {
    const randomIndex = Math.floor(Math.random() * this.monsters.length);
    return this.monsters[randomIndex];
  }

  battleStarted(): void {
    this.monsterService.getBattleResult(this.player!, this.computer!)
      .subscribe((res: BattleResult) => {
        if (res.tie) {
          this.winnerMessage = null;
          return;
        }

        this.winnerMessage = res.winner.name;
      });
  }
}
