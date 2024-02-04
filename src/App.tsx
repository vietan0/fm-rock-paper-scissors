import { useContext } from 'react';
import PlayerChooseScreen from './PlayerChooseScreen';
import StartScreen from './StartScreen';
import { GameContext } from './GameContext';
import ComputerChooseScreen from './ComputerChooseScreen';

export default function App() {
  const { gameState } = useContext(GameContext);
  return (
    <div
      id="App"
      className="flex min-h-screen flex-col overflow-hidden bg-bg-gradient px-3 pb-6 pt-12 text-white xs:justify-center xs:px-6"
    >
      {gameState.step === 'not-started' ? (
        <StartScreen />
      ) : gameState.step === 'player-choose' ? (
        <PlayerChooseScreen />
      ) : (
        <ComputerChooseScreen />
      )}
    </div>
  );
}
