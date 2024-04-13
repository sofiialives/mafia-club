import React from "react";
import GameActionBody from "./GameActionBody";
import { Control, FieldValues } from "react-hook-form";
import { PhaseData } from "@/app/game/page";

interface GameActionTableProps {
  id: number;
  control: Control<FieldValues, any>;
  phases: PhaseData[][];
}

export default function GameActionTable({
  id,
  control,
  phases,
}: GameActionTableProps) {
  return (
    <table className="w-full font-medium text-sm">
      <thead>
        <tr>
          <th colSpan={11} className="bg-white border border-[#CECECE] p-2">
            Игровые дейстия
          </th>
        </tr>
        <tr>
          <th colSpan={11} className="bg-[#FDD901] border border-[#CECECE] p-2">
            Голосование {id + 1}
          </th>
        </tr>
      </thead>
      <GameActionBody control={control} tableIndex={id} phases={phases[id]} />
    </table>
  );
}
