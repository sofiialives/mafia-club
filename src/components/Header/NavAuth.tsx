"use client";
import React, { useState } from "react";
import Button from "../Button";
import Link from "next/link";
import HamburgerButton from "../HamburgerButton/HamburgerButton";

interface NavAuthProps {}

export default function NavAuth({}: NavAuthProps) {
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <div className="relative">
      <HamburgerButton setIsShowMenu={setIsShowMenu} isShowMenu={isShowMenu} />

      {isShowMenu && (
        <div className="absolute p-2 max-h-[104px] left-[-35px] z-10 flex flex-col justify-center gap-4 rounded bg-[#FDD901] text-black text-lg font-medium">
          <Link
            href="/login"
            className="text-black  bg-transparent  p-1 hover:border-black hover:border-b-2"
          >
            Войти
          </Link>
          <Link
            href="/register"
            className="text-black bg-transparent  p-1 hover:border-black hover:border-b-2"
          >
            Регистрация
          </Link>
        </div>
      )}
    </div>
  );
}
