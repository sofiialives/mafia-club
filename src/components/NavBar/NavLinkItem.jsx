import Link from 'next/link';
import React from 'react'
import cn from "@/utils/cn";



const NavLinkItem = ({className, href, title}) => {
    return (
      <Link href={href} className={cn(className)} rel="noopener noreferrer">
        {title}
      </Link>
    );
}

export default NavLinkItem