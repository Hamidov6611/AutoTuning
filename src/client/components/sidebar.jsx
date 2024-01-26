import React from "react";
import { Link } from "react-router-dom";
import GamburgerMenu from "./ui/menu/GamburgerMenu";
import './ui/menu/menu.css'

const Sidebar = ({isMenu, setIsMenu}) => {
  return (
    <div className="fixed top-0 left-0 h-screen bg-white w-full z-[3] tl:hidden sidebar">
      <div className="h-full flex flex-col">
        <div className="px-[3%] tl:pl-0 tl:h-1/2 flex items-center h-[100px] justify-between gap-x-[33px] w-[98%] st:w-[1280px] mx-auto">
          <Link to={"/"}>
            <img src="/images/blacklogo.png" alt="logo" className="w-[150px]" />
          </Link>
          <GamburgerMenu class1={"tl:hidden"} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
