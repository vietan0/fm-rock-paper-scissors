import rockIcon from './assets/images/icon-rock.svg';
import paperIcon from './assets/images/icon-paper.svg';
import scissorsIcon from './assets/images/icon-scissors.svg';
import { useContext } from 'react';
import { Choice, GameContext } from './GameContext';

type Props = {
  choice?: Choice;
  interactive?: boolean;
  className?: string;
};

const features: Record<Choice, { color: string; icon: string }> = {
  rock: {
    color: 'from-rock-start to-rock-end',
    icon: rockIcon,
  },
  paper: {
    color: 'from-paper-start to-paper-end',
    icon: paperIcon,
  },
  scissors: {
    color: 'from-scissors-start to-scissors-end',
    icon: scissorsIcon,
  },
};

export default function ChoiceChip({
  choice,
  interactive = false,
  className = '',
}: Props) {
  const { dispatch } = useContext(GameContext);
  const Tag = interactive ? 'button' : 'div';
  return choice ? (
    <Tag
      className={`${features[choice].color} ${interactive ? ' hover:scale-105 active:scale-100' : ''} ${className} grid h-24 w-24 place-content-center rounded-full bg-gradient-to-b shadow-[inset_0_-5px_0_0_rgb(0_0_0_/_20%)] duration-[25ms]`}
      onClick={() => dispatch({ type: 'player-choose', payload: choice })}
    >
      <div className="grid h-[4.25rem] w-[4.25rem] place-content-center rounded-full bg-gradient-to-t from-white to-gray-300 shadow-[inset_0_6px_0_0_rgb(0_0_0_/_10%)]">
        <img src={features[choice].icon} alt={choice} width={34} height={40} />
      </div>
    </Tag>
  ) : (
    // empty circle
    <div
      className={`${className} grid h-24 w-24 place-content-center rounded-full duration-[25ms]`}
    >
      <div className="grid h-[4.25rem] w-[4.25rem] animate-pulse place-content-center rounded-full bg-[hsl(237,_49%,_15%)] shadow-inner"></div>
    </div>
  );
}
