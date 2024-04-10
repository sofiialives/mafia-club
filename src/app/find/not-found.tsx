import Link from "next/link";
import React from "react";

interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
