import { Children } from "react";

export function Sidebar({ children, isOpen, onClickClose }) {
  return (
    <div>
      <div
        className={`overflow-y-auto dark:bg-night w-full md:w-[50%] lg:w-[35%] h-full p-5 bg-white fixed top-0 right-0 z-50 transition duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClickClose}
          className="absolute dark:text-white top-4 right-4 p-2 text-black font-bold"
        >
          X
        </button>
        {children}
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50" />
      )}
    </div>
  );
}
