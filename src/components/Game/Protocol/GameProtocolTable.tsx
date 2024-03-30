"use client";
import React from "react";
import ProtocolHead from "./ProtocolHead";
import ProtocolBody from "./ProtocolBody";

const GameProtocolTable = () => {
  return (
    <table className="border-collapse border">
      <thead>
        <ProtocolHead />
      </thead>
      <tbody>
        <ProtocolBody />
      </tbody>
    </table>
  );
};

export default GameProtocolTable;
