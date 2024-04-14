"use client";
import Button from "@/components/Button";
import CommentTable from "@/components/Game/Comment/CommentTable";
import GameActionTable from "@/components/Game/GameAction/GameActionTable";
import GameProtocolTable from "@/components/Game/Protocol/GameProtocolTable";
import Timer from "@/components/Game/Timer/Timer";
import Tournament from "@/components/Game/Tournament/Tournament";
import WinnerTable from "@/components/Game/Winner/WinnerTable";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { postGame } from "@/lib/routes/games";
import { useForm } from "react-hook-form";
import styles from "@/components/Table/input.module.css";

interface ProtocolProps {}

export interface PhaseData {
  player: number;
  vote: number;
  revote: number;
}

export default function Protocol({}: ProtocolProps) {
  const { handleSubmit, reset, control } = useForm();

  const phases: PhaseData[][] = Array.from({ length: 7 }, () =>
    Array.from({ length: 10 }, () => ({
      player: 0,
      vote: 0,
      revote: 0,
    }))
  );

  const onSubmit = (data: any) => {
    console.log(data);
    postGame(data)
      .then((response) => {
        console.log("Game created successfully", response);
      })
      .catch((error) => {
        console.error("Failed to create game", error);
      });

    reset();
  };

  return (
    <main>
      <MaxWidthWrapper className="p-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-16 items-center justify-center">
            <div className="flex flex-col gap-5 w-[604px]">
              <Tournament control={control} />
              <GameProtocolTable control={control} />
              <WinnerTable control={control} />
              <CommentTable control={control} />
            </div>
            <div className="flex flex-col gap-5 w-[485px]">
              {phases.map((_, index) => (
                <GameActionTable
                  key={index}
                  id={index}
                  control={control}
                  phases={phases}
                />
              ))}
            </div>
          </div>
          <Timer />
          <div className="flex justify-center gap-16">
            <Button variant="secondary" type="reset" className={styles.shadow}>
              Сбросить игру
            </Button>
            <Button variant="secondary" type="submit" className={styles.shadow}>
              Сохранить игру
            </Button>
          </div>
        </form>
      </MaxWidthWrapper>
    </main>
  );
}
