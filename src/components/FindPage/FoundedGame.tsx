import cn from "@/utils/cn";
import styles from "@/components/Table/input.module.css";
import React from "react";
import { GameProps } from "@/app/find/page";

interface FoundedGameProps {
  game: GameProps | undefined;
}

export default function FoundedGame({ game }: FoundedGameProps) {
  const date = game?.date
    ? new Date(game?.date).toISOString().slice(0, 10)
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
        {game
          ? `${date}/${game.tableNum}/${game.gameNum}`
          : "dd/mm/yyyy / Стол / Номер игры"}
      </div>
    </div>
  );
}
