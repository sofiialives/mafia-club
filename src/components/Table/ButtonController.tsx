import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import Button from "../Button";
import cn from "@/utils/cn";
import styles from "./input.module.css";

interface ButtonControllerProps {
  name: string;
  control?: Control<FieldValues>;
  type?: "button" | "reset" | "submit";
  variant?: "radio" | "primary" | "secondary" | "protocol";
  className?: string;
  foul?: boolean;
  game?: string | number | boolean | undefined;
}

export default function ButtonController({
  name,
  control,
  type = "button",
  variant = "primary",
  className,
  foul,
  game,
}: ButtonControllerProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field: { onChange, value } }) => (
        <Button
          type={type}
          onClick={() => onChange(!value)}
          variant={variant}
          className={cn(
            styles.shadow,
            value && "bg-[#FDD901]",
            foul && value && "bg-black",
            game && "bg-[#FDD901]",
            foul && game && "bg-black",
            className
          )}
        />
      )}
    />
  );
}
