import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import cn from "@/utils/cn";
import Link from "next/link";
import React from "react";
import styles from "@/components/Table/input.module.css";

interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
  return (
    <MaxWidthWrapper className="flex flex-col gap-18 justify-center items-center">
      <video loop className="w-[800px]">
        <source src="/404.mp4" type="video/mp4" />
      </video>
      <Link
        href="/"
        className={cn(
          "border border-black rounded-full bg-[#FDD901] font-medium text-black text-base py-2 px-3",
          styles.shadow
        )}
      >
        Перейти на главную страницу
      </Link>
    </MaxWidthWrapper>
  );
}
