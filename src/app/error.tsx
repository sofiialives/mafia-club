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
    <div>
      <p>{`Извините, что-то пошло не так.`}</p>
      <Button onClick={() => reset()}>Попробовать еще раз</Button>
      <p>Или</p>
      <Link href="/">Вернуться на главную</Link>
    </div>
  );
};

export default ErrorComponent;
