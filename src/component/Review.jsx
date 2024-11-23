import React from "react";
import ReviewCard from "./layer/ReviewCard";
import Container from "./layer/Container";
import line from "../assets/gradientLine.png";
import star from "../assets/star.svg";
import sagor from "../assets/sagor.png";
import aryan from "../assets/aryan.png";
import farabi from "../assets/farabi.png";
import ibrahim from "../assets/ibrahim.png";
import saad from "../assets/saad.png";
import ReviewSlider from "./layer/ReviewSlider";

const Review = () => {
  let reviews = [
    {
      name: "Abdul Ahad",
      image: sagor,
      star: 5,
      reviewText:
        "Lorem Ipsum is simply dummy text of the  printing and typesetting industry..",
    },
    {
      name: "Aryan",
      image: aryan,
      star: 5,
      reviewText:
        "Lorem Ipsum is simply dummy text of the  printing and typesetting industry..",
    },
    {
      name: "Farabi",
      image: farabi,
      star: 5,
      reviewText:
        "Lorem Ipsum is simply dummy text of the  printing and typesetting industry..",
    },
    {
      name: "Ibrahim",
      image: ibrahim,
      star: 5,
      reviewText:
        "Lorem Ipsum is simply dummy text of the  printing and typesetting industry..",
    },
    {
      name: "Saad",
      image: saad,
      star: 5,
      reviewText:
        "Lorem Ipsum is simply dummy text of the  printing and typesetting industry..",
    },
  ];
  return (
    <div>
      <Container className="flex items-center py-16 md:py-32 gap-x-16 relative ">
        <div className="left w-1/3 sm:w-1/4 lg:w-1/3 xl:w-1/6  flex flex-col items-center gap-y-2 lg:gap-y-6 ">
          <p className="flex flex-col justify-center items-center font-openSans font-bold text-white text-sm sm:text-2xl lg:text-4xl">
            Trustpilot <span>Reviews</span>
          </p>
          <div className="img">
            <img className="w-full h-0.5" src={line} alt="line" />
          </div>
          <div className="star flex items-center gap-x-1 lg:gap-x-1.5 text-base lg:text-5xl font-bold text-Gr-start">
            <p>5.0</p>
            <img className=" h-5 lg:h-10 w-5 lg:w-10" src={star} alt="star" />
          </div>
        </div>
        <div className="right">
          <div className="slide absolute top-1/2 -translate-y-1/2 left-1/3 sm:left-1/4 lg:left-1/3 xl:left-1/4 w-[200%]">
            <ReviewSlider items={reviews} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Review;
