"use client";
import React from "react";
import Tournament from "../Game/Tournament/Tournament";
import GameProtocolTable from "../Game/Protocol/GameProtocolTable";
import WinnerTable from "../Game/Winner/WinnerTable";
import CommentTable from "../Game/Comment/CommentTable";
import GameActionTable from "../Game/GameAction/GameActionTable";
import { GameProps } from "@/app/find/page";
import { useForm } from "react-hook-form";
import { PhaseData } from "@/app/game/page";

interface FindTableProps {
  game: GameProps | undefined;
}

export default function FindTable({ game }: FindTableProps) {
  const { control } = useForm();

  const phases: PhaseData[][] = Array(7)
    .fill(null)
    .map(() =>
      Array(10)
        .fill(null)
        .map(() => ({
          player: 0,
          vote: 0,
          revote: 0,
        }))
    );

  return (
    <form className="py-20">
      <div className="flex gap-16 justify-center">
        <div className="flex flex-col gap-5 w-[604px]">
          <Tournament game={game} control={control} />
          <GameProtocolTable game={game} control={control} />
          <WinnerTable game={game} control={control} />
          <CommentTable game={game} control={control} />
        </div>
        <div className="flex flex-col gap-5 w-[485px]">
          {phases.map((_, index) => (
            <GameActionTable
              key={index}
              id={index}
              phases={phases}
              game={game}
              control={control}
            />
          ))}
        </div>
      </div>
    </form>
  );
}
