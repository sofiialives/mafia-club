import React from "react";
import Button from "../Button";
import leftArrow from "@/public/icons/leftarrow.svg";
import rightArrow from "@/public/icons/rightarrow.svg";
import Image from "next/image";
import styles from "@/components/Table/input.module.css";
import cn from "@/utils/cn";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  results: number;
}

export default function Pagination({
  page,
  setPage,
  results,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-5">
      <Button
        type="button"
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page === 1}
        className={cn(
          styles.shadow,
          "cursor-pointer hover:text-black border-none hover:shadow-[0px_0px_5px_5px_#FDD901]"
        )}
      >
        <Image src={leftArrow} alt="left-arrow" width={20} height={20} />
      </Button>
      <p
        className={cn(
          "bg-[#FDD901] rounded-[42px] border border-black py-2 px-4 font-medium text-black",
          styles.shadow
        )}
      >
        {page}
      </p>
      <Button
        onClick={() => setPage((prev) => prev + 1)}
        disabled={results !== 10}
        className={cn(
          styles.shadow,
          "cursor-pointer hover:text-black border-none hover:shadow-[0px_0px_5px_5px_#FDD901]"
        )}
      >
        <Image src={rightArrow} alt="right-arrow" width={20} height={20} />
      </Button>
    </div>
  );
}
