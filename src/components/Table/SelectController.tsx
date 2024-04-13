import cn from "@/utils/cn";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import styles from "./input.module.css";

interface SelectControllerProps {
  name: string;
  control?: Control<FieldValues, any>;
  defaultValue: "Мирный" | "Мафия" | "Шериф" | "Дон";
  className?: string;
  options: { label: string; value: string }[];
  game?: "Мирный" | "Мафия" | "Шериф" | "Дон" | false;
}

export default function SelectController({
  name,
  control,
  defaultValue,
  options,
  className,
  game,
}: SelectControllerProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={game ? game : defaultValue}
      render={({ field }) => (
        <select
          {...field}
          className={cn(
            "bg-[#FDD901] border border-black shadow-inner rounded-full text-center",
            styles.select,
            className
          )}
        >
          {options.map((option: any) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    />
  );
}
