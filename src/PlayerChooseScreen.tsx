import ChoiceChip from './ChoiceChip';
import Header from './Header';
import Rules from './Rules';
import bgTriangle from './assets/images/bg-triangle.svg';

export default function PlayerChooseScreen() {
  return (
    <div id="PlayerChooseScreen">
      <Header />
      <main className="grid h-96 place-content-center">
        <div
          id="triangle-group"
          className="relative w-32 duration-200 xs:scale-125 sm:scale-[1.75]"
        >
          <img src={bgTriangle} alt="" />
          <ChoiceChip
            choice="rock"
            interactive
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
          />
          <ChoiceChip
            choice="paper"
            interactive
            className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
          />
          <ChoiceChip
            choice="scissors"
            interactive
            className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2"
          />
        </div>
      </main>
      <Rules />
    </div>
  );
}
