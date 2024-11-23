import React, { useState } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import forza from "../../assets/forza.jpg";
import seikro from "../../assets/seikro.png";
import ghost from "../../assets/ghostRunner.png";
import farcry from "../../assets/farCry.png";

const NewArrivalsSlider = () => {
//   let items = [1, 2, 3, 4];

  let items = [
    {
      name: "Sekiro Shadows Die once",
      image: seikro,
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
    },
    {
      name: "Ghost Runner",
      image: ghost,
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
    },
    {
      name: "Forza Horizon 6",
      image: forza,
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
    },
    {
      name: "Farcry 6",
      image: farcry,
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
    },
    {
      name: "Sekiro Shadows Die once",
      image: seikro,
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
    },
    {
      name: "Ghost Runner",
      image: ghost,
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
    },
    {
      name: "Forza Horizon 6",
      image: forza,
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
    },
    {
      name: "Farcry 6",
      image: farcry,
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
    slidesToShow: 4,
    slidesToScroll: 1,
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
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1
        },
      },
      {
        // Tailwind's lg: 1024px
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        // Tailwind's md: 768px
        breakpoint: 1023,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        // Tailwind's sm: 640px
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //const items1 = items.slice(0, Math.floor(items.length / 2));
  //const items2 = items.slice(Math.floor(items.length / 2));


  return (
    <div>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div className="flex flex-col !gap-y-5">
            <ProductCard
              key={index}
              name={item.name}
              image={item.image}
              discount={item.discount}
              discountPercent={item.discountPercent}
              from={item.priceFrom}
              price={item.price}
              star={item.star}
              playstationIcon={item.playstation}
              xboxIcon={item.xbox}
              nintendoIcon={item.nintendo}
              userIcon={item.user}
              productKeyIcon={item.productKey}
              className="mx-1.5 sm:mx-3 lg:mx-3.5 my-2 sm:my-5"
              Class=" !bg-[#1E2127] "
            />
            <ProductCard
              key={index}
              name={item.name}
              image={item.image}
              discount={item.discount}
              discountPercent={item.discountPercent}
              from={item.priceFrom}
              price={item.price}
              star={item.star}
              playstationIcon={item.playstation}
              xboxIcon={item.xbox}
              nintendoIcon={item.nintendo}
              userIcon={item.user}
              productKeyIcon={item.productKey}
              className="mx-1.5 sm:mx-3 lg:mx-3.5 my-2 sm:my-5"
              Class=" !bg-[#1E2127]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivalsSlider;
