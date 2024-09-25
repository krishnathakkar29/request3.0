import AllScoresContext from "@/context/AllScoresContext";
import { Menu } from "lucide-react";
import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import arcReact from "../assets/arcReact.png";
import capShield from "../assets/capShield.png";
import group2new from "../assets/group2newfinal.png";
import HomeLogo from "../assets/Home.png";
import logo from "../assets/request3Logo-removebg-preview.png";
import whiteSpider from "../assets/whiteSpider.png";
import ThorImage from "../assets/thorLogo.png";

const SidebarLink = ({ href, icon: Icon, label }) => {
  const pathname = useLocation();
  const isActive =
    pathname.pathname === href ||
    (pathname.pathname === "/" && href === "/dashboard");

  return (
    <Link to={href}>
      <div
        className={`cursor-pointer flex items-center justify-start px-8 py-4 hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors text-white ${
          isActive ? "bg-blue-200 " : ""
        }`}
      >
        <Icon className="w-6 h-6 !text-gray-700" />
        <span className="block font-medium text-white">{label}</span>
      </div>
    </Link>
  );
};

function Sidebar() {
  const sidebarClassNames = `fixed w-64 flex flex-col transition-all duration-300 overflow-hidden h-full shadow-md z-40`;
  const { pathname } = useLocation();

  return (
    <>
      <div className="fixed w-64 flex flex-col transition-all duration-300 overflow-hidden h-screen shadow-md z-40 font-Goldman sideBG bg-contain bg-no-repeat">
        {/* style={{backgroundImage: `url(${group2new})`}} */}
        {/* <X className=" absolute md:hidden right-0 top-4 w-10 h-10  z-50" onClick={() => setIsSidebarOpen(false)}/> */}
        <img
          src={group2new}
          alt="group 2 new"
          className={`sideBG absolute w-full h-full ${pathname !== "/"}`}
        />
        {/* <img src={group2} alt="sidebar bg" className="relative" /> */}

        <div className="bg-black bg-opacity-60 h-full w-full absolute z-20"></div>
        <div className="flex gap-3 justify-start items-center pt-8">
          <h1 className="font-extrabold text-2xl pl-8 z-30">
            <img src={logo} alt="Logo" />
          </h1>
        </div>

        {/* Sidebar Links */}
        <div className="flex-grow mt-8 flex flex-col justify-start items-center gap-4">
          {/* <SidebarLink
          href="/team/spidey_squad"
          icon={Layout}
          label="Spiderman"
        />
        <SidebarLink href="/team/tony_techies" icon={Archive} label="IronMan" className="text-white" />
        <SidebarLink href="/team/cap_crusader" icon={Clipboard} label="Cap" />
        <SidebarLink
          href="/team/odinson_olympians"
          icon={User}
          label="Odinson"
        /> */}
          {/* <NavLink to="/team/home" className=" md:text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-xl w-4/5 p-3 z-30 drop-shadow-md h-16 pr-6">
          <img src={HomeLogo} alt="Home Logo" className="scale-[0.8] invert" />Home
        </NavLink>
        <NavLink to="/team/spidey_squad" className=" md:text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-xl w-4/5 p-3 z-30 h-16 drop-shadow-md">
          <img src={whiteSpider} className="scale-[0.8] invert" alt="Home Logo"/>Spider-Man
        </NavLink>
        <NavLink to="/team/tony_techies" className=" md:text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-xl w-4/5 p-3 z-30 h-16">
          <img src={arcReact} alt="Home Logo" className="invert" /> Iron Man
        </NavLink>
        <NavLink to="/team/cap_crusader" className=" md:text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-sm w-4/5 p-3 z-30 h-16">
          <img src={capShield} className="h-12 w-12 invert" alt="Home Logo" /> Captain America
        </NavLink>
        <NavLink to="/team/odinson_olympians" className=" md:text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-xl w-4/5 p-3 z-30 h-16">
          <img src={HomeLogo} alt="Home Logo" className="scale-[0.8] invert" />Home
        </NavLink> */}

          <NavLink
            to="/"
            className=" text-white font-Goldman flex justify-start gap-8 items-center rounded-3xl text-sm sm:text-xl w-4/5 p-3 z-30 drop-shadow-md h-16 pr-6 border-2"
          >
            <img
              src={HomeLogo}
              alt="Home Logo"
              className="scale-[0.8] text-white "
            />
            Home
          </NavLink>
          <NavLink
            to="/team/spidey_squad"
            className=" text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-sm sm:text-xl w-4/5 p-3 z-30 h-16 drop-shadow-md border-2"
          >
            <img
              src={whiteSpider}
              className="scale-[0.8] text-white"
              alt="Spidy"
            />
            Spidey's Squad
          </NavLink>
          <NavLink
            to="/team/tony_techies"
            className=" text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-sm sm:text-xl w-4/5 p-3 z-30 h-16 border-2"
          >
            <img src={arcReact} alt="arcReact" className="invert" /> Tony's
            Techies
          </NavLink>
          <NavLink
            to="/team/cap_crusader"
            className=" text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-sm sm:text-xl w-4/5 p-3 z-30 h-16 border-2"
          >
            <img
              src={capShield}
              className="h-12 w-12 invert"
              alt="Captain's shield Logo"
            />
            Cap's Crusaders
          </NavLink>
          <NavLink
            to="/team/odinson_olympians"
            className=" text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-md sm:text-xl w-4/5  z-30 h-16 border-2"
          >
            <img
              src={ThorImage}
              alt="thorHammer Logo"
              className="scale-[0.5] w-2/5 h-20 "
            />
            Odinson's Olympians
          </NavLink>
        </div>

        {/* Footer */}
        {/* <div className="mb-10">
        <p className="text-center text-xs text-gray-500">&copy; 2024 Edstock</p>
      </div> */}
      </div>
    </>
  );
}

export default Sidebar;
