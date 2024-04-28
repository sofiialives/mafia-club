import LoginForm from "@/components/AuthForm/LoginForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <section className="bg-[#202020]">
      <MaxWidthWrapper className="flex items-center justify-center py-20">
        <div className="h-[556px] w-[700px] bg-black">
          <LoginForm />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default LoginPage;
