"use client";
import CommentTable from "@/components/Game/Comment/CommentTable";
import GameProtocolTable from "@/components/Game/Protocol/GameProtocolTable";
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
          <div className="flex flex-col gap-5 w-[604px]">
            <Tournament />
            <GameProtocolTable />
            <WinnerTable />
            <CommentTable />
          </div>
        </form>
      </MaxWidthWrapper>
    </main>
  );
}
