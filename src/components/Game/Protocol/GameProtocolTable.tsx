"use client";
import React from "react";
import ProtocolHead from "./ProtocolHead";
import ProtocolBody from "./ProtocolBody";
import { Control, FieldValues } from "react-hook-form";

interface GameProtocolTableProps {
  control: Control<FieldValues, any>;
}

export default function GameProtocolTable({ control }: GameProtocolTableProps) {
  return (
    <table className="w-full">
      <thead>
        <ProtocolHead />
      </thead>
      <tbody>
        <ProtocolBody control={control} />
      </tbody>
    </table>
  );
}
