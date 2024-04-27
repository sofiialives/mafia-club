"use client";
import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

type ErrorComponentProps = {
  error: Error;
  reset: () => void;
};

const ErrorComponent = ({ reset }: ErrorComponentProps) => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <p>{`Извините, что-то пошло не так.`}</p>
      <Button onClick={() => reset()}>Попробовать еще раз</Button>
      <p>Или</p>
      <Link
        href="/"
        className="p-2 cursor-pointer text-[#FDD901] hover:rounded-3xl hover:bg-[#FDD901] hover:text-black"
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default ErrorComponent;
