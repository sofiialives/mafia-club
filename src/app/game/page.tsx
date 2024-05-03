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
import Swal from "sweetalert2";

interface ProtocolProps {}

export interface PhaseData {
  player: number;
  vote: number;
  revote: number;
}

export default function Protocol({}: ProtocolProps) {
  const { handleSubmit, reset, control } = useForm();

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

  const onSubmit = (data: any) => {
    if (!data || Object.values(data).some((val) => val === undefined)) {
      Swal.fire({
        icon: "error",
        title: "Упс...",
        text: "Поля выделенные красным не должны быть пустыми!",
        background: "#000",
        confirmButtonColor: "#FDD901",
      });
      return;
    }
    Swal.fire({
      title: "Хотите ли вы сохранить изменения?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Сохранять",
      denyButtonText: "Не сохранять",
      background: "#000",
      customClass: {
        confirmButton: "bg-green-500 hover:bg-green-600",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        postGame(data)
          .then(() => {
            Swal.fire({
              title: "Сохранено!",
              text: "Игра была успешно сохранена!",
              icon: "success",
              confirmButtonColor: "#FDD901",
              background: "#000",
            });
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Упс...",
              text: "Что-то пошло не так!",
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Изменения не сохранено!", "", "info");
      }
    });

    reset();
  };

  const handleReset = () => {
    reset();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Информация была успешно сброшена!",
      background: "#000",
      showConfirmButton: false,
      timer: 1000,
      width: 350,
    });
  };

  return (
    <main>
      <section className="bg-[#202020]">
        <MaxWidthWrapper className="p-20">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-16 justify-center">
              <div className="flex flex-col gap-5 w-[604px]">
                <Tournament control={control} />
                <GameProtocolTable control={control} />
                <WinnerTable control={control} />
                <CommentTable control={control} />
                <Timer />
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
            <div className="flex justify-center gap-16 mt-14">
              <Button
                variant="secondary"
                type="reset"
                className={
                  (styles.shadow,
                  "hover:bg-[#FDD901] hover:text-black border-none hover:shadow-[0px_0px_5px_5px_#FDD901]")
                }
                onClick={handleReset}
              >
                Сбросить игру
              </Button>
              <Button
                variant="secondary"
                type="submit"
                className={
                  (styles.shadow,
                  "hover:bg-[#FDD901] hover:text-black border-none hover:shadow-[0px_0px_5px_5px_#FDD901]")
                }
              >
                Сохранить игру
              </Button>
            </div>
          </form>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
