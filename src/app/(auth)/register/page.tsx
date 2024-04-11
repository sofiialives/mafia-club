import AuthForm from "@/components/AuthForm/AuthForm";
import React from "react";

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <section className="flex justify-center content-center bg-[#202020] ">
      <div className="w-[790px] h-[734px] py-[82px] mb-[74px] mt-[74px] bg-black">
        <AuthForm />
      </div>
    </section>
  );
};

export default RegisterPage;
