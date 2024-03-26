import cn from "@/utils/cn";
import React from "react";

interface GameTableBodyProps {
  action?: boolean;
  align?: "left" | "center";
  children: React.ReactNode;
  className?: string;
}

export default function GameTableBody({
  children,
  action,
  align = "left",
  className,
}: GameTableBodyProps) {
  return (
    <td
      className={cn(
        "bg-white text-black font-normal text-sm border border-[#CECECE] p-2",
        `text-${align}`,
        action &&
          "[&:nth-child(14n+1)]:text-[#FDD901] [&:nth-child(14n+1)]:bg-[#414141]",
        className
      )}
    >
      {children}
    </td>
  );
}
