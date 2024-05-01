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
import Pagination from "@/components/FindPage/Pagination";
import Loading from "../loading";
import styles from "@/components/Table/input.module.css";
import styless from "./find.module.css";

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
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchGames = async () => {
      const allGames = await getGame({ ...filter, page });
      setResults(allGames);
    };
    fetchGames();
  }, [page, filter]);

  const onSubmit = async (data: FormProps) => {
    const result = await getGame(data);
    console.log(result);
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
    <section className="bg-[#202020]">
      <MaxWidthWrapper className="flex flex-col items-center py-20">
        <FindForm onSubmit={onSubmit} />
        <FoundedGame filter={filter} />
        {results?.length > 0 ? (
          <ul className="text-black mt-4 mb-10 flex flex-col gap-4 h-[484px]">
            {results.map((result, index) => {
              const date = result?.date
                ? new Date(result.date).toLocaleDateString("en-GB", {
                    timeZone: "Europe/Budapest",
                  })
                : "";

              return (
                <li key={index} className={styless.link}>
                  <Link
                    href={`/find/${result._id}`}
                    className={cn(
                      "bg-[#FDD901] rounded-xl flex",
                      styles.shadow
                    )}
                  >
                    <div className="bg-[#414141] text-[#FDD901] text-sm py-1 px-[84px] border border-[#ECECED]">
                      {date}
                    </div>
                    <div className="bg-[#FDD901] py-1 px-[84px] border border-[#ECECED]">
                      Стол: {result.tableNum}
                    </div>
                    <div className="bg-[#FDD901] py-1 px-[84px] border border-[#ECECED]">
                      Игра: {result.gameNum}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <Loading />
        )}
        <Pagination page={page} setPage={setPage} results={results.length} />
      </MaxWidthWrapper>
    </section>
  );
};

export default FindGame;
