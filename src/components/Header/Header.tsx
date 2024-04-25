import React from "react";
import Logo from "../Logo/Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";
import NavBar from "../NavBar/NavBar";
import Link from "next/link";
import { auth } from "@/lib/auth/auth";
import NavLinkItem from "../NavBar/NavLinkItem";
import { handleLogout } from "@/lib/auth/action";
import Button from "../Button";
import NavAuth from "./NavAuth";

type Props = {};

const Header = async (props: Props) => {
  const session = await auth();
  return (
    <header id="start">
      <MaxWidthWrapper className="flex flex-row justify-between items-center h-[80px]">
        <Link href="/">
          <Logo className="" />
        </Link>
        <NavBar />
        {session?.user ? (
          <>
            {session.user.isAdmin && (
              <NavLinkItem
                title="Играть"
                href="/game"
                className="text-[#FDD901] text-[28px] font-normal relative hover:shadow-[5px_5px_15px_5px_#FDD901] rounded-lg"
              />
            )}
            <form action={handleLogout}>
              <Button>Вийти</Button>
            </form>
          </>
        ) : (
          <NavAuth />
        )}
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
