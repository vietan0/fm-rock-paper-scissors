import { useContext } from 'react';

import { GameContext } from './GameContext';

export default function Header() {
  const { gameState } = useContext(GameContext);

  return (
    <header className="mx-auto mb-12 flex w-full max-w-[580px] items-center justify-between gap-3 rounded-2xl p-3 outline outline-header-outline xs:px-5 md:scale-[1.2]">
      <h1 className="w-min text-[clamp(1.25rem,_6vw,_2rem)] font-bold uppercase leading-5 [text-shadow:_0_8px_16px_rgb(0_0_0_/_10%)] xs:leading-[0.85] xs:tracking-tight">
        Rock Paper Scissors
      </h1>
      <div
        id="score"
        className="flex w-20 flex-col items-center justify-center self-stretch rounded-lg bg-gradient-to-b from-white to-gray-200 py-2 shadow-xl xs:w-32"
      >
        <p className="text-xs uppercase tracking-widest text-score-text xs:text-sm">
          score
        </p>
        <p className="text-4xl font-bold text-dark-text xs:text-6xl ">
          {gameState.wins}
        </p>
      </div>
    </header>
  );
}
