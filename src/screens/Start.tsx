import { useContext } from 'react';

import { GameContext } from '../GameContext';

export default function StartScreen() {
  const { dispatch } = useContext(GameContext);
  function startGame() {
    dispatch({ type: 'start' });
  }
  return (
    <button
      onClick={startGame}
      className="mx-auto block rounded-lg bg-gradient-to-b from-white to-gray-200 px-10 py-3 uppercase tracking-[.25em] text-dark-text shadow-2xl hover:text-blue-600"
    >
      Start Game
    </button>
  );
}
