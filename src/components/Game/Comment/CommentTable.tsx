"use client";
import { GameProps } from "@/app/find/page";
import TextAreaController from "@/components/Table/TextAreaController";
import React from "react";
import { Control, FieldValues } from "react-hook-form";

interface CommentTableProps {
  control?: Control<FieldValues, any>;
  game?: GameProps;
}

export default function CommentTable({ control, game }: CommentTableProps) {
  const commentNames = Array(5)
    .fill(null)
    .map((_, index) => index);

  return (
    <table>
      <thead>
        <tr className="bg-[#414141] text-[#FDD901] text-sm">
          <th className="border border-[#CECECE] border-t-0 p-2">
            Комментарий
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {commentNames.map((commentName, index) => (
          <tr key={index}>
            <td className="border border-[#CECECE] p-2">
              <TextAreaController
                name={`comments[${commentName}]`}
                game={
                  Array.isArray(game?.comments)
                    ? game.comments[commentName]
                    : ""
                }
                control={control}
                placeholder="Введите комментарий..."
                className="w-full"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
