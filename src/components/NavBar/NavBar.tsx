import Link from "next/link";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav>
      <Link href="/">Main</Link>
      <Link href="/">Find Game</Link>
      <Link href="/">Table</Link>
      <Link href="/">About</Link>
      <Link href="/">Contact</Link>
      <button>LogIn</button>
    </nav>
  );
};

export default NavBar;
