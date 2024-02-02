import { useContext } from 'react';
import PlayerChooseScreen from './PlayerChooseScreen';
import StartScreen from './StartScreen';
import { StageContext } from './StageContext';

export default function App() {
  const { stage } = useContext(StageContext);
  return (
    <div
      id="App"
      className="flex min-h-screen flex-col justify-center bg-bg-gradient px-3 pb-6 pt-12 text-white xs:px-6"
    >
      {stage === 'not-started' ? <StartScreen /> : <PlayerChooseScreen />}
    </div>
  );
}
