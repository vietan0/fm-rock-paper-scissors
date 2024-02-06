import { useReducer, useRef } from 'react';

import closeIcon from './assets/images/icon-close.svg';
import rules from './assets/images/image-rules.svg';

function reducer(state: boolean) {
  return !state;
}

export default function Rules() {
  const [popupIsOpen, dispatch] = useReducer(reducer, false);
  const dialogRef = useRef<HTMLDivElement>(null);

  function closePopup(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!dialogRef.current!.contains(e.target as Node)) {
      dispatch();
    } else {
      e.stopPropagation();
    }
  }

  const dialogAnimation = `${popupIsOpen ? 'bottom-0 xs:scale-100' : '-bottom-full xs:scale-0'} duration-150`;

  return (
    <footer className="fixed bottom-6 left-0 z-10 flex w-full justify-center rounded-full px-3 xs:justify-end xs:px-6">
      <button
        onClick={() => dispatch()}
        className="rounded px-8 py-2 text-sm uppercase tracking-[.25em] outline outline-1 duration-100 hover:bg-white hover:text-dark-text"
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
          className={`${dialogAnimation} absolute left-1/2 h-full w-full -translate-x-1/2  bg-white p-8 pt-6 text-center text-dark-text xs:top-1/2 xs:h-fit xs:w-72 xs:-translate-y-1/2 xs:rounded-xl xs:text-left sm:w-96`}
        >
          <span className="inline-block text-3xl font-bold uppercase">
            Rules
          </span>
          <button
            onClick={() => dispatch()}
            className="absolute bottom-20 right-1/2 translate-x-1/2 rounded p-3 duration-100 hover:bg-black/10 xs:bottom-auto xs:right-8 xs:top-6 xs:translate-x-0"
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
