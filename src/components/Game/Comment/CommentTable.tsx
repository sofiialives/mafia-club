"use client";
import TextAreaController from "@/components/Table/TextAreaController";
import { commentNames } from "@/constants/protocol";
import React from "react";
import { useForm } from "react-hook-form";

interface CommentTableProps {}

export default function CommentTable({}: CommentTableProps) {
  const { control } = useForm();
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
                name={commentName}
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
