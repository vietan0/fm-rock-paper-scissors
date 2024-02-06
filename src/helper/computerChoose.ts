import { Choice } from '../GameContext';

export default function computerChoose(): Choice {
  const x = Math.random();
  if (x < 1 / 3) return 'rock';
  else if (x < 2 / 3) return 'paper';
  return 'scissors';
}
