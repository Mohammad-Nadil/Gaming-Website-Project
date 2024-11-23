import React from "react";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";

const ReviewSlider = ({ items }) => {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 736,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {items.map((review, index) => (
          <ReviewCard
            key={index}
            image={review.image}
            name={review.name}
            star={review.star}
            review={review.reviewText}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
