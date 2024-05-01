import FindId from "@/components/FindPage/FindId";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getGameById } from "@/lib/routes/games";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

interface FindPageProps {
  params: Params;
}

export default async function FindPage({ params }: FindPageProps) {
  const { _id } = params;
  const game = await getGameById({ _id });

  return (
    <section className="bg-[#202020]">
      <MaxWidthWrapper className="flex flex-col items-center pt-20">
        <FindId game={game} />
      </MaxWidthWrapper>
    </section>
  );
}
