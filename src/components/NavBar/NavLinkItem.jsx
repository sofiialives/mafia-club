import Link from 'next/link';
import React from 'react'
import cn from "@/utils/cn";



const NavLinkItem = ({className, href, title, current}) => {
    return (
      <Link
        href={href}
        className={cn(
          current &&
            " before:absolute before:bottom-0 left-0 before:w-full before:border-[1px] before:border-[#FDD901] before:rounded-sm ",
          className
        )}
        rel="noopener noreferrer"
      >
        {title}
      </Link>
    );
}


export default NavLinkItem