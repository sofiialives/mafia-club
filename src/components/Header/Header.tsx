import React from "react";
import Logo from "./Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";
import NavBar from "../NavBar/NavBar";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <MaxWidthWrapper>
        <Logo />
        <NavBar />
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
