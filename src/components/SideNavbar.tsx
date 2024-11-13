/** @format */
"use client";
import React from "react";

import { useState } from "react";
import { Nav } from "./ui/nav";

type Props = {};

import {
  AlertCircle,
  Archive,
  ChevronRight,
  File,
  Inbox,
  LayoutDashboard,
  MessagesSquare,
  Send,
  Users2,
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2 "
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    <div className="text-2xl font-bold text-sky-400 ml-2">blueBox</div>
    <div className=" items-center flex gap-3 mb-6 mt-4 ">
    <img src="/profile.jpg"  alt="jpg" className='rounded-full h-10 w-10 bg-cover bg-center '/>
    <p>Angry Bird
    <p className="text-xs text-gray-500">lorem ipsum</p>
    </p>
         
    </div>
      <Nav
      
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "DashBoard",
            href:"/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Ui Elements",
            href:"/uiElements",
            icon: File,
            variant: "ghost",
          },
          {
            title: "Orders",
            href:"/orders",
            icon: Send,
            variant: "ghost",
          },
          {
            title: "Forms Stuff",
            href: "/formsStuff",
            icon: AlertCircle,
            variant: "ghost",
          },
          {
            title: "Data Table",
            href: "/dataTable",
            icon: Users2,
            variant: "ghost",
          },
          {
            title: "Icons",
            href: "/icon",
            icon: Archive,
            variant: "ghost",
          },
          {
            title: "Sample Page",
            href: "/samplePage",
            icon: MessagesSquare,
            variant: "ghost",
          },
          {
            title: "Extra",
            href: "/extra",
            icon: Inbox,
            variant: "ghost",
          },
        ]}
      />
     <button className="p-2 bg-sky-400 rounded-lg text-white text-center ml-3">Add Project</button>
    </div>
  );
}
