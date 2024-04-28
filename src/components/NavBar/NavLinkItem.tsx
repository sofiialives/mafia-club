import Link from "next/link";
import React from "react";
import cn from "@/utils/cn";
import { Url } from "url";

interface NavLinkItemProp {
  className?: string;
  href: Url | string;
  title?: string;
  current?: boolean;
}

const NavLinkItem = ({ className, href, title, current }: NavLinkItemProp) => {
  return (
    <Link
      href={href}
      className={cn(current && " bg-[#FDD901] text-black", className)}
      rel="noopener noreferrer"
    >
      {title}
    </Link>
  );
};

export default NavLinkItem;
