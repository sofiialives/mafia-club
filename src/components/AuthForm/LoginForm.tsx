"use client";
import React from "react";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import Link from "next/link";
import Image from "next/image";
import Eyes from "@/public/images/eyes.png";
import styles from "@/components/Table/input.module.css";
import Button from "../Button";
import { loginUser, registerUser } from "@/lib/auth/action";
import { useForm } from "react-hook-form";
import cn from "@/utils/cn";

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

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = (data: any) => {
    loginUser(data);
    reset();
  };

  return (
    <div className="flex flex-col items-center p-20 gap-8">
      <h2 className="text-4xl">Вход на сайт</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-7 w-full font-medium text-3xl text-black"
      >
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="mail@mail.com"
          className={cn("bg-[#FDD901] py-3 px-7 rounded", styles.shadow)}
        />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Введите пароль"
          className={cn("bg-[#FDD901] py-3 px-7 rounded", styles.shadow)}
        />
        <Button
          variant="register"
          size="lg"
          className={styles.shadow}
          type="submit"
        >
          Войти
        </Button>
      </form>
      <Link href="/register" className="font-medium text-2xl">
        Еще нет аккаунта? <b className="underline">Регистрация</b>
      </Link>
    </div>
  );
};

export default LoginForm;
