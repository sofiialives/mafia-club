"use client";
import GameProtocolTable from "@/components/Game/Protocol/GameProtocolTable";
import Tournament from "@/components/Game/Tournament/Tournament";
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
          </div>
        </form>
      </MaxWidthWrapper>
    </main>
  );
}
