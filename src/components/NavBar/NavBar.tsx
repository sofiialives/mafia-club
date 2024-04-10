"use client"
import React from "react";
import NavLinkItem from "./NavLinkItem.jsx"
import { usePathname } from "next/navigation.js";

type Props = {};
const navMenu = [
  { id: "main", href: "/", title: "Главная" },
  { id: "about", href: "/#about", title: "О клубе" },
  { id: "contact", href: "/#contact", title: "Контакты" },
  { id: "find", href: "/find", title: "Найти игру" },
  { id: "game", href: "/game", title: "Играть" },
];

const NavBar = (props: Props) => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex gap-[60px] ">
        {navMenu.map((menu) => (
          <NavLinkItem
            className="text-[#FDD901] text-[28px] font-normal relative"
            key={menu.id}
            href={menu.href}
            title={menu.title}
            current={pathname === menu.href}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
