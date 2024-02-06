import { Choice, Result } from '../GameContext';

export default function rockPaperScissorsLogic(
  playerChoice: Choice,
  computerChoice: Choice,
): Result {
  if (playerChoice === computerChoice) return 'draw';
  if (
    (playerChoice === 'rock' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'rock')
  )
    return 'lose';
  return 'win';
}
