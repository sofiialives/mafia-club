import ButtonController from "@/components/Table/ButtonController";
import InputController from "@/components/Table/InputController";
import SelectController from "@/components/Table/SelectController";
import cn from "@/utils/cn";
import React from "react";
import { Control, FieldValues } from "react-hook-form";
import styles from "../../Table/input.module.css";
import { GameProps } from "@/app/find/page";

// Додані інтерфейси Player і GameProps
interface Player {
  playerName: string;
  role: "Мирный" | "Мафия" | "Шериф" | "Дон";
  firstFoul: boolean;
  secondFoul: boolean;
  thirdFoul: boolean;
  points: number;
  add: number;
}

interface ProtocolBodyProps {
  control?: Control<FieldValues, any>;
  game?: GameProps;
}

export default function ProtocolBody({ control, game }: ProtocolBodyProps) {
  const rows = Array(10)
    .fill(null)
    .map((_, index) => index);

  const foulTypes = ["firstFoul", "secondFoul", "thirdFoul"];
  const pointsTypes = [
    { name: "points", label: "Балы" },
    { name: "add", label: "Д.Б." },
  ];
  return (
    <>
      {rows.map((rowNumber) => (
        <tr key={rowNumber} className="bg-white text-black text-sm">
          <td className="border border-[#CECECE] p-2">{rowNumber + 1}</td>
          <td className="border border-[#CECECE] p-2">
            <InputController
              name={`players[${rowNumber}].playerName`}
              control={control}
              game={game?.players[rowNumber].playerName}
              defaultValue=""
              placeholder="Никнейм"
              type="text"
              className="w-32 cursor-text"
            />
          </td>
          <td className="border border-[#CECECE] p-2">
            <SelectController
              name={`players[${rowNumber}].role`}
              className="cursor-pointer"
              control={control}
              game={game?.players[rowNumber].role}
              defaultValue={"Мирный"}
              options={[
                { label: "Мирный", value: "Мирный" },
                { label: "Мафия", value: "Мафия" },
                { label: "Шериф", value: "Шериф" },
                { label: "Дон", value: "Дон" },
              ]}
            />
          </td>
          {foulTypes.map((foulType, index) => (
            <td key={index} className="border border-[#CECECE] p-2">
              <ButtonController
                name={`players[${rowNumber}].${foulType}`}
                game={game?.players[rowNumber][foulType as keyof Player]}
                control={control}
                type="button"
                variant="protocol"
                foul
              />
            </td>
          ))}
          {pointsTypes.map((point) => (
            <td key={point.name} className="border border-[#CECECE] p-2">
              <InputController
                name={`players[${rowNumber}].${point.name}`}
                game={game?.players[rowNumber].points}
                control={control}
                defaultValue={0}
                type="number"
                min={0}
                max={1}
                className={cn(
                  styles.shadow,
                  "w-12 h-6 border border-black shadow-inner bg-[#FDD901] rounded-[42px] text-black text-center"
                )}
              />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
