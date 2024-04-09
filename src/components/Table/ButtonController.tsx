"use client";
import React, { useState } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import Button from "../Button";
import cn from "@/utils/cn";
import styles from "./input.module.css";

interface ButtonControllerProps {
  name: string;
  control: Control<FieldValues, any>;
  min?: string;
  type: "button" | "reset" | "submit";
  className?: string;
  variant: "radio" | "primary" | "secondary" | "protocol";
  foul?: boolean;
}

export default function ButtonController({
  name,
  control,
  type,
  variant,
  className,
  foul,
}: ButtonControllerProps) {
  const [isFoul, setIsFoul] = useState(false);
  const [isTournament, setIsTournament] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Button
          type={type}
          onClick={() =>
            foul ? setIsFoul(!isFoul) : setIsTournament(!isTournament)
          }
          variant={variant}
          className={cn(
            styles.shadow,
            isTournament && "bg-[#FDD901]",
            isFoul && "bg-black",
            className
          )}
        />
      )}
    />
  );
}
