import React from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Map from "../Map/Map";
import Instagram from "@/public/icons/instagram.svg"
import Youtube from "@/public/icons/youtube.svg"
import Telegram from "@/public/icons/telegram.svg"
import Tiktok from "@/public/icons/tiktok.svg";
import Image from "next/image";

const socials = [
  { id: "instagram", img: Instagram, href: "https://www.instagram.com/mafiaclub.budapest?igsh=ZjlncmFxbG9nc3hw" },
  { id: "youtube", img: Youtube, href: "https://youtube.com/@mafiaclub.budapest?si=CrUIjPgqWdIqDoP8" },
  { id: "telegram", img: Telegram , href: "https://t.me/mafiabudapestchat"},
  { id: "tiktok", img: Tiktok, href: "http://tiktok.com" },
];


type Props = {};

const Footer = (props: Props) => {
  return (
    <footer id="contact" className="pt-[60px] pb-[24px]">
      <MaxWidthWrapper className="flex flex-wrap justify-between">
        <div className="w-[200px] mr-[380px]">
          <div className="flex flex-col gap-7 mb-[50px] text-[16px] leading-[20px] font-normal">
            <p className="relative">
              Клуб{" "}
              <span className="absolute top-[-10px] right-[100px]">
                <Logo className=" w-10 h-10" />
              </span>
            </p>
            <p>Budapest, Lónyay u. 23</p>
            <p>1092 Hungary</p>
          </div>

          <ul className="flex gap-[10px]">
            {socials.map((social) => (
              <li
                key={social.id}
                className="flex justify-center items-center h-[34px] w-[34px] rounded-[50%] bg-[#FDD901]"
              >
                <a
                  href={social.href}
                  className="cursor-pointer hover:shadow-[5px_5px_15px_5px_#FDD901] rounded-full "
                  target="_blank"
                >
                  <Image
                    src={social.img}
                    alt="Instagram"
                    className="w-[26px] h-[26px]"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Map />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center w-full mt-9">
          <nav className="flex gap-14 justify-center text-[#FDD901] text-[20px] leading-[20px] font-norma">
            <Link
              href="#start"
              className="cursor-pointer hover:shadow-[5px_5px_15px_5px_#FDD901] rounded-lg"
            >
              Главная
            </Link>
            <Link
              href="/terms"
              className="cursor-pointer hover:shadow-[5px_5px_15px_5px_#FDD901] rounded-lg"
            >
              Условия и положения
            </Link>
            <Link
              href="/privacy"
              className="cursor-pointer hover:shadow-[5px_5px_15px_5px_#FDD901] rounded-lg"
            >
              Политика конфиденциальности
            </Link>
          </nav>
          <p className="mt-4">Copyright (c) 2024 TeamForce design All Rights Reserved</p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
