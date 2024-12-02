import {
  fetchBattleWins,
  setComputerMonster,
} from './monsters.actions.extended';
import { monstersReducerExtended } from './monsters.reducer.extended';
import monstersData from '../../../data/monsters.json';

describe('Monsters Reducer', () => {
  it('should change the battle on action fulfilled', () => {
    const { monsters } = monstersData;
    const action = {
      type: fetchBattleWins.fulfilled,
      payload: {
        winner: monsters[1],
        tie: false,
      },
    };
    const state = monstersReducerExtended(
      {
        randomMonster: monsters[1],
        winner: null,
      },
      action,
    );
    expect(state).not.toEqual(
      expect.objectContaining({
        randomMonster: monsters[1],
        winner: null,
      }),
    );
  });

  it('should add the random monster to the state', () => {
    const { monsters } = monstersData;
    const action = {
      type: setComputerMonster,
      payload: monsters[1],
    };
    const state = monstersReducerExtended(
      {
        randomMonster: null,
        winner: null,
      },
      action,
    );
    expect(state).toEqual(
      expect.objectContaining({
        randomMonster: monsters[1],
        winner: null,
      }),
    );
  });

  it('should add the winner to the state', () => {
    const { monsters } = monstersData;
    const action = {
      type: fetchBattleWins.fulfilled,
      payload: {
        winner: monsters[1],
        tie: false,
      },
    };
    const state = monstersReducerExtended(
      {
        randomMonster: monsters[1],
        winner: null,
      },
      action,
    );
    expect(state).toEqual(
      expect.objectContaining({
        randomMonster: monsters[1],
        winner: {
          winner: monsters[1],
          tie: false,
        },
      }),
    );
  });
});
