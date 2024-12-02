import { RootState } from '../../app/store';

export const getRandomMonster = (state: RootState) => {
  const { monsters } = state.monsters;
  const rand = Math.floor(Math.random() * monsters.length);
  return monsters[rand];
};

export const selectWinner = (state: RootState) => state.monstersExtended.winner;
export const selectRandomMonster = (state: RootState) =>
  state.monstersExtended.randomMonster;
