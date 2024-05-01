"use client";
import React from "react";
import FindTable from "./FindTable";
import { useRouter } from "next/navigation";
import Button from "../Button";
import styles from "@/components/Table/input.module.css";
import cn from "@/utils/cn";

interface FindIdProps {
  game: any;
}

export default function FindId({ game }: FindIdProps) {
  const router = useRouter();
  return (
    <div>
      <Button
        onClick={() => router.back()}
        type="button"
        className={cn("text-lg", styles.shadow)}
        variant="backBtn"
      >
        Назад
      </Button>
      <FindTable game={game} />
    </div>
  );
}
