// import { useState } from "react";
// import { FaSync } from "react-icons/fa";
// import { FiHome, FiMenu } from "react-icons/fi";
// import Sidebarbg from "/sidebarbg2.png";

// import icon1 from '/1.png';

// const LinkItems = [
//   { name: "Home", icon: FiHome, data: {} },
//   { name: "El's Eggos Squad", icon: icon1, data: {} },
//   { name: "Hawkins Protector", icon: icon1, data: {} },
//   { name: "Skateboard Strikers", icon: icon1, data: {} },
//   { name: "Scoop Troop", icon: icon1, data: {} },
// ];

// const Sidebar2 = ({
//   onClose,
//   fetchData,
//   handleTabClick,
//   setIsLoading,
//   setGame,
// }) => {
//   const [activeItem, setActiveItem] = useState("Home");

//   return (
//     <div
//       className="fixed top-0 left-0 w-full md:w-60 h-full bg-cover bg-no-repeat bg-center"
//       style={{ backgroundImage: `url(${Sidebarbg})` }}
//     >
//       <div className="flex items-center justify-center h-20 mx-8 my-15">
//         {/* <img className="w-200 rounded-lg" src={Logo} alt="Icon" /> */}
//         <button className="px-30 block md:hidden" onClick={onClose}>
//           <FiMenu />
//         </button>
//       </div>

//       {LinkItems.map((link, index) => (
//         <div
//           key={link.name}
//           className={`flex items-center p-4 mx-4 rounded-lg cursor-pointer group ${
//             link.name === activeItem
//               ? "bg-red-600 text-white"
//               : "bg-transparent"
//           }`}
//           onClick={() => {
//             setActiveItem(link.name);
//             handleTabClick(link.name, link.data);
//           }}
//           style={{
//             textShadow:
//               "red 1px 1px 0, red -1px -1px 0, red -1px 1px 0, red 1px -1px 0",
//             fontFamily: "Benguiat_Bold",
//             margin: index < LinkItems.length - 1 ? "8px 12px" : "0",
//             padding: "13px 10px",
//           }}
//         >
//           {typeof link.icon === "string" ? (
//             <img className="w-8 rounded-lg" src={link.icon} alt="Icon" />
//           ) : (
//             <link.icon className="w-6 h-6" />
//           )}
//           <div className="px-5">{link.name}</div>
//         </div>
//       ))}

//       <div className="text-center">
//         <button
//           className="outline-none rounded-full mt-1 p-2 lg:p-2 aria-label-refresh hover:bg-red-800 active:bg-red-900"
//           onClick={() => {
//             setIsLoading(true);
//             fetchData(activeItem);
//             onClose();
//           }}
//         >
//           <FaSync className="w-6 h-6" />
//         </button>
//         <div className="text-sm mt-2">Refresh</div>
//       </div>

//       <div
//         className={`flex items-center p-4 mx-4 rounded-lg cursor-pointer group ${
//           activeItem === "HangMan" ? "bg-red-600 text-white" : "bg-transparent"
//         }`}
//         onClick={() => {
//           setActiveItem("HangMan");
//           setGame("HangMan");
//           onClose();
//         }}
//         style={{
//           textShadow:
//             "red 1px 1px 0, red -1px -1px 0, red -1px 1px 0, red 1px -1px 0",
//           fontFamily: "Benguiat_Bold",
//           marginTop: "12px",
//         }}
//       >
//         {/* <img className="w-8 rounded-lg" src={icon5} alt="Icon" />
//         <div className="px-5">HangMan</div> */}
//       </div>

//       <div
//         className={`flex items-center p-4 mx-4 rounded-lg cursor-pointer group ${
//           activeItem === "JumpGame" ? "bg-red-600 text-white" : "bg-transparent"
//         }`}
//         onClick={() => {
//           setActiveItem("JumpGame");
//           setGame("JumpGame");
//           onClose();
//         }}
//         style={{
//           textShadow:
//             "red 1px 1px 0, red -1px -1px 0, red -1px 1px 0, red 1px -1px 0",
//           fontFamily: "Benguiat_Bold",
//           marginTop: "12px",
//         }}
//       >
//         {/* <img className="w-8 rounded-lg" src={icon5} alt="Icon" />
//         <div className="px-5">JumpGame</div> */}
//       </div>

//       <div
//         className={`flex items-center p-4 mx-4 rounded-lg cursor-pointer group ${
//           activeItem === "TicTacToe"
//             ? "bg-red-600 text-white"
//             : "bg-transparent"
//         }`}
//         onClick={() => {
//           setActiveItem("TicTacToe");
//           setGame("TicTacToe");
//           onClose();
//         }}
//         style={{
//           textShadow:
//             "red 1px 1px 0, red -1px -1px 0, red -1px 1px 0, red 1px -1px 0",
//           fontFamily: "Benguiat_Bold",
//           marginTop: "12px",
//         }}
//       >
//         {/* <img className="w-8 rounded-lg" src={icon5} alt="Icon" />
//         <div className="px-5">TicTacToe</div> */}
//       </div>
//     </div>
//   );
// };

// const Layout = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
//       <Sidebar
//         onClose={() => setIsOpen(false)}
//         fetchData={(text) => Promise.resolve()}
//         handleTabClick={(text, data) => {}}
//         setIsLoading={(isLoading) => {}}
//         setGame={(game) => {}}
//         className={`hidden md:block`}
//       />
//       <div className="flex md:ml-60">
//         <button
//           className="block md:hidden outline-none"
//           onClick={() => setIsOpen(true)}
//         >
//           <FiMenu />
//         </button>
//         <div className="w-full">{children}</div>
//       </div>
//       {isOpen && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
//           <div className="absolute top-0 left-0 w-full h-full">
//             <Sidebar
//               onClose={() => setIsOpen(false)}
//               fetchData={(text) => Promise.resolve()}
//               handleTabClick={(text, data) => {}}
//               setIsLoading={(isLoading) => {}}
//               setGame={(game) => {}}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export { Layout, Sidebar2 };
