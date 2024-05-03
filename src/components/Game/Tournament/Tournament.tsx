"use client";
import ButtonController from "@/components/Table/ButtonController";
import InputController from "@/components/Table/InputController";
import cn from "@/utils/cn";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import styles from "../../Table/input.module.css";
import { GameProps } from "@/app/find/page";
import DatePicker from "react-datepicker";
import "@/components/FindPage/datapicker.styles.css";

interface TournamentProps {
  control?: Control<FieldValues, any>;
  game?: GameProps;
}

export default function Tournament({ control, game }: TournamentProps) {
  const date = game?.date ? new Date(game.date).toISOString().slice(0, 10) : "";
  return (
    <table className="bg-white text-black w-full text-center">
      <tbody>
        <tr>
          <td
            className="border border-[#CECECE] border-t-0 py-2 font-medium text-sm"
            colSpan={3}
          >
            <div className="flex items-center justify-center gap-2">
              Турнир
              <ButtonController
                name="isTournament"
                game={game?.isTournament}
                control={control}
                type="button"
                variant="radio"
              />
            </div>
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
          <td className="border border-[#CECECE] border-t-0 py-1 font-medium text-sm">
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <DatePicker
                  selected={!date ? field.value : date}
                  onChange={(date) => field.onChange(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Выберите дату"
                  className="w-[120px]  placeholder-red-500 placeholder:text-sm cursor-pointer hover:placeholder:text-[16px]"
                />
              )}
            />
            {/* <InputController control={control} name="date" type="date" /> */}
          </td>
          <td className="border border-[#CECECE] border-t-0 py-2 font-medium text-sm text-red-500">
            Стол №
            <InputController
              name="tableNum"
              control={control}
              game={game?.tableNum}
              defaultValue=""
              type="number"
              className={cn(
                styles.shadow,
                "w-14 h-6 border border-black shadow-inner bg-[#FDD901] rounded-[42px] text-black text-center"
              )}
            />
          </td>
          <td className="border border-[#CECECE] border-t-0 py-2 font-medium text-sm text-red-500">
            Игра №
            <InputController
              name="gameNum"
              control={control}
              game={game?.gameNum}
              defaultValue=""
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
