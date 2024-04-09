import Link from "next/link";
import React from "react";
import NavLinkItem from "./NavLinkItem.jsx"

type Props = {};
const navMenu = [
  { id: "main", href: "/", title: "Главная" },
  { id: "about", href: "/#about", title: "О клубе" },
  { id: "contact", href: "/#contact", title: "Контакты" },
  { id: "find", href: "/find-game", title: "Найти игру" },
  { id: "game", href: "/game", title: "Играть" },
];

const NavBar = (props: Props) => {
  return (
    <nav>
      <ul className="flex gap-[60px] ">
        {navMenu.map((menu) => (
          <NavLinkItem
            className=" text-[#FDD901] text-[28px] font-normal"
            key={menu.id}
            href={menu.href}
            title={menu.title}
            
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
