import React from "react";
import GameActionBody from "./GameActionBody";

interface GameActionTableProps {
  id: number;
}

export default function GameActionTable({ id }: GameActionTableProps) {
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
      <GameActionBody />
    </table>
  );
}
