import Link from "next/link";
import React from "react";
import NavLinkItem from "./NavLinkItem.jsx"

type Props = {};
const navMenu = [
  { id: "main", href: "/", title: "Main" },
  { id: "find", href: "/find-game", title: "Find Game" },
  { id: "game", href: "/game", title: "Game" },
  { id: "about", href: "/#about", title: "About" },
  { id: "contact", href: "/#contact", title: "Contact" },
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
