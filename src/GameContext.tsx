import { createContext, useEffect, useReducer } from 'react';

import getDefaultState from './helper/getDefaultState';
import rockPaperScissorsLogic from './helper/rockPaperScissorsLogic';

export type Step = 'not-started' | 'player-choose' | 'computer-choose';
export type Choice = 'rock' | 'paper' | 'scissors';
export type Result = 'win' | 'lose' | 'draw';
export type GameState = {
  step: Step;
  choices: {
    player?: Choice;
    computer?: Choice;
  };
  result?: Result;
  wins: number;
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
    const newState: GameState = { ...getDefaultState(), step: 'player-choose' };
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
    const result = rockPaperScissorsLogic(
      state.choices.player!,
      state.choices.computer!,
    );
    const newState: GameState = {
      ...state,
      result,
      wins: result === 'win' ? state.wins + 1 : state.wins,
    };
    return newState;
  }
}

export const GameContext = createContext<GameContextType>(
  {} as GameContextType,
); /* assert for initiation */

type Props = {
  children?: React.ReactNode;
};

export default function GameProvider({ children }: Props) {
  const [gameState, dispatch] = useReducer(reducer, undefined, getDefaultState);

  useEffect(() => {
    const history: Array<Result> = localStorage.getItem('history')
      ? JSON.parse(localStorage.getItem('history')!)
      : [];
    if (gameState.result) {
      localStorage.setItem(
        'history',
        JSON.stringify([...history, gameState.result]),
      );
    }
  }, [gameState.result]);

  return (
    <GameContext.Provider value={{ gameState, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}
