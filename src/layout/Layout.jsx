import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
    <div className="bg-[#00000095] h-full w-full hidden md:visible fixed z-10 mx-5"></div>
    <div className={`h-full bg-container bg-fixed bg-cover bg-no-repeat object-cover`}>
      <div className="h-16 md:hidden">
        <Navbar />
      </div>
      <div className="hidden md:flex w-64 flex-col relative inset-y-0 z-50">
        <Sidebar />
      
      </div>

      <main className="md:pl-64 h-full">{children}</main>
    </div>
    </>
  );
}

export default Layout;
