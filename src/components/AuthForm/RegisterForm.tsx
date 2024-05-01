"use client";
import React from "react";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import Link from "next/link";
import Image from "next/image";
import Eyes from "@/public/images/eyes.png";
import styles from "@/components/Table/input.module.css";
import Button from "../Button";
import { registerUser } from "@/lib/auth/action";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";


const schema = Joi.object({
  name: Joi.string()
    .min(4)
    .max(64)
    .messages({ "string.empty": "Пожалуйста, введите ваше имя" }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .messages({
      "string.email": "Не верный формат почты",
      "string.empty": "Пожалуйста, введите вашу почту",
    }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).messages({
    "string.pattern.base": "Пароль должен быть от 8 символов",
    "string.empty": "Пожалуйста, введите ваш пароль",
  }),
  repeat_password: Joi.ref("password"),
}).messages({
  "any.only": "Пароли должны совпадать",
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: joiResolver(schema),
  });

  const router = useRouter();

  const onSubmit = (data: any) => {
    registerUser(data);
    reset();
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center p-20 gap-8">
      <h2 className="text-4xl">Регистрация</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-7 w-full font-medium text-3xl text-black"
      >
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Имя"
          className={clsx("bg-[#CECECE] py-3 px-7 rounded", styles.shadow)}
        />
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="mail@mail.com"
          className={clsx("bg-[#FDD901] py-3 px-7 rounded", styles.shadow)}
        />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Создайте пароль"
          className={clsx("bg-[#FDD901] py-3 px-7 rounded", styles.shadow)}
        />
        <input
          type="password"
          {...register("repeat_password", { required: true })}
          placeholder="Повторите пароль"
          className={clsx("bg-[#CECECE] py-3 px-7 rounded", styles.shadow)}
        />
        <p className="font-light text-sm text-white">
          Нажимая кнопку “Зарегестрироваться”, вы даете согласие на обработку
          персональных данных
        </p>
        <Button
          variant="register"
          size="lg"
          className={styles.shadow}
          type="submit"
        >
          Зарегестрироваться
        </Button>
      </form>
      <Link href="/login" className="font-medium text-2xl">
        Есть уже аккаунт? <b className="underline">Войти</b>
      </Link>
    </div>
  );
};

export default RegisterForm;
