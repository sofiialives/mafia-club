import cn from "@/utils/cn";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import styles from "./input.module.css";

interface TextareaControllerProps {
  name: string;
  control: Control<FieldValues, any>;
  defaultValue?: string;
  className?: string;
  placeholder?: string;
}

export default function TextAreaController({
  name,
  control,
  defaultValue = "",
  className = "",
  placeholder = "",
}: TextareaControllerProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <textarea
          {...field}
          className={cn(
            styles.shadow,
            "h-6 border border-black shadow-inner bg-[#FDD901] rounded-[42px] text-black px-5 py-1 overflow-hidden",
            className
          )}
          placeholder={placeholder}
        />
      )}
    />
  );
}
