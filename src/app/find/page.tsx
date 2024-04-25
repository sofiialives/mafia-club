"use client";
import FindForm from "@/components/FindPage/FindForm";
import FoundedGame from "@/components/FindPage/FoundedGame";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getGame } from "@/lib/routes/games";
import cn from "@/utils/cn";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import styles from "@/components/Table/input.module.css";

type Props = {};

export interface FormProps {
  date?: Date;
  tableNum?: number;
  gameNum?: number;
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
  const [filter, setFilter] = useState<FormProps>({});

  useEffect(() => {
    const fetchGames = async () => {
      const allGames = await getGame({});
      setResults(allGames);
    };
    fetchGames();
  }, []);

  const onSubmit = async (data: FormProps) => {
    const result = await getGame(data);
    if (!result) {
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
    setFilter(data);
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
    <MaxWidthWrapper className="flex flex-col items-center py-20">
      <FindForm onSubmit={onSubmit} />
      <FoundedGame filter={filter} />
      {results?.length > 0 && (
        <ul className="text-black mt-4">
          {results.map((result, index) => {
            const date = result.date
              ? new Date(result.date).toISOString().slice(0, 10)
              : "";
            return (
              <li
                key={index}
                className={cn(
                  "mb-4 bg-[#FDD901] rounded-xl border border-black",
                  styles.shadow
                )}
              >
                <Link href={`/find/${result._id}`} className="flex gap-4 p-3">
                  {result.date && (
                    <p className="text-gray-700 text-base font-medium">
                      <span className="text-black text-lg font-bold">
                        Дата: </span>
                      {date}
                    </p>
                  )}
                  <p className="text-gray-700 text-base font-medium">
                    <span className="text-black text-lg font-bold">Стол: </span>
                    {result.tableNum}
                  </p>
                  <p className="text-gray-700 text-base font-medium">
                    <span className="text-black text-lg font-bold">Игра: </span>
                    {result.gameNum}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </MaxWidthWrapper>
  );
};

export default FindGame;
