import cn from "@/utils/cn";
import React from "react";

interface GameTableHeadersProps {
  action?: boolean;
  children: React.ReactNode;
}

export default function GameTableHeaders({
  children,
  action,
}: GameTableHeadersProps) {
  return (
    <th
      className={cn(
        "text-center p-2 border border-t-0 border-[#CECECE]",
        action
          ? "bg-[#FDD901] text-black text-base font-medium w-full"
          : "bg-[#414141] text-[#FDD901] text-sm font-normal"
      )}
    >
      {children}
    </th>
  );
}
