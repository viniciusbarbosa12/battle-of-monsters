import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MonstersService } from './monsters.service';
import { HttpClient } from '@angular/common/http';
import { BattleResult, Monster } from '../interfaces/monster.interface';
import { of } from 'rxjs';
import { mockMonsters } from '../__mocks__/monsters';

describe('MonstersService', () => {
  let service: MonstersService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MonstersService],
    });
    service = TestBed.inject(MonstersService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the list of monsters different a null', (done) => {
    const response: Monster[] = [];
    jest.spyOn(http, 'get').mockReturnValue(of(response));

    service.getAll().subscribe((response) => {
      expect(response).not.toBeNull();
      done();
    });
  });

  it('should get the battle winner', (done) => {
    const response: BattleResult = mockMonsters.battleWinner;
    const { selectedMonster, selectedRandomMonster } = mockMonsters;
    jest.spyOn(http, 'post').mockReturnValue(of(response));
    
    service.getBattleResult(selectedMonster, selectedRandomMonster)
      .subscribe((response) => {
        expect(response).toEqual({
          winner: {
            id: 'monster-2',
            name: 'Old Shark',
            attack: 50,
            defense: 20,
            hp: 80,
            speed: 90,
            type: 'Type',
            imageUrl:
              'https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/old-shark.png',
          },
          tie: false
        });

        done();
      });
  });

  it('should get the list of monsters with data', (done) => {
    const response: Monster[] = mockMonsters.monsters;
    jest.spyOn(http, 'get').mockReturnValue(of(response));

    service.getAll().subscribe((response) => {
      expect(response).toEqual([
        {
          id: 'monster-1',
          name: 'Dead Unicorn',
          attack: 60,
          defense: 40,
          hp: 10,
          speed: 80,
          type: 'Type',
          imageUrl:
            'https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/dead-unicorn.png',
        },
        {
          id: 'monster-2',
          name: 'Old Shark',
          attack: 50,
          defense: 20,
          hp: 80,
          speed: 90,
          type: 'Type',
          imageUrl:
            'https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/old-shark.png',
        },
        {
          id: 'monster-3',
          name: 'Red Dragon',
          attack: 90,
          defense: 80,
          hp: 90,
          speed: 70,
          type: 'Type',
          imageUrl:
            'https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/red-dragon.png',
        },
        {
          id: 'monster-4',
          name: 'Robot Bear',
          attack: 50,
          defense: 40,
          hp: 80,
          speed: 60,
          type: 'Type',
          imageUrl:
            'https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/robot-bear.png',
        },
        {
          id: 'monster-5',
          name: 'Angry Snake',
          attack: 80,
          defense: 20,
          hp: 70,
          speed: 80,
          type: 'Type',
          imageUrl:
            'https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/angry-snake.png',
        },
      ]);
      done();
    });
  });
});
