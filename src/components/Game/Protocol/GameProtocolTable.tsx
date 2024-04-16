"use client";
import React from "react";
import ProtocolHead from "./ProtocolHead";
import ProtocolBody from "./ProtocolBody";
import { Control, FieldValues } from "react-hook-form";
import { GameProps } from "@/app/find/page";

interface GameProtocolTableProps {
  control?: Control<FieldValues, any>;
  game?: GameProps;
}

export default function GameProtocolTable({
  control,
  game,
}: GameProtocolTableProps) {
  return (
    <table className="w-full">
      <thead>
        <ProtocolHead />
      </thead>
      <tbody>
        <ProtocolBody control={control} game={game} />
      </tbody>
    </table>
  );
}
