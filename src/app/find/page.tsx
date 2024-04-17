"use client";
import FindForm from "@/components/FindPage/FindForm";
import FoundedGame from "@/components/FindPage/FoundedGame";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getGame } from "@/lib/routes/games";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

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
  _id: string;
}

const FindGame = (props: Props) => {
  const { reset } = useForm<FormProps>();
  const [results, setResults] = useState<GameProps[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const allGames = await getGame({});
      console.log(allGames);
      setResults(allGames);
    };
    fetchGames();
  }, []);

  const onSubmit = async (data: FormProps) => {
    const result = await getGame(data);
    if (!result || Object.values(data).some((val) => val === undefined)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Данные отсутствуют или такой игры не существует!",
        showConfirmButton: false,
        timer: 1000,
        width: 350,
      });
      return;
    }
    setResults(result);
    reset();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Игра найдена!",
      showConfirmButton: false,
      timer: 1000,
      width: 350,
    });
  };

  return (
    <MaxWidthWrapper className="flex flex-col items-center pt-20">
      <FindForm onSubmit={onSubmit} />
      {results?.length > 0 && (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              <Link href={`/find/${result._id}`}>
                {result.date && <h1>{result.date.toString()}</h1>}
                <p>{result.gameNum}</p>
                <p>{result.tableNum}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </MaxWidthWrapper>
  );
};

export default FindGame;
