import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { MonsterBattleCard } from './MonsterBattleCard.extended';

import monstersData from '../../../data/monsters.json';

describe('MonsterBattleCardExtended', () => {
  it('renders the monster card correctly with a monster', () => {
    const { monsters } = monstersData;
    console.log(monsters[0]);
    render(<MonsterBattleCard monster={monsters[0]} />);

    const titleElement = screen.getByText('Dead Unicorn');
    expect(titleElement).toBeInTheDocument();
  });
});
