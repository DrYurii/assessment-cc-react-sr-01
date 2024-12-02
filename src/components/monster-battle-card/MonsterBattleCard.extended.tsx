import React from 'react';

import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  BattleMonsterImage,
  MonsterStats,
  ProgressBar,
  StatLine,
} from './MonsterBattleCard.extended.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  return (
    <BattleMonsterCard centralized={!monster}>
      <BattleMonsterImage src={monster?.imageUrl} />
      <BattleMonsterTitle>{monster?.name || title!}</BattleMonsterTitle>
      {monster && (
        <MonsterStats>
          <StatLine>HP</StatLine>
          <ProgressBar value={monster.hp} variant="determinate" />
          <StatLine>Attack</StatLine>
          <ProgressBar value={monster.attack} variant="determinate" />
          <StatLine>Defense</StatLine>
          <ProgressBar value={monster.defense} variant="determinate" />
          <StatLine>Speed</StatLine>
          <ProgressBar value={monster.speed} variant="determinate" />
        </MonsterStats>
      )}
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
