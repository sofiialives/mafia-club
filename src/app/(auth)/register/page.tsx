import RegisterForm from "@/components/AuthForm/RegisterForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <MaxWidthWrapper className="flex items-center justify-center bg-[#202020] py-20">
      <div className="h-[790px] w-[700px] bg-black">
        <RegisterForm />
      </div>
    </MaxWidthWrapper>
  );
};

export default RegisterPage;
