import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

const HeroNavbar = () => {
  return (
    <header className="justify-between h-[4rem]  items-center px-4 sticky w-full bg-white text-black  lg:flex z-10 border border-b-2">
      <figure className="">
        <Image
          src=""
          height={500}
          width={500}
          alt="Logo"
          className="w-[50px] h-[50px]"
        />
      </figure>
      <nav className="text-black">
        <ul className="flex gap-x-6">
          <li className=" border-white border-2 hover:border-b-2 hover:border-r-2 hover:border-b-[#666666] hover:border-r-[#666666] rounded-md transition-all hover:shadow-xl">
            <Menubar className="hover:bg-white border-0 text-sm">
              <MenubarMenu>
                <MenubarTrigger>
                  <Link href="/">Home</Link>
                </MenubarTrigger>
                <MenubarContent className="hidden"></MenubarContent>
              </MenubarMenu>
            </Menubar>
          </li>
          <li className=" border-white border-2 hover:border-b-2 hover:border-r-2 hover:border-b-[#666666] hover:border-r-[#666666] rounded-md transition-all hover:shadow-xl">
            <Menubar className="hover:bg-white border-0 text-sm">
              <MenubarMenu>
                <MenubarTrigger>Products</MenubarTrigger>
                <MenubarContent className="hidden"></MenubarContent>
              </MenubarMenu>
            </Menubar>
          </li>
          <li className=" border-white border-2 hover:border-b-2 hover:border-r-2 hover:border-b-[#666666] hover:border-r-[#666666] rounded-md transition-all hover:shadow-xl">
            <Menubar className="hover:bg-white border-0 text-sm">
              <MenubarMenu>
                <MenubarTrigger>Collections</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Mens Collections</MenubarItem>
                  <MenubarItem>Womens Collections</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </li>
          <li className=" border-white border-2 hover:border-b-2 hover:border-r-2 hover:border-b-[#666666] hover:border-r-[#666666] rounded-md transition-all hover:shadow-xl">
            <Menubar className="hover:bg-white border-0 text-sm">
              <MenubarMenu>
                <MenubarTrigger>Contact</MenubarTrigger>
                <MenubarContent className="hidden"></MenubarContent>
              </MenubarMenu>
            </Menubar>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-x-2">
        <Button asChild className="bg-white text-black hover:text-white">
          <Link href="/login">Sign In</Link>
        </Button>
        <Button asChild className="bg-transparent text-white">
          <Link href="/register">Sign Up</Link>
        </Button>
      </div>
    </header>
  );
};

export default HeroNavbar;
