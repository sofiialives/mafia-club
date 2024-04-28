
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
import { AdapterUser } from "next-auth/adapters";
import { AdapterSession } from "next-auth/adapters";


type Props = {};

interface ExtendedUser extends AdapterUser {
  isAdmin: boolean;
  id: string;
}

interface ExtendedSession extends AdapterSession {
  user: ExtendedUser;
}

const Header = async (props: Props) => {
  
  const session: ExtendedSession = await auth();
  let isAdmin = false;
  if (session && session.user) {
    isAdmin = session.user.isAdmin
  }

 
  
  return (
    <header id="start" className=" border-b-2 border-gradient">
      <MaxWidthWrapper className="flex flex-row justify-between items-center h-[80px]  text-[#FDD901]">
        <Link href="/">
          <Logo className="" />
        </Link>
        <NavBar isAdmin={isAdmin} />
        {session?.user ? (
          <>
            <form action={handleLogout}>
              <Button className="hover:bg-[#FDD901] hover:text-black border-none hover:shadow-[0px_0px_5px_5px_#FDD901]">
                Вийти
              </Button>
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
