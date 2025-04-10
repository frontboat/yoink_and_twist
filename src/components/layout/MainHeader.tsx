import BibliothecaBook from "../../icons/BibliothecaBook.svg";
import Menu from "../../icons/menu.svg";
import { useState } from "react";

import { Head } from "./Head";

export const MainHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="fixed z-50 flex w-full h-16 px-4 space-x-8 tracking-widest uppercase border-b sm:px-10 bg-gray-900/40 border-white/30">
      <Head />
      <div className="container flex justify-between mx-auto text-white">
        <div className="self-center">
          <BibliothecaBook className="mr-10 transition-all duration-150 cursor-pointer fill-current h-9 hover:fill-white" />
        </div>

        <div
          className="self-center hidden px-4 py-1 mr-auto transition-all duration-150 border rounded sm:flex border-off-300/20 hover:bg-off-300 hover:text-gray-900"
        >
          <span className="hidden sm:block">Ecliptic </span>
        </div>

        <div className="flex py-2 sm:space-x-4">
          <button
            className="flex self-center px-4 py-1 mr-auto transition-all duration-150 border rounded border-off-300/20 hover:bg-off-300 hover:text-gray-900"
            onClick={() => {
              window.open("https://ecliptic.gg/login", "_blank");
            }}
          >
            <span className="uppercase">Sign In</span>
          </button>

          <div className="flex w-12 h-12 my-auto ml-10 cursor-pointer md:hidden">
            <Menu
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="self-center justify-center fill-current lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
