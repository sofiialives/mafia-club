"use client";
import InputController from "@/components/Table/InputController";
import React from "react";
import { useForm } from "react-hook-form";

interface GameActionBodyProps {}

export default function GameActionBody({}: GameActionBodyProps) {
  const { control } = useForm();
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <tbody>
      <tr>
        <td className="text-[#FDD901] bg-[#414141] border border-[#CECECE] p-2 w-[120px]">
          Игрок
        </td>
        {numbers.map((number) => (
          <td
            key={number}
            className="bg-white border border-[#CECECE] text-center p-2 w-[36px]"
          >
            {number}
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-yellow-400 bg-[#414141] border border-[#CECECE] p-2">
          Голос
        </td>
        {numbers.map((number) => (
          <td
            className="bg-white border border-[#CECECE] w-[36px]"
            key={number}
          >
            <InputController
              name={`vote${number}`}
              control={control}
              defaultValue="0"
              type="number"
              min={0}
              max={10}
              className="text-center w-full"
            />
          </td>
        ))}
      </tr>
      <tr>
        <td className="text-yellow-400 bg-[#414141] border border-[#CECECE] p-2">
          Предголосование
        </td>
        {numbers.map((number) => (
          <td
            className="bg-white border border-[#CECECE] w-[36px]"
            key={number}
          >
            <InputController
              name={`prevote${number}`}
              control={control}
              defaultValue="0"
              type="number"
              min={0}
              max={10}
              className="text-center w-full"
            />
          </td>
        ))}
      </tr>
    </tbody>
  );
}
