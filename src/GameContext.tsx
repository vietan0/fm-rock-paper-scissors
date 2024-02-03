import { createContext, useReducer } from 'react';
import rockPaperScissorsLogic from './rockPaperScissorsLogic';

export type Step =
  | 'not-started'
  | 'player-choose'
  | 'computer-choose'
  | 'finished';
export type Choice = 'rock' | 'paper' | 'scissors';
export type Result = 'win' | 'lose' | 'draw';
export type GameState = {
  step: Step;
  choices: {
    player?: Choice;
    computer?: Choice;
  };
  result?: Result;
};
export type GameAction =
  | { type: 'start' }
  | { type: 'player-choose'; payload: Choice }
  | { type: 'computer-choose'; payload: Choice }
  | { type: 'calculate' };
export type GameContextType = {
  gameState: GameState;
  dispatch: React.Dispatch<GameAction>;
};

function reducer(state: GameState, action: GameAction) {
  if (action.type === 'start') {
    const newState: GameState = { ...defaultState, step: 'player-choose' };
    return newState;
  } else if (action.type === 'player-choose') {
    const newState: GameState = {
      ...state,
      step: 'computer-choose',
      choices: {
        ...state.choices,
        player: action.payload,
      },
    };
    return newState;
  } else if (action.type === 'computer-choose') {
    const newState: GameState = {
      ...state,
      choices: {
        ...state.choices,
        computer: action.payload,
      },
    };
    return newState;
  } else {
    // action.type is definitely 'calculate'
    const newState: GameState = {
      ...state,
      result: rockPaperScissorsLogic(
        state.choices.player!,
        state.choices.computer!,
      ),
    };
    return newState;
  }
}

const defaultState: GameState = {
  step: 'not-started',
  choices: {
    player: undefined,
    computer: undefined,
  },
  result: undefined,
};
export const GameContext = createContext<GameContextType>(
  {} as GameContextType,
); /* assert for initiation */

type Props = {
  children?: React.ReactNode;
};

export default function GameProvider({ children }: Props) {
  const [stage, dispatch] = useReducer(reducer, defaultState);
  return (
    <GameContext.Provider value={{ gameState: stage, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}
