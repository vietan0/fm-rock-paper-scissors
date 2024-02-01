import { useReducer, useRef } from 'react';
import rules from './assets/images/image-rules.svg';
import closeIcon from './assets/images/icon-close.svg';

function reducer(state: boolean, _action: { type: 'click' }) {
  return !state;
}

export default function Rules() {
  const [popupIsOpen, dispatch] = useReducer(reducer, false);
  const dialogRef = useRef<HTMLDivElement>(null);

  function closePopup(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!dialogRef.current!.contains(e.target as Node)) {
      dispatch({ type: 'click' });
    } else {
      e.stopPropagation();
    }
  }

  const dialogAnimation = `${popupIsOpen ? 'bottom-0 xs:scale-100' : '-bottom-full xs:scale-0'} duration-150`;

  return (
    <footer className="fixed bottom-6 right-3 xs:right-6">
      <button
        onClick={() => dispatch({ type: 'click' })}
        className="rounded px-8 py-2 text-sm font-bold uppercase tracking-widest outline outline-1 duration-100 hover:bg-white hover:text-dark-text"
      >
        Rules
      </button>
      <div
        id="backdrop"
        onClick={closePopup}
        className={`${popupIsOpen ? 'visible' : 'invisible'} fixed left-0 top-0 h-screen w-screen bg-black/40`}
      >
        <div
          id="dialog"
          ref={dialogRef}
          className={`${dialogAnimation} absolute left-1/2 h-5/6 w-full -translate-x-1/2  rounded-t-xl bg-white p-8 pt-6 text-center text-dark-text xs:top-1/2 xs:h-fit xs:w-96 xs:-translate-y-1/2 xs:rounded-xl xs:text-left`}
        >
          <span className="inline-block text-3xl font-bold uppercase">
            Rules
          </span>
          <button
            onClick={() => dispatch({ type: 'click' })}
            className="absolute bottom-12 right-1/2 translate-x-1/2 rounded p-3 duration-100 hover:bg-black/10 xs:bottom-auto xs:right-8 xs:top-6 xs:translate-x-0"
          >
            <img src={closeIcon} alt="" />
          </button>
          <img
            src={rules}
            alt="rules"
            className="mx-auto mt-24 min-w-44 xs:mt-8"
            width={304}
            height={270}
          />
        </div>
      </div>
    </footer>
  );
}
