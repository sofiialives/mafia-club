"use client";
import FindForm from "@/components/FindPage/FindForm";
import FindTable from "@/components/FindPage/FindTable";
import FoundedGame from "@/components/FindPage/FoundedGame";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getGame } from "@/lib/routes/games";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type Props = {};

export interface FormProps {
  date: Date;
  tableNum: number;
  gameNum: number;
}

export interface GameProps {
  isTournament?: boolean;
  comments?: string[];
  date?: Date;
  firstKilled?: number;
  bestMove?: number | null[];
  gameNum?: number;
  tableNum?: number;
  players: {
    playerName: string;
    role: "Мирный" | "Мафия" | "Шериф" | "Дон";
    firstFoul: boolean;
    secondFoul: boolean;
    thirdFoul: boolean;
    points: number;
    add: number;
  }[];
  protest?: string;
  winnerTeam?: string;
  judge?: string;
  phases?: { player: number; vote: number; revote: number }[][];
}

const FindGame = (props: Props) => {
  const { reset } = useForm<FormProps>();
  const [results, setResults] = useState<GameProps>();

  useEffect(() => {
    if (results) {
      console.log(results);
    }
  }, [results]);

  const onSubmit = async (data: FormProps) => {
    const result = await getGame(data);
    setResults(result);
    console.log(results);
    reset();
  };

  return (
    <MaxWidthWrapper className="flex flex-col items-center pt-20">
      <FindForm onSubmit={onSubmit} />
      <FoundedGame game={results} />
      <FindTable game={results} />
    </MaxWidthWrapper>
  );
};

export default FindGame;
