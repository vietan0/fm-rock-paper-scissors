import { useContext } from 'react';

import { GameContext } from './GameContext';
import Header from './Header';
import Rules from './Rules';
import ComputerChooseScreen from './screens/ComputerChoose';
import PlayerChooseScreen from './screens/PlayerChoose';
import StartScreen from './screens/Start';

export default function App() {
  const {
    gameState: { step },
  } = useContext(GameContext);
  return (
    <div id="App" className="overflow-hidden bg-bg-gradient text-white">
      <div
        className={`${step === 'not-started' ? 'grid content-center' : ''} relative mx-auto min-h-screen max-w-screen-xl px-3 pt-12 xs:px-6`}
      >
        <Header />
        <main className={step === 'not-started' ? '' : 'h-96'}>
          <h1 className="sr-only">
            Rock, Paper, Scissors - Frontend Mentor Challenge - Solution by Viet
            An
          </h1>
          {step === 'not-started' ? (
            <StartScreen />
          ) : step === 'player-choose' ? (
            <PlayerChooseScreen />
          ) : (
            <ComputerChooseScreen />
          )}
        </main>
        <Rules />
      </div>
    </div>
  );
}
