import { API_URL } from '../../constants/env';
import { Battle, Players } from '../../models/interfaces/battle.interface';

const battle = async ({ monster1Id, monster2Id }: Players): Promise<Battle> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
    body: JSON.stringify({ monster1Id, monster2Id }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

export const MonsterServiceExtended = {
  battle,
};
