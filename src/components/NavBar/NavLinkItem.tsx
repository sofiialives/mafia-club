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
      className={cn(
        current &&
          "before:absolute before:bottom-[-18px] left-0 before:w-full before:border-[1px] before:border-[#FDD901] before:rounded-sm ",
        className
      )}
      rel="noopener noreferrer"
    >
      {title}
    </Link>
  );
};

export default NavLinkItem;
