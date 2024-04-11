"use client"
import React, { useState } from "react";
import Logo from "../Logo/Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";
import NavBar from "../NavBar/NavBar";
import Link from "next/link";
import Button from "../Button";

type Props = {};

const Header = (props: Props) => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <header id="start">
      <MaxWidthWrapper className="flex flex-row justify-between items-center h-[80px] ">
        <Link href="/">
          <Logo className="ml-16" />
        </Link>

        <NavBar />
        <div className="relative">
          <Button
            onClick={() => setIsAuth(!isAuth)}
            variant="btnAuth"
            className="bg-black hover:shadow-[5px_5px_15px_5px_#FDD901] rounded-lg"
          >
            Авторизация
          </Button>
          {isAuth && (
            <div className="absolute left-[-25px] z-10 flex justify-center gap-4 rounded bg-[#FDD901] text-black text-lg font-medium">
              <Link
                href="/login"
                className="text-black  bg-transparent border-none"
              >
                Войти
              </Link>
              <Link
                href="/register"
                className="text-black bg-transparent border-none"
              >
                Регистрация
              </Link>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
