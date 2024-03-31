"use client";
import React from "react";

interface ProtocolHeadProps {}

export default function ProtocolHead({}: ProtocolHeadProps) {
  return (
    <tr className="bg-[#414141] text-[#FDD901] text-sm">
      <th className="border border-[#CECECE] border-t-0 p-2" colSpan={2}>
        Игрок
      </th>
      <th className="border border-[#CECECE] border-t-0 p-2">Роли</th>
      <th className="border border-[#CECECE] border-t-0 p-2" colSpan={3}>
        Фолы
      </th>
      <th className="border border-[#CECECE] border-t-0 p-2">Балы</th>
      <th className="border border-[#CECECE] border-t-0 p-2">Д.Б.</th>
    </tr>
  );
}
