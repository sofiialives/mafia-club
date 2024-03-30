import cn from "@/utils/cn";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import styles from "./input.module.css";

interface SelectControllerProps {
  name: string;
  control: Control<FieldValues, any>;
  defaultValue: string;
  className?: string;
  options: { label: string; value: string }[];
}

export default function SelectController({
  name,
  control,
  defaultValue,
  options,
  className,
}: SelectControllerProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <select
          {...field}
          className={cn(
            "bg-[#FDD901] border border-black shadow-inner w-18 rounded-full text-center",
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
