"use client";
import ButtonController from "@/components/Table/ButtonController";
import InputController from "@/components/Table/InputController";
import cn from "@/utils/cn";
import React from "react";
import { Control, FieldValues } from "react-hook-form";
import styles from "../../Table/input.module.css";
import { GameProps } from "@/app/find/page";

interface TournamentProps {
  control?: Control<FieldValues, any>;
  game?: GameProps;
}

export default function Tournament({ control, game }: TournamentProps) {
  return (
    <table className="bg-white text-black w-full text-center">
      <tbody>
        <tr>
          <td
            className="border border-[#CECECE] border-t-0 py-2 font-medium text-sm"
            colSpan={3}
          >
            Турнир
            <ButtonController
              name="isTournament"
              control={control}
              type="button"
              variant="radio"
            />
          </td>
        </tr>
        <tr>
          <td
            className="border border-[#CECECE] border-t-0 py-2 font-medium text-sm"
            colSpan={3}
          >
            Стадия турнира
          </td>
        </tr>
        <tr>
          <td className="border border-[#CECECE] border-t-0 py-2 font-medium text-sm">
            <InputController
              name="date"
              control={control}
              game={game?.date}
              defaultValue=""
              type="date"
            />
          </td>
          <td className="border border-[#CECECE] border-t-0 py-2 font-medium text-sm">
            Стол №
            <InputController
              name="tableNum"
              control={control}
              game={game?.tableNum}
              defaultValue={null}
              type="number"
              className={cn(
                styles.shadow,
                "w-14 h-6 border border-black shadow-inner bg-[#FDD901] rounded-[42px] text-black text-center"
              )}
            />
          </td>
          <td className="border border-[#CECECE] border-t-0 py-2 font-medium text-sm">
            Игра №
            <InputController
              name="gameNum"
              control={control}
              game={game?.gameNum}
              defaultValue={null}
              type="number"
              className={cn(
                styles.shadow,
                "w-14 h-6 border border-black shadow-inner bg-[#FDD901] rounded-[42px] text-black text-center"
              )}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
