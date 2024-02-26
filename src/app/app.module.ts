import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonsterBattleCardComponent } from './components/monster-battle-card/monster-battle-card.component';
import { WinnerDisplayComponent } from './components/winner-display/winner-display.component';
import { MonsterCardComponent } from './components/monster-card/monster-card.component';
import { MonsterListComponent } from './components/monster-list/monster-list.component';
import { BattleOfMonstersComponent } from './views/battle-of-monsters/battle-of-monsters.component';
import { MonstersService } from './services/monsters.service';

import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MonsterCardStatComponent } from './components/monster-card-stat/monster-card-stat.component';

const MaterialModules = [
  MatCardModule,
  MatProgressBarModule,
  MatButtonModule,
  MatDividerModule,
];
@NgModule({
  declarations: [
    AppComponent,
    MonsterBattleCardComponent,
    MonsterCardStatComponent,
    WinnerDisplayComponent,
    MonsterCardComponent,
    MonsterListComponent,
    BattleOfMonstersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MaterialModules,
  ],
  providers: [MonstersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
