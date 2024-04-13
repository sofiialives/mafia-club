import cn from "@/utils/cn";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

interface TextareaControllerProps {
  name: string;
  control?: Control<FieldValues, any>;
  defaultValue?: string;
  className?: string;
  placeholder?: string;
  game?: string | null;
}

export default function TextAreaController({
  name,
  control,
  defaultValue = "",
  className = "",
  placeholder = "",
  game,
}: TextareaControllerProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={game ? game : defaultValue}
      render={({ field }) => (
        <textarea
          {...field}
          className={cn("h-6 overflow-hidden", className)}
          placeholder={placeholder}
        />
      )}
    />
  );
}
