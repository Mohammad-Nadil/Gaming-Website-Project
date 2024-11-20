import React from "react";
import Container from "./layer/Container";
import ProductCard from "./layer/ProductCard";
import line from '../assets/lineHorizontal.png'
import CustomBtn from "./layer/CustomBtn";

const WeeklyDeals = () => {
    let items = [
        { name:"", image:"", },
    ]
  return (
    <div>
      <Container >
        <div className="p-0.5 px-0.5 bg-gradient-to-t from-Gr-start to-Gr-end rounded-3xl ">
          <div className="div h-full w-full bg-primary-bg rounded-3xl px-12 pt-14 pb-9 flex flex-col gap-y-9">
            <div className="top text-white font-openSans flex justify-between items-center px-20">
                <div className="head flex items-center
                 gap-x-6">
                    <div className="heading"><p className="text-4xl">Weekly Arrivals</p></div>
                    <div className="btn">
                        <CustomBtn text="Browse All" className="bg-none border-primary border text-primary "  href="/" />
                    </div>
                </div>
                <div className="w-1/3  ">
                    <img src={line} alt={line} />
                </div>
                <div className="time text-2xl flex items-center gap-x-3.5">
                    <p className="p-4 rounded-2xl bg-gradient-to-tr from-Gr-start to-Gr-end">12</p>
                    <p className="text-3xl">:</p>
                    <p className="p-4 rounded-2xl bg-gradient-to-tr from-Gr-start to-Gr-end">24</p>
                    <p className="text-3xl">:</p>
                    <p className="p-4 rounded-2xl bg-gradient-to-tr from-Gr-start to-Gr-end">59</p>
                    <p className="text-3xl">:</p>
                    <p className="p-4 rounded-2xl bg-gradient-to-tr from-Gr-start to-Gr-end">01</p>
                </div>
            </div>
            <div className="bottom flex gap-x-7">
              <ProductCard className="!bg-none" Class=" bg-[#1E2127]" />
              <ProductCard className="!bg-none" Class=" bg-[#1E2127]" />
              <ProductCard className="!bg-none" Class=" bg-[#1E2127]" />
              <ProductCard className="!bg-none" Class=" bg-[#1E2127]" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WeeklyDeals;
