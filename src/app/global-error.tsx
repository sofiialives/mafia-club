"use client";
import React from "react";

interface GlobalErrorProps {}

export default function GlobalError({}: GlobalErrorProps) {
  return (
    <html>
      <body>
        <p>Something globally went wrong</p>
      </body>
    </html>
  );
}
