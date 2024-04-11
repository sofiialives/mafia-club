import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import Button from "../Button";
import cn from "@/utils/cn";
import styles from "./input.module.css";

interface ButtonControllerProps {
  name: string;
  control: Control<FieldValues>;
  type?: "button" | "reset" | "submit";
  variant?: "radio" | "primary" | "secondary" | "protocol";
  className?: string;
  foul?: boolean;
}

export default function ButtonController({
  name,
  control,
  type = "button",
  variant = "primary",
  className,
  foul,
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
            className
          )}
        />
      )}
    />
  );
}
