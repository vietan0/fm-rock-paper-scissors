import { useContext } from 'react';
import Header from './Header';
import { StageContext } from './StageContext';

export default function StartScreen() {
  const { dispatch } = useContext(StageContext);
  function startGame() {
    dispatch({ type: 'start' });
  }
  return (
    <div id="StartScreen" className="h-full">
      <Header />
      <button
        onClick={startGame}
        className="mx-auto block rounded-lg bg-gradient-to-b from-white to-gray-200 px-10 py-3 uppercase tracking-[.25em] text-dark-text"
      >
        Start Game
      </button>
    </div>
  );
}
