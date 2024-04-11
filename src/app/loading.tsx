import Image from "next/image";
import React from "react";
import Man from "../../public/images/38jO.gif"

interface Loading {}

export default function Loading({}: Loading) {
  return (
    <div>
      <Image src={Man} alt="Man in cap smoking" width={400} height={600} />
    </div>
  );
}
