import { createReducer } from '@reduxjs/toolkit';
import { Battle } from '../../models/interfaces/battle.interface';
import { Monster } from '../../models/interfaces/monster.interface';
import { setComputerMonster } from './monsters.actions.extended';
import { fetchBattleWins } from './monsters.actions.extended';

interface MonsterState {
  randomMonster: Monster | null;
  winner: Battle | null;
}

const initialState: MonsterState = {
  randomMonster: null,
  winner: null,
};

export const monstersReducerExtended = createReducer(initialState, builder => {
  builder.addCase(setComputerMonster, (state, action) => ({
    ...state,
    randomMonster: action.payload,
  }));

  builder.addCase(fetchBattleWins.pending, state => ({
    ...state,
    winner: null,
  }));

  builder.addCase(fetchBattleWins.rejected, state => ({
    ...state,
    winner: null,
  }));

  builder.addCase(fetchBattleWins.fulfilled, (state, action) => ({
    ...state,
    winner: action.payload,
  }));
});
