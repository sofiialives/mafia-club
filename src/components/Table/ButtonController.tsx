"use client";
import React, { useState } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import Button from "../Button";
import cn from "@/utils/cn";

interface ButtonControllerProps {
  name: string;
  control: Control<FieldValues, any>;
  min?: string;
  type: "button" | "reset" | "submit";
  className?: string;
}

export default function ButtonController({
  name,
  control,
  type,
  className,
}: ButtonControllerProps) {
  const [isFoul, setIsFoul] = useState(false);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Button
          type={type}
          onClick={() => setIsFoul(!isFoul)}
          variant="protocol"
          className={cn(isFoul && "bg-black", className)}
        />
      )}
    />
  );
}
