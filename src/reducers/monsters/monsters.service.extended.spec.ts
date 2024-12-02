import { MonsterServiceExtended } from './monsters.service.extended';
import { API_URL } from '../../constants/env';
import monstersData from '../../../data/monsters.json';

describe('Monsters Service Extended', () => {
  it('should get the winner of the battle of monsters', async () => {
    const { monsters } = monstersData;
    jest
      .spyOn(MonsterServiceExtended, 'battle')
      .mockResolvedValue({ winner: monsters[4], tie: false });
    const response = await MonsterServiceExtended.battle({
      monster1Id: monsters[0].id,
      monster2Id: monsters[4].id,
    });
    expect(response).toEqual({ winner: monsters[4], tie: false });
  });
});
