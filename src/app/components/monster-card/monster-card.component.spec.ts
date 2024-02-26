import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { mockMonsters } from '../../__mocks__/monsters';
import { MonsterCardComponent } from './monster-card.component';

describe('MonsterCardComponent', () => {
  let component: MonsterCardComponent;
  let fixture: ComponentFixture<MonsterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonsterCardComponent],
      imports: [CommonModule, MatCardModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MonsterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show the card with its attributes', () => {
    component.monster = mockMonsters.selectedMonster;
    component.isSelected = false;
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('p')).properties['innerHTML']
    ).toEqual('Dead Unicorn');
    expect(
      fixture.debugElement.query(By.css('img')).properties['src']
    ).toContain(mockMonsters.selectedMonster.imageUrl);
  });

  it('should select a monster', fakeAsync(() => {
    const spy = jest.spyOn(component.selected, 'emit');
    component.monster = mockMonsters.selectedMonster;
    component.isSelected = true;
    component.handleMonsterClick(mockMonsters.selectedMonster);
    tick();
    void expect(spy).toHaveBeenCalled();
  }));
});
