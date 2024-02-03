import { useContext, useEffect } from 'react';
import ChoiceChip from './ChoiceChip';
import Header from './Header';
import { GameContext, Result } from './GameContext';
import computerChoose from './computerChoose';

const resultMsg: Record<Result, string> = {
  win: 'You Win',
  lose: 'You Lose',
  draw: 'Draw',
};

export default function ComputerChooseScreen() {
  const { gameState, dispatch } = useContext(GameContext);
  const [computerChoice, setComputerChoice] = useState<Choice | undefined>(
    undefined,
  );

  useEffect(() => {
    setTimeout(() => {
      const choice = computerChoose();
      dispatch({ type: 'computer-choose', payload: choice });
    }, 3000);
  }, []);

  useEffect(() => {
    if (gameState.choices.computer) {
      dispatch({ type: 'calculate' });
    }
  }, [gameState.choices.computer]);

  return (
    <div id="ComputerChooseScreen">
      <Header />
      <main className="h-96">
        <div className="mx-auto grid max-w-[600px] gap-6 xs:grid-cols-[repeat(2,_minmax(140px,_1fr))] sm:gap-24">
          <div className="flex flex-col items-center gap-6 sm:gap-20">
            <p className="text-center uppercase tracking-widest xs:h-16 xs:text-lg">
              You Picked
            </p>
            <ChoiceChip
              choice={gameState.choices.player}
              className="scale-125 sm:scale-[2.5]"
            />
          </div>
          {gameState.result && (
            <div className="h-fit self-end">
              <p className="mb-6 text-center text-5xl font-bold uppercase">
                {resultMsg[gameState.result]}
              </p>
              <button
                onClick={() => {
                  dispatch({ type: 'start' });
                }}
                className="mx-auto block rounded-lg bg-gradient-to-b from-white to-gray-200 px-10 py-3 text-sm uppercase tracking-[.25em] text-dark-text shadow-2xl"
              >
                Play Again
              </button>
            </div>
          )}
          <div className="flex flex-col items-center gap-6 sm:gap-20">
            <p className="text-center uppercase tracking-widest xs:h-16 xs:text-lg">
              The House Picked
            </p>
            <ChoiceChip
              choice={gameState.choices.computer}
              className="scale-125 sm:scale-[2.5]"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
