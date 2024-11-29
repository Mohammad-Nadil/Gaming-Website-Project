import React from "react";
import Container from "./layer/Container";
import mail from "../assets/mail.png";
import CustomBtn from "./layer/CustomBtn";

const Newsletter = () => {
  return (
    <div className="pt-10 md:pt-20 xl:pt-40 px-3 xl:px-0 ">
      <Container className=" flex !px-0.5 py-0.5  bg-gradient-to-b from-Gr-start to-Gr-end rounded-[1.875rem] font-openSans text-white">
        <div className="main !h-full !w-full bg-secondary-bg rounded-[1.75rem] px-4 py-3 sm:px-10 sm:py-8 2xl:py-14 2xl:px-12 flex flex-col lg:flex-row gap-y-6 ">
          <div className="left  lg:w-1/2 flex items-center gap-x-6 "> 
            <div className="img aspect-square w-20">
              <img
                className="h-full w-full object-cover"
                src={mail}
                alt={mail}
              />
            </div>
            <div className="text ">
              <h2 className=" text-lg sm:text-3xl xl:text-4xl">Sign up For Newsletter</h2>
              <p className=" text-sm sm:text-base xl:text-2xl opacity-60">
                Stay tuned! Receive News and Discounts on your email
              </p>
            </div>
          </div>
          <div className="right  lg:w-1/2 flex gap-x-3 items-center">
            <input
              className="w-full py-1.5 px-2.5 md:py-4 md:px-5 rounded-md sm:placeholder:text-2xl placeholder:text-black outline-none text-black sm:text-2xl "
              placeholder="your@email.com"
              type="text"
              name=""
              id=""
            />
            <CustomBtn text="Subscribe" className="sm:text-xl" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
