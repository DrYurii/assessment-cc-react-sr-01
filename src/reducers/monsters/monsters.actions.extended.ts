import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Battle, Players } from '../../models/interfaces/battle.interface';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterServiceExtended } from './monsters.service.extended';

export const fetchBattleWins = createAsyncThunk<Battle, Players>(
  'monsters/fetchBattleWins',
  async ({ monster1Id, monster2Id }): Promise<Battle> => {
    const result = await MonsterServiceExtended.battle({
      monster1Id,
      monster2Id,
    });
    console.log(result);
    return result;
  },
);

export const setComputerMonster = createAction<Monster>(
  'monsters/setComputerMonster',
);
