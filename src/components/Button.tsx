import cn from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className,
  variant,
  size,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ className, variant, size }))}
      {...rest}
    >
      {children}
    </button>
  );
}

const buttonVariants = cva(
  "bg-[#FDD901] rounded-[42px] text-black text-center",
  {
    variants: {
      variant: {
        primary: "py-2 px-4",
        secondary: "py-3 px-7",
      },
      size: {
        sm: "text-sm font-normal",
        md: "text-base font-bold",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
