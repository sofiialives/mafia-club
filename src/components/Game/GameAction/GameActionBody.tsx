"use client";
import { GameProps } from "@/app/find/page";
import { PhaseData } from "@/app/game/page";
import InputController from "@/components/Table/InputController";
import React from "react";
import { Control, FieldValues } from "react-hook-form";

interface GameActionBodyProps {
  control?: Control<FieldValues, any>;
  tableIndex: number;
  phases: PhaseData[];
  game?: GameProps;
}

export default function GameActionBody({
  control,
  tableIndex,
  game,
}: GameActionBodyProps) {
  const numbers = Array(10)
    .fill(null)
    .map((_, index) => index);

  return (
    <tbody>
      <tr>
        <td className="text-[#FDD901] bg-[#414141] border border-[#CECECE] p-2 w-[120px]">
          Игрок №
        </td>
        {numbers.map((number) => (
          <td
            className="bg-white border border-[#CECECE] w-[36px]"
            key={number}
          >
            <InputController
              name={`phases[${tableIndex}][${number - 1}].player`}
              game={
                game?.phases &&
                game.phases[tableIndex] &&
                game.phases[tableIndex][number - 1]?.player
              }
              control={control}
              defaultValue={0}
              type="number"
              min={0}
              max={10}
              className="text-center w-full text-black"
            />
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-yellow-400 bg-[#414141] border border-[#CECECE] p-2">
         К-во голосов
        </td>
        {numbers.map((number) => (
          <td
            className="bg-white border border-[#CECECE] w-[36px]"
            key={number}
          >
            <InputController
              name={`phases[${tableIndex}][${number - 1}].vote`}
              game={
                game?.phases &&
                game.phases[tableIndex] &&
                game.phases[tableIndex][number - 1]?.vote
              }
              control={control}
              defaultValue={0}
              type="number"
              min={0}
              max={10}
              className="text-center w-full text-black"
            />
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-yellow-400 bg-[#414141] border border-[#CECECE] p-2">
          Переголосование
        </td>
        {numbers.map((number) => (
          <td
            className="bg-white border border-[#CECECE] w-[36px]"
            key={number}
          >
            <InputController
              name={`phases[${tableIndex}][${number - 1}].revote`}
              game={
                game?.phases &&
                game.phases[tableIndex] &&
                game.phases[tableIndex][number - 1]?.revote
              }
              control={control}
              defaultValue={0}
              type="number"
              min={0}
              max={10}
              className="text-center w-full text-black"
            />
          </td>
        ))}
      </tr>
    </tbody>
  );
}
