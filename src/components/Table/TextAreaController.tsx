import cn from "@/utils/cn";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

interface TextareaControllerProps {
  name: string;
  control?: Control<FieldValues, any>;
  defaultValue?: string;
  className?: string;
  placeholder?: string;
  game?: string | number | readonly string[] | undefined;
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
      defaultValue={defaultValue}
      render={({ field }) => (
        <textarea
          {...field}
          value={game ? game : field.value}
          className={cn(
            "h-6 overflow-hidden text-black font-medium text-base",
            className
          )}
          placeholder={placeholder}
        />
      )}
    />
  );
}
