import { NavLink } from "react-router-dom";
import arcReact from "../assets/arcReact.png";
import capShield from "../assets/capShield.png";
import HomeLogo from "../assets/Home.png";
import logo from "../assets/request3Logo-removebg-preview.png";
import ThorImage from "../assets/thorLogo.png";
import whiteSpider from "../assets/whiteSpider.png";
import group2new from "../assets/group2newfinal.png";

// function Sidebar3() {
//   return (
//     <div className="fixed w-64 flex flex-col transition-all duration-300 overflow-hidden h-screen shadow-md z-40 font-Goldman bg-transparent border-2 border-black">
//       a
//       <div className="flex gap-3 justify-start items-center pt-8">
//         <h1 className="font-extrabold text-2xl px-8 z-30">
//           <img src={logo} alt="Logo" />
//         </h1>
//       </div>
//       <div className="flex-grow mt-8 flex flex-col justify-start items-center gap-4">
//         {/* <SidebarLink
//           href="/team/spidey_squad"
//           icon={Layout}
//           label="Spiderman"
//         />
//         <SidebarLink href="/team/tony_techies" icon={Archive} label="IronMan" className="text-white" />
//         <SidebarLink href="/team/cap_crusader" icon={Clipboard} label="Cap" />
//         <SidebarLink
//           href="/team/odinson_olympians"
//           icon={User}
//           label="Odinson"
//         /> */}
//         {/* <NavLink to="/team/home" className="text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-xl w-4/5 p-3 z-30 drop-shadow-md h-16 pr-6">
//           <img src={HomeLogo} alt="Home Logo" className="scale-[0.8] invert" />Home
//         </NavLink>
//         <NavLink to="/team/spidey_squad" className="text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-xl w-4/5 p-3 z-30 h-16 drop-shadow-md">
//           <img src={whiteSpider} className="scale-[0.8] invert" alt="Home Logo"/>Spider-Man
//         </NavLink>
//         <NavLink to="/team/tony_techies" className="text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-xl w-4/5 p-3 z-30 h-16">
//           <img src={arcReact} alt="Home Logo" className="invert" /> Iron Man
//         </NavLink>
//         <NavLink to="/team/cap_crusader" className="text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-sm w-4/5 p-3 z-30 h-16">
//           <img src={capShield} className="h-12 w-12 invert" alt="Home Logo" /> Captain America
//         </NavLink>
//         <NavLink to="/team/odinson_olympians" className="text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-xl w-4/5 p-3 z-30 h-16">
//           <img src={HomeLogo} alt="Home Logo" className="scale-[0.8] invert" />Home
//         </NavLink> */}

//         <NavLink
//           to="/"
//           className="text-white font-Goldman flex justify-between items-center rounded-3xl text-xl w-4/5 p-3 z-30 drop-shadow-md h-16 pr-6 border-2"
//         >
//           <img
//             src={HomeLogo}
//             alt="Home Logo"
//             className="scale-[0.8] invert md:invert-0"
//           />
//           Home
//         </NavLink>
//         <NavLink
//           to="/team/spidey_squad"
//           className="text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-xl w-4/5 p-3 z-30 h-16 drop-shadow-md border-2"
//         >
//           <img
//             src={whiteSpider}
//             className="scale-[0.8] invert md:invert-0"
//             alt="Spidy"
//           />
//           Spider-Man
//         </NavLink>
// <NavLink
//   to="/team/tony_techies"
//   className="text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-xl w-4/5 p-3 z-30 h-16 border-2"
// >
//   <img src={arcReact} alt="arcReact" className="invert" /> Iron Man
// </NavLink>
// <NavLink
//   to="/team/cap_crusader"
//   className="text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-sm w-4/5 p-3 z-30 h-16 border-2"
// >
//   <img
//     src={capShield}
//     className="h-12 w-12 invert"
//     alt="Captain's shield Logo"
//   />{" "}
//   Captain America
// </NavLink>
// <NavLink
//   to="/team/odinson_olympians"
//   className="text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-xl w-4/5 pr-3 z-30 h-16 border-2"
// >
//   <img
//     src={ThorImage}
//     alt="thorHammer Logo"
//     className="scale-[0.5] w-2/5 h-20 invert md:invert-0"
//   />
//   Thor
// </NavLink>
//       </div>
//     </div>
//   );
// }

// export default Sidebar3;

function Sidebar3() {
  return (
    <div className="hidden md:fixed md:flex w-64 flex-col transition-all duration-300 overflow-hidden h-screen shadow-md z-40 font-Goldman bg-transparent">
      <img
        src={group2new}
        alt="group 2 new"
        className={`sideBG absolute w-full h-full`}
      />
      <div className="flex gap-3 justify-start items-center pt-8">
        <h1 className="font-extrabold text-2xl pl-8 z-30">
          <img src={logo} alt="Logo" />
        </h1>
      </div>
      <div className="flex-grow mt-8 flex flex-col justify-start items-center gap-4">
        <NavLink
          to="/"
          className=" text-white font-Goldman flex justify-start gap-8 items-center rounded-3xl text-sm sm:text-base w-4/5 p-3 z-30 drop-shadow-md h-16 pr-6 border-2"
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
          className=" text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-sm sm:text-base w-4/5 p-3 z-30 h-16 drop-shadow-md border-2"
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
          className=" text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-sm sm:text-base w-4/5 p-3 z-30 h-16 border-2"
        >
          <img src={arcReact} alt="arcReact" className="invert" /> Tony's
          Techies
        </NavLink>
        <NavLink
          to="/team/cap_crusader"
          className=" text-white font-Goldman flex justify-start gap-5 items-center bg-[#89E4FF20] rounded-3xl text-sm sm:text-base w-4/5 p-3 z-30 h-16 border-2"
        >
          <img
            src={capShield}
            className="h-12 w-12 invert"
            alt="Captain's shield Logo"
          />
          Cap's <br /> Crusaders
        </NavLink>
        <NavLink
          to="/team/odinson_olympians"
          className=" text-white font-Goldman flex justify-between items-center bg-[#89E4FF20] rounded-3xl text-md sm:text-base w-4/5  z-30 h-16 border-2"
        >
          <img
            src={ThorImage}
            alt="thorHammer Logo"
            className="scale-[0.5] w-2/5 h-20 "
          />
          Odinson's Olympians
        </NavLink>
        {/* Add other nav links as needed */}
      </div>
    </div>
  );
}

export default Sidebar3;
