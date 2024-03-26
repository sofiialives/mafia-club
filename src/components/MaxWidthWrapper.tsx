import clsx from "clsx";
import React from "react";

interface MaxWidthWrapperProps {
  className?: string;
  children: React.ReactNode;
}

export default function MaxWidthWrapper({
  className,
  children,
}: MaxWidthWrapperProps) {
  return (
    <section
      className={clsx(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-14",
        className
      )}
    >
      {children}
    </section>
  );
}
