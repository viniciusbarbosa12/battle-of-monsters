import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { MonsterBattleCardComponent } from '../../components/monster-battle-card/monster-battle-card.component';
import { MonsterListComponent } from '../../components/monster-list/monster-list.component';
import { WinnerDisplayComponent } from '../../components/winner-display/winner-display.component';
import { BattleResult, Monster } from '../../interfaces/monster.interface';
import { MonstersService } from '../../services/monsters.service';
import { mockMonsters } from '../../__mocks__/monsters';
import { BattleOfMonstersComponent } from './battle-of-monsters.component';
import { By } from '@angular/platform-browser';

describe('BattleOfMonstersComponent', () => {
  let component: BattleOfMonstersComponent;
  let fixture: ComponentFixture<BattleOfMonstersComponent>;
  let monsterService: MonstersService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        BattleOfMonstersComponent,
        MonsterListComponent,
        WinnerDisplayComponent,
        MonsterBattleCardComponent,
      ],
      providers: [MonstersService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleOfMonstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    monsterService = TestBed.inject(MonstersService);

    const response: Monster[] = mockMonsters.monsters;
    const battleResult: BattleResult = mockMonsters.battleWinner;
    jest.spyOn(monsterService, 'getAll').mockReturnValue(of(response));
    jest.spyOn(monsterService, 'getBattleResult').mockReturnValue(of(battleResult));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all list monsters', fakeAsync(() => {
    component.ngOnInit();
    tick();
    expect(component.monsters.length).toBe(5);
  }));

  it('should show the main page', () => {
    expect(
      fixture.debugElement.query(By.css('span')).properties['innerHTML']
    ).toEqual('Battle of Monsters');
  });

  it('should select a monster', fakeAsync(() => {
    component.monsterSelected(mockMonsters.selectedMonster);
    fixture.detectChanges();
    tick();
    const buttonStartBattle = fixture.nativeElement.querySelector('button');
    expect(buttonStartBattle.disabled).toBeFalsy();
  }));

  it('should unselect a monster', () => {
    component.monsterSelected(null);
    const buttonStartBattle = fixture.nativeElement.querySelector('button');
    expect(buttonStartBattle.disabled).toBeTruthy();
  });

  it('should select a computer monster', fakeAsync(() => {
    component.ngOnInit();
    tick();
    component.monsterSelected(mockMonsters.selectedMonster);
    expect(component.computer).toBeTruthy();
  }));

  it('should unselect a computer monster', fakeAsync(() => {
    component.ngOnInit();
    tick();
    component.monsterSelected(mockMonsters.selectedMonster);
    component.monsterSelected(null);
    expect(component.computer).toBeFalsy();
  }));

  it('should have a winner', fakeAsync(() => {
    component.player = mockMonsters.selectedMonster;
    component.computer = mockMonsters.selectedRandomMonster;
    component.battleStarted();
    tick();
    expect(component.winnerMessage).toEqual('Old Shark');
  }));
});
