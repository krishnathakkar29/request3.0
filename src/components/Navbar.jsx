import React from "react";
import Logo from "../assets/request3Logo-removebg-preview.png";
import MobileSidebar from "./MobileSidebar";
import { useLocation } from "react-router-dom";
const Navbar = ({
  onOpen,
  fetchData,
  setIsLoading,
  leaderboardText,
  ...rest
}) => {
  const { pathname } = useLocation();
  return (
    <div
      className="md:hidden w-full absolute flex items-center justify-between  min-h-20 bg-transparent z-40"
      {...rest}
    >
      {/* Icon button for opening the menu */}
      <div className="ml-5">
        <MobileSidebar />
      </div>

      {/* Centered logo */}

      <div className="flex-grow flex justify-center">
        <img
          className={`${
            pathname === "/" && "hidden"
          } w-[9.5rem] pt-4 mr-10 h-auto rounded-lg object-contain`}
          src={Logo}
          alt="Logo"
        />
      </div>

      {/* Refresh button */}
      {/* <div className="text-center">
        <button
          className="border border-red-700 hover:bg-red-700 active:bg-red-600 rounded-full mt-1 p-2 text-lg"
          aria-label="Refresh"
          onClick={() => {
            setIsLoading(true);
          }}
        >
          <X className="w-6 h-6" />
        </button>
      </div> */}
    </div>
  );
};

export default Navbar;
