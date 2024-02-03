import { Choice } from './GameContext';

export default function computerChoose(): Choice {
  const x = Math.random();
  if (x < 0.33) return 'rock';
  if (x >= 0.33 && x < 0.66) return 'paper';
  return 'scissors';
}
