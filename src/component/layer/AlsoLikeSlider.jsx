import React, { useState } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import forza from "../../assets/forza.jpg";
import seikro from "../../assets/seikro.png";
import ghost from "../../assets/ghostRunner.png";
import farcry from "../../assets/farCry.png";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="border  absolute top-1/2 -translate-y-1/2 left-full text-white text-2xl h-14 w-14 rounded-full grid place-content-center duration-300 hover:text-primary-bg hover:bg-white -translate-x-full 2xl:translate-x-1/2 "
      onClick={onClick}
    >
      <FaAngleRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="border e absolute top-1/2 -translate-y-1/2 right-full text-white text-2xl z-50  h-14 w-14 rounded-full grid translate-x-full 2xl:-translate-x-1/2 place-content-center duration-300 hover:text-primary-bg hover:bg-white "
      onClick={onClick}
    >
      <FaAngleLeft />
    </div>
  );
}
const AlsoLikeSlider = () => {
    let items = [
        {
          name: "Sekiro Shadows ",
          image: seikro,
          discount: true,
          discountPercent: "25",
          price: "59.99",
          priceFrom: "70",
          star: 5,
          playstation: true,
          xbox: true,
          nintendo: false,
          user: true,
          productKey: true,
          available: true,
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
          available: true,
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
          available: true,
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
          available: true,
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
          available: true,
        },
        {
          name: "Sekiro Shadows ",
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
          available: true,
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
          available: true,
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
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: (dots) => (
          <div>
            <ul className="!w-full flex justify-center gap-x-3 py-3"> {dots} </ul>
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
              slidesToShow: 2,
              slidesToScroll: 1,
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
              arrows: false
            },
          },
          {
            // Tailwind's md: 768px
            breakpoint: 1023,
            settings: {
              dots: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false
            },
          },
          {
            // Tailwind's sm: 640px
            breakpoint: 767,
            settings: {
              dots: true,
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
      return (
        <div>
          <Slider className="px-3" {...settings}>
            <div className="!flex !flex-col xl:!flex-row    !h-full ">
              <ProductCard
                name={items[0].name}
                image={items[0].image}
                discount={items[0].discount}
                discountPercent={items[0].discountPercent}
                from={items[0].priceFrom}
                price={items[0].price}
                star={items[0].star}
                playstationIcon={items[0].playstation}
                xboxIcon={items[0].xbox}
                nintendoIcon={items[0].nintendo}
                userIcon={items[0].user}
                productKeyIcon={items[0].productKey}
                available={items[0].available}
                className="mx-1.5 sm:mx-3 lg:mx-2 my-1 sm:my-3 xl:!w-1/2 "
                Class=" !bg-[#1E2127] "
              />
              <ProductCard
                name={items[1].name}
                image={items[1].image}
                discount={items[1].discount}
                discountPercent={items[1].discountPercent}
                from={items[1].priceFrom}
                price={items[1].price}
                star={items[1].star}
                playstationIcon={items[1].playstation}
                xboxIcon={items[1].xbox}
                nintendoIcon={items[1].nintendo}
                userIcon={items[1].user}
                productKeyIcon={items[1].productKey}
                available={items[1].available}
                className="mx-1.5 sm:mx-3 lg:mx-2 my-1 sm:my-3 xl:!w-1/2 "
                Class=" !bg-[#1E2127]"
              />
            </div>
            <div className="!flex !flex-col xl:!flex-row    !h-full ">
              <ProductCard
                name={items[2].name}
                image={items[2].image}
                discount={items[2].discount}
                discountPercent={items[2].discountPercent}
                from={items[2].priceFrom}
                price={items[2].price}
                star={items[2].star}
                playstationIcon={items[2].playstation}
                xboxIcon={items[2].xbox}
                nintendoIcon={items[2].nintendo}
                userIcon={items[2].user}
                productKeyIcon={items[2].productKey}
                available={items[2].available}
                className="mx-1.5 sm:mx-3 lg:mx-2 my-1 sm:my-3 xl:!w-1/2 "
                Class=" !bg-[#1E2127] "
              />
              <ProductCard
                name={items[3].name}
                image={items[3].image}
                discount={items[3].discount}
                discountPercent={items[3].discountPercent}
                from={items[3].priceFrom}
                price={items[3].price}
                star={items[3].star}
                playstationIcon={items[3].playstation}
                xboxIcon={items[3].xbox}
                nintendoIcon={items[3].nintendo}
                userIcon={items[3].user}
                productKeyIcon={items[3].productKey}
                available={items[3].available}
                className="mx-1.5 sm:mx-3 lg:mx-2 my-1 sm:my-3 xl:!w-1/2 "
                Class=" !bg-[#1E2127]"
              />
            </div>
            <div className="!flex !flex-col xl:!flex-row    !h-full ">
              <ProductCard
                name={items[4].name}
                image={items[4].image}
                discount={items[4].discount}
                discountPercent={items[4].discountPercent}
                from={items[4].priceFrom}
                price={items[4].price}
                star={items[4].star}
                playstationIcon={items[4].playstation}
                xboxIcon={items[4].xbox}
                nintendoIcon={items[4].nintendo}
                userIcon={items[4].user}
                productKeyIcon={items[4].productKey}
                available={items[4].available}
                className="mx-1.5 sm:mx-3 lg:mx-2 my-1 sm:my-3 xl:!w-1/2 "
                Class=" !bg-[#1E2127] "
              />
              <ProductCard
                name={items[5].name}
                image={items[5].image}
                discount={items[5].discount}
                discountPercent={items[5].discountPercent}
                from={items[5].priceFrom}
                price={items[5].price}
                star={items[5].star}
                playstationIcon={items[5].playstation}
                xboxIcon={items[5].xbox}
                nintendoIcon={items[5].nintendo}
                userIcon={items[5].user}
                productKeyIcon={items[5].productKey}
                available={items[5].available}
                className="mx-1.5 sm:mx-3 lg:mx-2 my-1 sm:my-3 xl:!w-1/2 "
                Class=" !bg-[#1E2127]"
              />
            </div>
            <div className="!flex !flex-col xl:!flex-row    !h-full ">
              <ProductCard
                name={items[6].name}
                image={items[6].image}
                discount={items[6].discount}
                discountPercent={items[6].discountPercent}
                from={items[6].priceFrom}
                price={items[6].price}
                star={items[6].star}
                playstationIcon={items[6].playstation}
                xboxIcon={items[6].xbox}
                nintendoIcon={items[6].nintendo}
                userIcon={items[6].user}
                productKeyIcon={items[6].productKey}
                available={items[6].available}
                className="mx-1.5 sm:mx-3 lg:mx-2 my-1 sm:my-3 xl:!w-1/2 "
                Class=" !bg-[#1E2127] "
              />
              <ProductCard
                name={items[7].name}
                image={items[7].image}
                discount={items[7].discount}
                discountPercent={items[7].discountPercent}
                from={items[7].priceFrom}
                price={items[7].price}
                star={items[7].star}
                playstationIcon={items[7].playstation}
                xboxIcon={items[7].xbox}
                nintendoIcon={items[7].nintendo}
                userIcon={items[7].user}
                productKeyIcon={items[7].productKey}
                available={items[7].available}
                className="mx-1.5 sm:mx-3 lg:mx-2 my-1 sm:my-3 xl:!w-1/2 "
                Class=" !bg-[#1E2127]"
              />
            </div>
          </Slider>
        </div>
  )
}

export default AlsoLikeSlider
