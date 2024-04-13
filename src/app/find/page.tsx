import FindForm from "@/components/FindPage/FindForm";
import FoundedGame from "@/components/FindPage/FoundedGame";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

type Props = {};

const FindGame = (props: Props) => {
  return (
    <MaxWidthWrapper className="flex flex-col items-center">
      <FindForm />
      <FoundedGame />
    </MaxWidthWrapper>
  );
};

export default FindGame;
