import React from "react";
import icon from "../../assets/star.svg";

const ReviewCard = ({ image, name, star, review, className }) => {
  return (
    <div
      className={`p-[2px] mx-2  md:mx-5 bg-gradient-to-b from-Gr-start to-Gr-end rounded-lg  ${className}`}
    >
      <div className=" py-4 md:py-11 px-[1.125rem] md:px-12 bg-primary-bg rounded-lg flex flex-col gap-y-1.5 md:gap-y-6">
        <div className="detail flex items-center gap-x-3">
          <div className="image border border-primary rounded-full">
            <img
              src={image}
              alt={name}
              className=" w-10 md:w-14 h-10 md:h-14 border border-primary-bg rounded-full object-cover"
            />
          </div>
          <div className="nameStar">
            <div className="name text-white font-semibold text-xs md:text-2xl">
              {name}
            </div>
            <div className="star flex items-center gap-1">
              {Array(star)
                .fill(0)
                .map((_, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt="Star"
                    className=" w-3 md:w-6 h-3 md:h-6"
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="reviewText">
          <p className="font-openSans text-xs md:text-2xl text-white">
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
