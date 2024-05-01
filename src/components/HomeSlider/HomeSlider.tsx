"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img_1 from "../../../public/images/img_1.jpg";
import Img_2 from "../../../public/images/img_2.jpg";
import Img_3 from "../../../public/images/img_3.jpg";
import Img_4 from "../../../public/images/img_4.jpg";
import Img_5 from "../../../public/images/img_5.jpg";
import Img_6 from "../../../public/images/img_6.jpg";



type Props = {};

const images = [
  { id: "img1", img: Img_1 },
  { id: "img2", img: Img_2 },
  { id: "img3", img: Img_3 },
  { id: "img4", img: Img_4 },
  { id: "img5", img: Img_5 },
  { id: "img6", img: Img_6 },
];

const HomeSlider = (props: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="max-w-[1400px]">
      <Slider {...settings} className="flex justify-center items-center">
        {images.map((image) => (
          <Image
            key={image.id}
            src={image.img}
            priority={true}
            width={1400}
            alt="Group foto"
            className=" object-cover h-auto w-[1400px]"
          />
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
