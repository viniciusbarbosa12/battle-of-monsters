import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BattleResult, BattleResultRequest, Monster } from '../interfaces/monster.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class MonstersService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Monster[]> {
    return this.http.get<Monster[]>(`${environment.API_URL}/monsters`);
  }

  getBattleResult(playerMonster: Monster, computerMonster: Monster): Observable<BattleResult> {
    const requestBody: BattleResultRequest = {
      monster1Id: playerMonster.id,
      monster2Id: computerMonster.id,
    };

    return this.http.post<BattleResult>(`${environment.API_URL}/battle`, requestBody);
  }
}
