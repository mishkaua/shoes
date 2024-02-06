import { HiOutlineShoppingCart } from "react-icons/hi";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
const MENUS = ["Home", "About", "Services", "Pricing", "Contact"];

export function Navbar() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="flex flex-wrap justify-between z-10 relative">
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>

      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="lg:hidden focus:ring-2 focus:ring-gray-200 rounded-lg hover:bg-gray-100"
      >
        <RxHamburgerMenu size={25} />
      </button>

      <div
        className={`${!isMobileMenuShown && "hidden"} w-full lg:block lg:w-auto`}
      >
        <ul className="lg: space-x-8 bg-gray-50 lg: bg-transparent flex flex-col lg:flex-row text-lg border border-gray-100 lg: border-none rounded-lg p-4">
          {MENUS.map((menu, i) => {
            return (
              <li
                className={`py-2 px-3 rounded lg:bg-transparent lg:hover:text-blue-500 hover:bg-gray-100 cursor-pointer
                ${(i == 3 || i == 4) && "lg:text-white"}
                `}
                key={menu}
              >
                {menu}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Cart button */}
      <div className="fixed left-8 py-2 px-3 bottom-8 lg:static lg:mr-4">
        <div className="flex-center h-12 w-12 ring-2 cursor-pointer rounded-full bg-white shadow-md border border-gray-100">
          <HiOutlineShoppingCart />
        </div>
      </div>
    </nav>
  );
}
