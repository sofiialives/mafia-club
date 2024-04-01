"use client";
import Button from "@/components/Button";
import CommentTable from "@/components/Game/Comment/CommentTable";
import GameActionTable from "@/components/Game/GameAction/GameActionTable";
import GameProtocolTable from "@/components/Game/Protocol/GameProtocolTable";
import Timer from "@/components/Game/Timer/Timer";
import Tournament from "@/components/Game/Tournament/Tournament";
import WinnerTable from "@/components/Game/Winner/WinnerTable";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useForm } from "react-hook-form";

interface ProtocolProps {}

export default function Protocol({}: ProtocolProps) {
  const { handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <main>
      <MaxWidthWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-16 items-center justify-center">
            <div className="flex flex-col gap-5 w-[604px]">
              <Tournament />
              <GameProtocolTable />
              <WinnerTable />
              <CommentTable />
            </div>
            <div className="flex flex-col gap-5 w-[485px]">
              {[...Array(7)].map((_, index) => (
                <GameActionTable key={index} id={index} />
              ))}
            </div>
          </div>
          <Timer />
        </form>
      </MaxWidthWrapper>
    </main>
  );
}
