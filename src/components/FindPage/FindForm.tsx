import React from "react";
import styles from "@/components/Table/input.module.css";
import cn from "@/utils/cn";
import Button from "../Button";
import { mainData } from "@/utils/findArray";

interface FindFormProps {}

export default function FindForm({}: FindFormProps) {
  return (
    <form className="bg-white py-1 px-5 flex justify-between rounded w-full mb-4">
      <ul className="flex items-center gap-4">
        {mainData.map((data, index) => (
          <li key={index} className="flex items-center gap-6">
            <h2 className="font-medium text-base text-black">{data.label}</h2>
            <input
              type={data.type}
              name={data.name}
              className={cn(data.class, styles.input, styles.shadow)}
            />
          </li>
        ))}
      </ul>
      <Button variant="find">Найти игру</Button>
    </form>
  );
}
