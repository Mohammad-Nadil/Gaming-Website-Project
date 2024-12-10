import React from "react";
import Container from "./layer/Container";
import line from "../assets/lineHorizontal.png";
import CustomBtn from "./layer/CustomBtn";
import AlsoLikeSlider from "./layer/AlsoLikeSlider";

const AlsoLike = () => {
  return (
    <div>
      <Container className="pt-10 md:pt-20 xl:pt-40 px-0 2xl:px-4">
        <div className="div h-full w-full bg-primary-bg rounded-3xl  py-8 xl:pt-14 xl:pb-9 flex flex-col gap-y-9">
          <div className="top text-white font-openSans flex justify-between items-center px-4 sm:px-8 xl:px-20">
            <div
              className="head flex items-center
                  gap-x-3 xl:gap-x-6"
            >
              <div className="heading">
                <p className=" sm:text-4xl text-nowrap lg:text-wrap xl:text-nowrap">
                You May Also Like
                </p>
              </div>
            </div>
            <div className=" w-2/3  ">
              <img className="w-full" src={line} alt={line} />
            </div>

            <div className="btn ">
              <CustomBtn
                text="Browse All"
                className="bg-none text-sm text-nowrap sm:text-base border-primary border text-primary "
                href="/"
              />
            </div>
          </div>
          <div>
            <AlsoLikeSlider/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AlsoLike
