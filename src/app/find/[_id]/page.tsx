import FindTable from "@/components/FindPage/FindTable";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getGameById } from "@/lib/routes/games";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useRouter } from "next/navigation";
import React from "react";

interface FindPageProps {
  params: Params;
}

export default async function FindPage({ params }: FindPageProps) {
  const { _id } = params;
  const game = await getGameById({ _id });

  return (
    <MaxWidthWrapper className="flex flex-col items-center pt-20">
      {/* <button
        onClick={() => router.back()}
        type="button"
        className="relative flex items-center text-xs text-green-400 bg-white rounded-xl py-2 pl-10 pr-4 focus:bg-[#00CC2D] focus:text-white hover:bg-[#00CC2D] hover:text-white group"
      >
        Назад
      </button> */}
      <FindTable game={game} />
    </MaxWidthWrapper>
  );
}
