"use client";
import InputController from "@/components/Table/InputController";
import cn from "@/utils/cn";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../Table/input.module.css";
import { bestMoves } from "@/constants/protocol";
import TextAreaController from "@/components/Table/TextAreaController";

interface WinnerTableProps {}

export default function WinnerTable({}: WinnerTableProps) {
  const { control } = useForm();
  return (
    <table className="w-full bg-white text-black">
      <tbody>
        <tr className="border border-[#CECECE]">
          <td className="font-medium text-sm flex justify-between p-2">
            Победившая команда
            <TextAreaController
              name="winnerTeam"
              control={control}
              placeholder="Команда"
              className="w-[420px]"
            />
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
                    name={move}
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
                name="bestPlayer"
                control={control}
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
            <TextAreaController
              name="protestTeam"
              control={control}
              placeholder="Протест"
              className="w-[420px]"
            />
          </td>
        </tr>
        <tr className="border border-[#CECECE]">
          <td className="font-medium text-sm flex justify-between p-2">
            Судья
            <TextAreaController
              name="judgeTeam"
              control={control}
              placeholder="Судья"
              className="w-[420px]"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
