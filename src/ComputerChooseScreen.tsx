import { useContext, useEffect, useState } from 'react';
import ChoiceChip from './ChoiceChip';
import Header from './Header';
import { Choice, GameContext } from './GameContext';
import computerChoose from './computerChoose';

type Props = {};
export default function ComputerChooseScreen({}: Props) {
  const { gameState, dispatch } = useContext(GameContext);
  const [computerChoice, setComputerChoice] = useState<Choice | undefined>(
    undefined,
  );

  useEffect(() => {
    setTimeout(() => {
      console.log('logging');
      setComputerChoice(() => {
        const choice = computerChoose();
        dispatch({ type: 'computer-choose', payload: choice });
        return choice;
      });
    }, 3000);
  }, []);

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
              choice={gameState.choices.player!}
              className="scale-125 sm:scale-[2.5]"
            />
          </div>
          <div className="flex flex-col items-center gap-6 sm:gap-20">
            <p className="text-center uppercase tracking-widest xs:h-16 xs:text-lg">
              The House Picked
            </p>
            <ChoiceChip
              choice={computerChoice}
              className="scale-125 sm:scale-[2.5]"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
