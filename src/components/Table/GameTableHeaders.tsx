import cn from "@/utils/cn";
import React from "react";

interface GameTableHeadersProps {
  action?: boolean;
  children: React.ReactNode;
  colSpan?: number;
  active?: boolean;
}

export default function GameTableHeaders({
  children,
  action,
  colSpan,
  active,
}: GameTableHeadersProps) {
  return (
    <th
      colSpan={colSpan}
      className={cn(
        "text-center p-2 border border-t-0 border-[#CECECE]",
        action
          ? "bg-[#ECECED] text-black text-base font-medium w-full"
          : "bg-[#414141] text-[#FDD901] text-sm font-normal",
        active && "bg-[#FDD901]"
      )}
    >
      {children}
    </th>
  );
}
