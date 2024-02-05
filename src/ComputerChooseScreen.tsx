import { useContext, useEffect } from 'react';
import ChoiceChip from './ChoiceChip';
import Header from './Header';
import { GameContext, Result } from './GameContext';
import Rules from './Rules';

const resultMsg: Record<Result, string> = {
  win: 'You Win',
  lose: 'You Lose',
  draw: 'Draw',
};

export default function ComputerChooseScreen() {
  const { gameState, dispatch } = useContext(GameContext);

  useEffect(() => {
    if (gameState.choices.computer) {
      setTimeout(() => {
        dispatch({ type: 'calculate' });
      }, 500);
    }
  }, [gameState.choices.computer]);

  return (
    <div id="ComputerChooseScreen">
      <Header />
      <main className="h-96">
        <div
          className={`${gameState.result ? 'gap-3 xs:gap-0 sm:gap-64' : 'gap-3 xs:gap-0'} relative mx-auto flex max-w-3xl justify-center duration-200`}
        >
          <div
            className={`${gameState.result === 'lose' ? 'z-10' : ''} flex max-w-72 flex-grow basis-1/4 flex-col items-center gap-6 sm:gap-14 md:gap-20`}
          >
            <p className="z-10 h-12 text-center uppercase tracking-widest xs:text-lg">
              You Picked
            </p>
            <ChoiceChip
              choice={gameState.choices.player}
              winner={gameState.result === 'win'}
              className="relative xs:scale-125 sm:scale-[1.75] md:scale-[2.5]"
            />
          </div>
          <div className="flex max-w-72 flex-grow basis-1/4 flex-col items-center gap-6 sm:gap-14 md:gap-20">
            <p className="z-10 h-12 text-center uppercase tracking-widest xs:text-lg">
              The House Picked
            </p>
            <ChoiceChip
              choice={gameState.choices.computer}
              winner={gameState.result === 'lose'}
              className="relative xs:scale-125 sm:scale-[1.75] md:scale-[2.5]"
            />
          </div>

          <div
            className={`${gameState.result ? 'scale-100' : 'scale-0'} absolute -bottom-[calc(10rem-5vw)] left-1/2 z-10 h-fit -translate-x-1/2 transition-transform delay-150 duration-200 sm:bottom-0`}
          >
            <p className="mb-3 whitespace-nowrap text-center text-4xl font-bold uppercase sm:mb-4 md:mb-6 md:text-5xl">
              {resultMsg[gameState.result!]}
            </p>
            <button
              onClick={() => dispatch({ type: 'start' })}
              className="mx-auto block rounded-lg bg-gradient-to-b from-white to-gray-200 px-10 py-3 text-sm uppercase tracking-[.25em] text-dark-text shadow-2xl hover:text-blue-600"
            >
              Play Again
            </button>
          </div>
        </div>
      </main>
      <Rules />
    </div>
  );
}
