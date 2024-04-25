import LoginForm from "@/components/AuthForm/LoginForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <MaxWidthWrapper className="flex items-center justify-center bg-[#202020] py-20">
      <div className="h-[556px] w-[700px] bg-black">
        <LoginForm />
      </div>
    </MaxWidthWrapper>
  );
};

export default LoginPage;
