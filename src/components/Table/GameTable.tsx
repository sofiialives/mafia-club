import React from "react";

interface GameTableProps {
  headers: React.ReactNode;
  children?: React.ReactNode;
}

export default function GameTable({ headers, children }: GameTableProps) {
  return (
    <table className="w-full">
      <thead>{headers}</thead>
      <tbody>{children}</tbody>
    </table>
  );
}
