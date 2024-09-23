import React from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4">
        <Menu className="invert" />
      </SheetTrigger>
      <SheetContent className="p-0 bg-secondary pt-10 w-64" side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
