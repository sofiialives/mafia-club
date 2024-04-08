import React from "react";
import Logo from "../Logo/Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";
import NavBar from "../NavBar/NavBar";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header id="start">
      <MaxWidthWrapper className="flex flex-row justify-between items-center h-[80px]">
        <Link href="/">
          <Logo className="ml-16" />
        </Link>

        <NavBar />
        <button className="mr-12 text-[#FDD901] font-light text-sm">
          LogIn
        </button>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
