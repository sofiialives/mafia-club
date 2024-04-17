import cn from "@/utils/cn";
import styles from "@/components/Table/input.module.css";
import React from "react";
import { FormProps } from "@/app/find/page";

interface FoundedGameProps {
  filter: FormProps;
}

export default function FoundedGame({ filter }: FoundedGameProps) {
  const date = filter.date
    ? new Date(filter.date).toISOString().slice(0, 10)
    : "";

  return (
    <div className="bg-white py-1 px-5 flex gap-8 items-center rounded w-[700px]">
      <h2 className="font-medium text-base text-black">Найдена игра:</h2>
      <div
        className={cn(
          "bg-[#FDD901] rounded-[42px] text-black text-center border border-black py-2 px-10 w-[516px]",
          styles.shadow
        )}
      >
        {`${filter.date ? date : "dd/mm/yyyy"} / ${
          filter.tableNum ? filter.tableNum : "Стол"
        } / ${filter.gameNum ? filter.gameNum : "Номер игры"}`}
      </div>
    </div>
  );
}
