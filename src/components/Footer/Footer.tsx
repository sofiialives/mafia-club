import React from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Map from "../Map/Map";
import Instagram from "@/public/icons/instagram.svg";
import Youtube from "@/public/icons/youtube.svg";
import Telegram from "@/public/icons/telegram.svg";
import Tiktok from "@/public/icons/tiktok.svg";
import Image from "next/image";

const socials = [
  {
    id: "instagram",
    img: Instagram,
    href: "https://www.instagram.com/mafiaclub.budapest?igsh=ZjlncmFxbG9nc3hw",
  },
  {
    id: "youtube",
    img: Youtube,
    href: "https://youtube.com/@mafiaclub.budapest?si=CrUIjPgqWdIqDoP8",
  },
  { id: "telegram", img: Telegram, href: "https://t.me/mafiabudapestchat" },
];

const links = [
  {
    id: "start",
    title: "Главная",
    href: "#start",
  },
  {
    id: "terms",
    title: "Условия и положения",
    href: "/terms",
  },
  { id: "privacy", title: "Политика конфиденциальности", href: "/privacy" },
];

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      id="contact"
      className="pt-[60px] pb-[24px] border-t-2  border-gradient"
    >
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
                  className="cursor-pointer hover:shadow-[0px_0px_8px_8px_#FDD901] rounded-full "
                  target="_blank"
                  rel="noreferrer noopener"
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
          <nav className=" text-[#FDD901] text-[20px] leading-[20px] font-normal">
            <ul className="flex gap-14 justify-center">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="cursor-pointer p-[4px] rounded-[4px] hover:bg-[#FDD901] hover:text-black hover:shadow-[0px_0px_5px_5px_#FDD901]"
                >
                  {link.title}
                </Link>
              ))}
            </ul>
          </nav>

          <p className="mt-4">
            Copyright (c) 2024{" "}
            <span>
              <a
                href="https://discord.gg/UNkJ2MGe"
                className="text-[#FDD901] mr-1 cursor-pointer underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                TeamForce
              </a>
            </span>
            design All Rights Reserved
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
