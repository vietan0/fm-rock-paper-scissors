import { GameState, Result } from '../GameContext';

function calculateWins() {
  const history: Array<Result> = localStorage.getItem('history')
    ? JSON.parse(localStorage.getItem('history')!)
    : [];
  return history.filter((r) => r === 'win').length;
}

export default function getDefaultState(): GameState {
  return {
    step: 'not-started',
    choices: {
      player: undefined,
      computer: undefined,
    },
    result: undefined,
    wins: calculateWins(),
  };
}
