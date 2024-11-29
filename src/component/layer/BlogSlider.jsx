import React, { useState } from "react";
import Slider from "react-slick";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import ArticleCard from "./ArticleCard";


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


const BlogSlider = () => {
  let [active, setActive] = useState(0);
  let settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        // Tailwind's lg: 1024px
        breakpoint: 1279,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        // Tailwind's md: 768px
        breakpoint: 1023,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        // Tailwind's sm: 640px
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider className="" {...settings}>
        <div className="!flex flex-col lg:flex-row px-0.5  lg:px-3 2xl:px-5 gap-y-4 gap-x-5 2xl:gap-x-8 ">
          <ArticleCard />
          <ArticleCard />
        </div>
        <div className="!flex flex-col lg:flex-row px-0.5  lg:px-3 2xl:px-5 gap-y-4 gap-x-5 2xl:gap-x-8 ">
          <ArticleCard />
          <ArticleCard />
        </div>
        <div className="!flex flex-col lg:flex-row px-0.5  lg:px-3 2xl:px-5 gap-y-4 gap-x-5 2xl:gap-x-8 ">
          <ArticleCard />
          <ArticleCard />
        </div>
        <div className="!flex flex-col lg:flex-row px-0.5  lg:px-3 2xl:px-5 gap-y-4 gap-x-5 2xl:gap-x-8 ">
          <ArticleCard />
          <ArticleCard />
        </div>
      </Slider>
    </div>
  );
};

export default BlogSlider;
