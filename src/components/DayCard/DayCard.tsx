import Image from "next/image";
import React from "react";

type DayCardProps = {
  card: {
    id: string;
    img: string; // Тип для Next.js Image
    day: string;
    desc: string;
  };
};

const DayCard: React.FC<DayCardProps> = ({ card }) => {
  return (
    <li>
      <div className=" relative rounded-[30px] overflow-hidden">
        <Image src={card.img} alt={card.id} width={335} height={335} />
        <div className="bg-[#fdd9017f]  absolute flex flex-wrap justify-center  bottom-0 left-0 w-[335px] h-[66px]">
          <h3 className="block font-normal text-[22px] leading-7 text-black w-full text-center">
            {card.day}
          </h3>
          <p className=" text-black text-[16px] ">{card.desc}</p>
        </div>
      </div>
    </li>
  );
};

export default DayCard;
