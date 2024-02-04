import { useContext } from 'react';
import Header from './Header';
import { GameContext } from './GameContext';

export default function StartScreen() {
  const { dispatch } = useContext(GameContext);
  function startGame() {
    dispatch({ type: 'start' });
  }
  return (
    <div id="StartScreen" className="my-auto h-full">
      <Header />
      <button
        onClick={startGame}
        className="mx-auto block rounded-lg bg-gradient-to-b from-white to-gray-200 px-10 py-3 uppercase tracking-[.25em] text-dark-text shadow-2xl hover:text-blue-600"
      >
        Start Game
      </button>
    </div>
  );
}
