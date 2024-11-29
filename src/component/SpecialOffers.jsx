import React, { useState } from "react";
import CustomBtn from "./layer/CustomBtn";
import SmallCards from "./layer/SmallCards";
import forza from "../assets/forza.jpg";
import farcry from "../assets/farCry.png";
import seikro from "../assets/seikro.png";
import ghost from "../assets/ghostRunner.png";
import Slider from "react-slick";
import games from "../games";

const SpecialOffers = () => {
  let items = [
    {
      name: "Sekiro Shadows ",
      thumbnail: seikro,
      discount: true,
      discountPercent: "25",
      price: "59.99",
      priceFrom: "70",
      star: 5,
      playstation: true,
      xbox: true,
      nintendo: true,
      user: true,
      productKey: true,
      available: true,
    },
    {
      name: "Ghost Runner",
      thumbnail: ghost,
      discount: true,
      discountPercent: "25",
      price: "79.99",
      priceFrom: "50",
      star: 4,
      playstation: true,
      xbox: false,
      nintendo: false,
      user: true,
      productKey: false,
      available: true,
    },
    {
      name: "Forza Horizon 6",
      thumbnail: forza,
      discount: true,
      discountPercent: "25",
      price: "55.99",
      priceFrom: "40",
      star: 5,
      playstation: false,
      xbox: false,
      nintendo: true,
      user: true,
      productKey: true,
      available: true,
    },
    {
      name: "Farcry 6",
      thumbnail: farcry,
      discount: true,
      discountPercent: "25",
      price: "69.99",
      priceFrom: "65",
      star: 3,
      playstation: true,
      xbox: false,
      nintendo: true,
      user: true,
      productKey: false,
      available: true,
    },
    {
      name: "Farcry 6",
      thumbnail: farcry,
      discount: false,
      discountPercent: "25",
      price: "69.99",
      priceFrom: "65",
      star: 3,
      playstation: true,
      xbox: false,
      nintendo: true,
      user: true,
      productKey: false,
      available: true,
    },
    {
      name: "Sekiro Shadows ",
      thumbnail: seikro,
      discount: true,
      discountPercent: "25",
      price: "59.99",
      priceFrom: "70",
      star: 5,
      playstation: true,
      xbox: true,
      nintendo: true,
      user: true,
      productKey: true,
      available: true,
    },
    {
      name: "Ghost Runner",
      thumbnail: ghost,
      discount: true,
      discountPercent: "25",
      price: "79.99",
      priceFrom: "50",
      star: 4,
      playstation: true,
      xbox: false,
      nintendo: false,
      user: true,
      productKey: false,
      available: true,
    },
    {
      name: "Forza Horizon 6",
      thumbnail: forza,
      discount: true,
      discountPercent: "25",
      price: "55.99",
      priceFrom: "40",
      star: 5,
      playstation: false,
      xbox: false,
      nintendo: true,
      user: true,
      productKey: true,
      available: true,
    },
  ];
  let [active, setActive] = useState(0);
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 0,
    initialSlide: 0,
    appendDots: (dots) => (
      <div>
        <ul className="w-full flex justify-center gap-x-3 py-3"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-2.5 h-2.5 rounded-full text-transparent  ${
          active == i ? "  bg-white " : "  bg-primary/30 "
        }  `}
      >
        {i + 1}
      </div>
    ),
    beforeChange: (a, b) => {
      setActive(b);
    },
    responsive: [
      {
        // Tailwind's xl: 1280px
        breakpoint: 1535,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 0,
        },
      },
      {
        // Tailwind's lg: 1024px
        breakpoint: 1279,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 0,
          infinite: true,
          dots: false,
        },
      },
      {
        // Tailwind's md: 768px
        breakpoint: 1023,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        // Tailwind's sm: 640px
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-y-3 sm:gap-y-6 md:gap-y-8 lg:gap-y-3 xl:gap-y-6 2xl:gap-y-11">
      <div className="heading flex justify-between items-center lg:px-5 xl:px-7">
        <p className=" text-2xl sm:text-4xl lg:text-lg 2xl:text-4xl text-white">
          Special Offers
        </p>
        <div className="btn ">
          <CustomBtn
            text="Browse All"
            className="bg-none !text-sm sm:!text-2xl lg:!text-sm 2xl:!text-2xl py-1.5 lg:py-1.5 lg:px-2 2xl:py-3 px-2 2xl:px-4 border-primary border text-primary "
            href="/"
          />
        </div>
      </div>
      <div className="cards flex flex-col gap-y-5">
        <Slider {...settings}>
          <div className="flex flex-col  gap-y-5">
            <SmallCards
              image={items[0].thumbnail}
              name={items[0].name}
              discount={items[0].discount}
              discountPercent={items[0].discountPercent}
              from={items[0].priceFrom}
              price={items[0].price}
            />
            <SmallCards
              image={items[1].thumbnail}
              name={items[1].name}
              discount={items[1].discount}
              discountPercent={items[1].discountPercent}
              from={items[1].priceFrom}
              price={items[1].price}
            />
            <SmallCards
              image={items[2].thumbnail}
              name={items[2].name}
              discount={items[2].discount}
              discountPercent={items[2].discountPercent}
              from={items[2].priceFrom}
              price={items[2].price}
            />{" "}
            <SmallCards
              image={items[3].thumbnail}
              name={items[3].name}
              discount={items[3].discount}
              discountPercent={items[3].discountPercent}
              from={items[3].priceFrom}
              price={items[3].price}
              className="hidden lg:flex"
            />
            <SmallCards
              image={items[5].thumbnail}
              name={items[5].name}
              discount={items[5].discount}
              discountPercent={items[5].discountPercent}
              from={items[5].priceFrom}
              price={items[5].price}
              className="hidden lg:flex"
            />
            <SmallCards
              image={items[6].thumbnail}
              name={items[6].name}
              discount={items[6].discount}
              discountPercent={items[6].discountPercent}
              from={items[6].priceFrom}
              price={items[6].price}
              className="hidden lg:flex"
            />
          </div>
          <div className="flex flex-col gap-y-5">
            <SmallCards
              image={items[3].thumbnail}
              name={items[3].name}
              discount={items[3].discount}
              discountPercent={items[3].discountPercent}
              from={items[3].priceFrom}
              price={items[3].price}
              className="flex lg:hidden"
            />
            <SmallCards
              image={items[5].thumbnail}
              name={items[5].name}
              discount={items[5].discount}
              discountPercent={items[5].discountPercent}
              from={items[5].priceFrom}
              price={items[5].price}
              className="flex lg:hidden"
            />
            <SmallCards
              image={items[6].thumbnail}
              name={items[6].name}
              discount={items[6].discount}
              discountPercent={items[6].discountPercent}
              from={items[6].priceFrom}
              price={items[6].price}
              className="flex lg:hidden"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SpecialOffers;
