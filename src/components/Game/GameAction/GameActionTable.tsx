import React from "react";
import GameActionBody from "./GameActionBody";
import { Control, FieldValues } from "react-hook-form";
import { PhaseData } from "@/app/game/page";
import { GameProps } from "@/app/find/page";

interface GameActionTableProps {
  id: number;
  control?: Control<FieldValues, any>;
  phases: PhaseData[][];
  game?: GameProps;
}

export default function GameActionTable({
  id,
  control,
  phases,
  game,
}: GameActionTableProps) {
  return (
    <table className="w-full font-medium text-sm">
      <thead>
        <tr>
          <th
            colSpan={11}
            className="bg-white border border-[#CECECE] p-2 text-black font-medium text-base"
          >
            Игровые дейстия
          </th>
        </tr>
        <tr>
          <th
            colSpan={11}
            className="bg-[#FDD901] border border-[#CECECE] p-2 text-black font-medium text-base"
          >
            Голосование {id + 1}
          </th>
        </tr>
      </thead>
      <GameActionBody
        control={control}
        tableIndex={id}
        phases={phases[id]}
        game={game}
      />
    </table>
  );
}
