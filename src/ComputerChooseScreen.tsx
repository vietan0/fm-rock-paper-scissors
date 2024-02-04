import { useContext, useEffect } from 'react';
import ChoiceChip from './ChoiceChip';
import Header from './Header';
import { GameContext, Result } from './GameContext';
import computerChoose from './computerChoose';
import Rules from './Rules';

const resultMsg: Record<Result, string> = {
  win: 'You Win',
  lose: 'You Lose',
  draw: 'Draw',
};

export default function ComputerChooseScreen() {
  const { gameState, dispatch } = useContext(GameContext);

  useEffect(() => {
    setTimeout(() => {
      const choice = computerChoose();
      dispatch({ type: 'computer-choose', payload: choice });
    }, 2000);
  }, []);

  useEffect(() => {
    if (gameState.choices.computer) {
      dispatch({ type: 'calculate' });
    }
  }, [gameState.choices.computer]);

  const grid2 =
    'max-w-xl xs:grid-cols-[minmax(150px,_1fr)_0_minmax(150px,_1fr)]';
  const grid3 =
    'max-w-3xl md:gap-x-10 grid-cols-[repeat(2,_minmax(150px,_1fr))] sm:grid-cols-[repeat(3,_minmax(150px,_1fr))]';

  return (
    <div id="ComputerChooseScreen">
      <Header />
      <main className="h-96">
        <div
          className={`${gameState.result ? grid3 : grid2} mx-auto grid items-center justify-center gap-y-14`}
        >
          <div className="flex flex-col items-center gap-6 sm:gap-20">
            <p className="h-12 text-center uppercase tracking-widest xs:text-lg">
              You Picked
            </p>
            <ChoiceChip
              choice={gameState.choices.player}
              winner={gameState.result === 'win'}
              className="scale-125 sm:scale-150 md:scale-[2.5]"
            />
          </div>
          <div
            className={`${gameState.result ? 'order-last col-span-2 scale-100 sm:order-none' : 'scale-0'} h-fit self-end duration-200 sm:col-auto`}
          >
            <p className="mb-3 text-center text-4xl font-bold uppercase sm:mb-6 md:text-5xl">
              {resultMsg[gameState.result!]}
            </p>
            <button
              onClick={() => dispatch({ type: 'start' })}
              className="mx-auto block rounded-lg bg-gradient-to-b from-white to-gray-200 px-10 py-3 text-sm uppercase tracking-[.25em] text-dark-text shadow-2xl hover:text-blue-600"
            >
              Play Again
            </button>
          </div>
          <div className="flex flex-col items-center gap-6 sm:gap-20">
            <p className="h-12 text-center uppercase tracking-widest xs:text-lg">
              The House Picked
            </p>
            <ChoiceChip
              choice={gameState.choices.computer}
              winner={gameState.result === 'lose'}
              className="scale-125 sm:scale-150 md:scale-[2.5]"
            />
          </div>
        </div>
      </main>
      <Rules />
    </div>
  );
}
