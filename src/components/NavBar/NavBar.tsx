"use client";
import React from "react";
import { usePathname } from "next/navigation";
import NavLinkItem from "./NavLinkItem";

type Props = {};
const navMenu = [
  { id: "main", href: "/", title: "Главная" },
  { id: "about", href: "/#about", title: "О клубе" },
  { id: "contact", href: "/#contact", title: "Контакты" },
  { id: "find", href: "/find", title: "Найти игру" },
];

const NavBar = (props: Props) => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex gap-[60px] ">
        {navMenu.map((menu) => (
          <NavLinkItem
            className="text-[#FDD901] text-[28px] font-normal relative hover:shadow-[5px_5px_15px_5px_#FDD901] rounded-lg"
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
