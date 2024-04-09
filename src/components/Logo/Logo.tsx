import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/icons/logo.svg";
import cn from "@/utils/cn";

interface Prop {
  className: string,
}

const Logo = ({ className }: Prop) => {
  return <Image src={logo} alt="logo" className={cn(className)} />;
};

export default Logo;
