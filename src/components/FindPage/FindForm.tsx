"use client";
import React, { useEffect, useState } from "react";
import styles from "@/components/Table/input.module.css";
import cn from "@/utils/cn";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { FormProps } from "@/app/find/page";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datapicker.styles.css";

interface FindFormProps {
  onSubmit: (data: FormProps) => Promise<void>;
}

export default function FindForm({ onSubmit }: FindFormProps) {
  const { register, handleSubmit, setValue } = useForm<FormProps>();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setValue("date", date ? date : undefined);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white py-1 px-5 flex justify-between rounded w-full mb-4"
    >
      <div className="flex items-center gap-4">
        <h2 className="font-medium text-base text-black">Посмотреть игру:</h2>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Выберите дату игры"
          className={cn(
            "w-[126px] bg-[#FDD901] rounded-[42px] text-black text-center border border-black py-2 px-4 w-[150px] cursor-pointer",
            styles.shadow
          )}
        />
        <h2 className="font-medium text-base text-black">Стол №:</h2>
        <input
          type="number"
          {...register("tableNum")}
          className={cn(
            "bg-[#FDD901] rounded-[42px] text-black text-center border border-black py-2 w-20",
            styles.shadow,
            styles.input
          )}
        />
        <h2 className="font-medium text-base text-black">Игра №:</h2>
        <input
          type="number"
          {...register("gameNum")}
          className={cn(
            "bg-[#FDD901] rounded-[42px] text-black text-center border border-black py-2 w-20",
            styles.shadow,
            styles.input
          )}
        />
      </div>
      <Button variant="find" className="cursor-pointer hover:border-[#FDD901]">
        Найти игру
      </Button>
    </form>
  );
}
