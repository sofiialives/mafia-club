import cn from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  isFoul?: boolean;
}

export default function Button({
  children,
  className,
  variant,
  size,
  isFoul,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ className, variant, size }), {
        "bg-black": isFoul,
      })}
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
        protocol: "w-12 h-6 border border-black shadow-inner",
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
