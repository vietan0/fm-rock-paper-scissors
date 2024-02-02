import { createContext, useReducer } from 'react';

/* info object: {
  stage: 'not-started' | 'player-choose' | 'computer-choose' | 'result';
  choices: {
    player?: 'rock' | 'paper' | 'scissors';
    computer?: 'rock' | 'paper' | 'scissors';
  }
}

 */

export type Stage =
  | 'not-started'
  | 'player-choose'
  | 'computer-choose'
  | 'result';
export type StageAction = { type: 'start' | 'choose' };
export type StageContextType = {
  stage: Stage;
  dispatch: React.Dispatch<StageAction>;
};

function reducer(stage: Stage, action: StageAction) {
  if (action.type === 'start') return 'player-choose';
  if (action.type === 'choose') return 'computer-choose';
  return stage;
}

export const StageContext = createContext<StageContextType>(
  {} as StageContextType,
); /* assert for initiation */

type Props = {
  children?: React.ReactNode;
};
export default function StageProvider({ children }: Props) {
  const [stage, dispatch] = useReducer(reducer, 'not-started');
  return (
    <StageContext.Provider value={{ stage, dispatch }}>
      {children}
    </StageContext.Provider>
  );
}
