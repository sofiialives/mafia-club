"use client";
import InputController from "@/components/Table/InputController";
import cn from "@/utils/cn";
import React, { useState } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import styles from "../../Table/input.module.css";
import { GameProps } from "@/app/find/page";
import styless from "./winner.module.css";

interface WinnerTableProps {
  control?: Control<FieldValues, any>;
  game?: GameProps | undefined;
}

export default function WinnerTable({ control, game }: WinnerTableProps) {
  const bestMoves = Array(3)
    .fill(null)
    .map((_, index) => index);

  const [color, setColor] = useState("black");

  const handleInputChange = () => {
    setColor(color === "black" ? "#fdd901" : "black");
  };

  return (
    <table className="w-full bg-white text-black">
      <tbody>
        <tr className="border border-[#CECECE]">
          <td className="font-medium text-sm flex justify-between items-center p-2 text-red-500">
            Победившая команда
            <label className="flex items-center gap-2">
              <Controller
                control={control}
                name="winnerTeam"
                defaultValue={game ? game.winnerTeam : "Мафия"}
                render={({ field }) => (
                  <input
                    {...field}
                    type="radio"
                    value="Мафия"
                    checked={color === "black"}
                    className={styless.input}
                    onChange={handleInputChange}
                  />
                )}
              />
              Мафия
            </label>
            <label className="flex items-center gap-2">
              <Controller
                control={control}
                name="winnerTeam"
                defaultValue={game ? game.winnerTeam : "Мирные"}
                render={({ field }) => (
                  <input
                    {...field}
                    type="radio"
                    value="Мирные"
                    className={styless.input}
                    checked={color === "black"}
                    onChange={handleInputChange}
                  />
                )}
              />
              Мирные
            </label>
          </td>
        </tr>
        <tr className="border border-[#CECECE]">
          <td className="flex justify-between p-2 font-medium text-sm">
            <div className="flex gap-16">
              Лучший ход
              <ul className="flex gap-2">
                {bestMoves.map((move, index) => (
                  <InputController
                    key={index}
                    name={`bestMove[${move}]`}
                    game={
                      Array.isArray(game?.bestMove) ? game.bestMove[move] : ""
                    }
                    control={control}
                    type="number"
                    defaultValue=""
                    className={cn(
                      styles.shadow,
                      "w-14 h-6 border border-black shadow-inner bg-[#FDD901] rounded-[42px] text-black px-5 py-1 text-center"
                    )}
                  />
                ))}
              </ul>
            </div>
            <div className="flex gap-16">
              Игрок
              <InputController
                name="firstKilled"
                control={control}
                game={game?.firstKilled}
                type="number"
                defaultValue=""
                className={cn(
                  styles.shadow,
                  "w-14 h-6 border border-black shadow-inner bg-[#FDD901] rounded-[42px] text-black px-5 py-1 text-center"
                )}
              />
            </div>
          </td>
        </tr>
        <tr className="border border-[#CECECE]">
          <td className="font-medium text-sm flex justify-between p-2">
            Протест
            <InputController
              name="protest"
              game={game?.protest}
              control={control}
              placeholder="Протест"
              defaultValue=""
              type="text"
              className={cn(
                styles.shadow,
                "w-[420px] h-6 border border-black shadow-inner bg-[#FDD901] rounded-[42px] text-black px-5 py-1 overflow-hidden"
              )}
            />
          </td>
        </tr>
        <tr className="border border-[#CECECE]">
          <td className="font-medium text-sm flex justify-between p-2 text-red-500">
            Судья
            <InputController
              name="judge"
              game={game?.judge}
              control={control}
              placeholder="Судья"
              defaultValue=""
              type="text"
              className={cn(
                styles.shadow,
                "w-[420px] h-6 border border-black shadow-inner bg-[#FDD901] rounded-[42px] text-black px-5 py-1 overflow-hidden"
              )}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
