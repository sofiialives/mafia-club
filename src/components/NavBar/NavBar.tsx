"use client";
import React from "react";
import NavLinkItem from "./NavLinkItem";
import { usePathname } from "next/navigation";
import { useUserContext } from "@/context";


export interface IsAdminInterface {
 isAdmin: boolean 
}

const navMenu = [
  { id: "main", href: "/", title: "Главная" },
  { id: "about", href: "/#about", title: "О клубе" },
  { id: "contact", href: "/#contact", title: "Контакты" },
  { id: "find", href: "/find", title: "Найти игру" },
];

const NavBar = ({ isAdmin }: IsAdminInterface) => {
  const pathname = usePathname();


  return (
    <nav>
      <ul className="flex gap-1">
        {navMenu.map((menu) => (
          <NavLinkItem
            className="w-[180px] text-center px-2 text-[28px] font-normal relative  hover:bg-[#FDD901] hover:text-black rounded-[4px] hover:shadow-[0px_0px_5px_5px_#FDD901]"
            key={menu.id}
            href={menu.href}
            title={menu.title}
            current={pathname === menu.href}
          />
        ))}
        {isAdmin && (
          <NavLinkItem
            title="Играть"
            href="/game"
            className="w-[180px] text-center px-2 text-[28px] font-normal relative  hover:bg-[#FDD901] hover:text-black rounded-[4px] hover:shadow-[0px_0px_5px_5px_#FDD901]"
            current={pathname === "/game"}
          />
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
