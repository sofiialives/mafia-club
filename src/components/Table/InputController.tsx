import React, { HTMLInputTypeAttribute } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import styles from "./input.module.css";
import cn from "@/utils/cn";

interface InputControllerProps {
  name: string;
  control: Control<FieldValues, any>;
  defaultValue?: string;
  type: HTMLInputTypeAttribute;
  min?: number;
  max?: number;
  className?: string;
  placeholder?: string;
}

export default function InputController({
  name,
  control,
  defaultValue,
  type,
  min,
  max,
  placeholder,
  className,
}: InputControllerProps) {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <input
            {...field}
            step=".1"
            type={type}
            min={min}
            max={max}
            placeholder={placeholder}
            className={cn(styles.input, "p-1", className)}
          />
        )}
      />
    </div>
  );
}
