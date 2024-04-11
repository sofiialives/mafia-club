import Link from "next/link";
import React from "react";

interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
  return (
    <div>
      <h2>Не найдено</h2>
      <p>Извините, страница которую вы ищите, не существует.</p>
      <Link href="/">Вернуться на главную</Link>
    </div>
  );
}
