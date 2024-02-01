import Choice from './Choice';
import bgTriangle from './assets/images/bg-triangle.svg';

export default function MainScreen() {
  return (
    <div
      id="triangle-group"
      className="relative w-32 duration-200 xs:scale-125 sm:scale-[1.75]"
    >
      <img src={bgTriangle} alt="" />
      <Choice
        choice="rock"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
      />
      <Choice
        choice="paper"
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
      />
      <Choice
        choice="scissors"
        className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2"
      />
    </div>
  );
}
