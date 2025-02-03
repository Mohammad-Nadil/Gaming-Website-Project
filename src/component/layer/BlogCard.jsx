import React from "react";
import { PiClockCountdownFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const BlogCard = ({ img }) => {
  return (
    <Link to="/blog/article">
      <div className="bg-secondary-bg rounded-3xl p-2 sm:p-3 md:p-4 xl:p-6 flex  md:flex-col gap-x-3 gap-y-6 h-full w-full">
        {/* Ensure the wrapper has relative positioning */}
        <div className="relative w-2/5 md:w-full aspect- sm:aspect-[487/297]">
          <img
            className="absolute inset-0 w-full h-full rounded-2xl object-cover"
            src={img}
            alt="Blog banner"
          />
        </div>
        <div className="details w-3/5 md:w-auto flex flex-col gap-y-3 sm:gap-y-7 2xl:px-5">
          <div className="title">
            <h2 className="capitalize text-sm sm:text-2xl 2xl:text-3xl text-white">
              Game keys: The best websites for affordable gaming deals
            </h2>
          </div>
          <div className="time text-sm sm:text-xl 2xl:text-2xl flex flex-col gap-y-1 sm:gap-y-2.5">
            <div className="date text-Gr-end">
              <p>19 Sep, 23</p>
            </div>
            <div className="duration flex items-center gap-x-2 text-primary">
              <PiClockCountdownFill />
              <p className="text-white">3 min read</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
