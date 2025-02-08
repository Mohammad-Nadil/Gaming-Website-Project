import React from "react";
import { IoMdEye } from "react-icons/io";
import { PiClockCountdownFill } from "react-icons/pi";
import forza from '../../assets/forza.jpg'
import { Link } from "react-router-dom";

const ArticleCard = () => {
  return (
    <Link to="/blog" >
    <div className="font-openSans bg-secondary-bg rounded-xl lg:rounded-3xl xl:rounded-[33px] p-3 sm:p-5 lg:p-4 xl:p-5 2xl:py-7 2xl:px-6 flex gap-x-3 sm:gap-x-6 lg:gap-x-5 xl:gap-x-9 items-center">
      <div className="img aspect-[373/297] w-[45.65%] rounded-lg lg:rounded-2xl xl:rounded-3xl overflow-hidden">
        <img
          className=" h-full w-full object-cover "
          src={forza}
          alt={forza}
        />
      </div>
      <div className="text w-1/2 flex flex-col gap-y-1.5 sm:gap-y-7 lg:gap-y-4 2xl:gap-y-7">
        <div className="heading text-white text-sm sm:text-2xl lg:text-base  xl:text-2xl 2xl:text-3xl">
          <h2>Game Keys The Best Websites for Affordable Gaming Deals</h2>
        </div>
        <div className="info flex flex-col gap-y-1.5 sm:gap-y-5 lg:gap-y-2 2xl:gap-y-5 ">
          <p className=" text-sm sm:text-[1.75rem] lg:text-sm  2xl:text-[1.75rem] text-Gr-end" >19 Sep, 23</p>
          <div className=" flex gap-x-6 text-sm sm:text-xl lg:text-sm xl:text-lg 2xl:text-xl text-white lg:text-[#787A7D]">
            <div className="time flex gap-x-2 items-center">
            <PiClockCountdownFill className=" lg:text-2xl  2xl:text-3xl"  />
            <p>3 min read</p>
            </div>
            <div className="views hidden sm:flex gap-x-2 items-center  ">
            <IoMdEye className=" lg:text-2xl  2xl:text-3xl" />
            <p>1230</p>
            </div>
          </div>
        </div>
      </div>
    </div></Link>
  );
};

export default ArticleCard;
