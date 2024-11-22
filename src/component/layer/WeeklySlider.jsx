import React from "react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import seikro from "../../assets/seikro.png";
import ghost from "../../assets/ghostRunner.png";
import forza from "../../assets/forza.jpg";
import farcry from "../../assets/farCry.png";

const WeeklySlider = ({
  name,
  image,
  discount,
  discountPercent,
  from,
  price,
  star,
  playstationIcon,
  xboxIcon,
  nintendoIcon,
  userIcon,
  productKeyIcon,
}) => {
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
  ];

  let settings = {
    dots: false,
    arrows:false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      {items.map((item, index) => (
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
                  className="!bg-none mx-2"
                  Class=" !bg-[#1E2127]"
                />
              ))}
      </Slider>
    </div>
  );
};

export default WeeklySlider;

{
  /* <ProductCard
  name={name}
  image={image}
  discount={discount}
  discountPercent={discountPercent}
  from={from}
  price={price}
  star={star}
  playstationIcon={playstationIcon}
  xboxIcon={xboxIcon}
  nintendoIcon={nintendoIcon}
  userIcon={userIcon}
  productKeyIcon={productKeyIcon}
  className="!bg-none"
  Class=" !bg-[#1E2127]"
/>; */
}
