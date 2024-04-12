"use client";
import React, { useState } from "react";
import Joi from "joi";
import { FieldError, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Link from "next/link";
import Image from "next/image";
import Eyes from "@/public/images/eyes.png";

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

const AuthForm = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleRepeatPassword, setIsVisibleRepeatPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  const handlerVisible = () => {
    setIsVisiblePassword((prev) => !prev);
  };
    const handlerRepeatVisible = () => {
      setIsVisibleRepeatPassword((prev) => !prev);
    };

  const onSubmit = (data: any) => console.log(data);
  const onSignIn = async (e: any) => {
    // const nameButton = e.target.innerText;
    console.log(e);
    // if (nameButton === 'Google') {

    // }
  };

  return (
    <div className="flex flex-col   items-center gap-4  ">
      <h2 className="text-[32px] text-center font-bold mt-4">Регистрация</h2>

      <form
        className="flex flex-col items-center gap-7"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-[600px] h-[60px]  px-4 text-xl text-black bg-[#CECECE;]"
          placeholder="Ваше имя:"
          {...register("name")}
        />
        <p>{(errors.name as FieldError)?.message}</p>

        <input
          className="w-[600px] h-[60px] px-4 text-xl text-black bg-[#CECECE]"
          placeholder="Електронная почта:"
          {...register("email")}
        />
        <p>{(errors.email as FieldError)?.message}</p>

        <div className="relative  w-[600px] h-[60px]">
          <input
            className="w-full h-full pl-4 pr-16 text-xl text-black bg-[#CECECE]"
            placeholder="Пароль:"
            type={isVisiblePassword ? "string" : "password"}
            {...register("password")}
          />
          <button
            onClick={handlerVisible}
            className="absolute top-[18px] right-2"
          >
            <Image src={Eyes} alt="глаз" />
          </button>
        </div>
        <p>{(errors.password as FieldError)?.message}</p>

        <div className="relative w-[600px] h-[60px]">
          <input
            className="w-full  h-full pl-4 pr-16 text-xl text-black bg-[#CECECE]"
            placeholder="Повторный пароль:"
            type={isVisibleRepeatPassword ? "string" : "password"}
            {...register("repeat_password")}
          />
          <button
            onClick={handlerRepeatVisible}
            className="absolute top-[18px] right-2"
          >
            <Image src={Eyes} alt="глаз" />
          </button>
        </div>
        <p>{(errors.repeat_password as FieldError)?.message}</p>
        <input
          className="h-[60px] w-[368px]  text-xl text-[#FDD901]  bg-[#202020] cursor-pointer transform duration-500 hover:scale-110 focus:scale-110"
          type="submit"
          value="Зарегистрироваться"
        />
      </form>
      <Link
        href="/login"
        className="text-center text-xl text-[#FDD901] transform duration-500 hover:rounded-sm hover:border-2 hover:border-[#FDD901] focus:rounded-sm focus:border-2 focus:border-[#FDD901]"
      >
        Войти
      </Link>
    </div>
  );
};

export default AuthForm;
