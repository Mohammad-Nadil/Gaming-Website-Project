import React, { useState } from "react";
import Container from "../layer/Container";
import Category from "../Category";
import Paginate from "../Paginate";
import DeliveryFilter from "../layer/DeliveryFilter";
import SortFilter from "../layer/SortFilter";
import PriceFilter from "../layer/PriceFilter";
import SellerFilter from "../layer/SellerFilter";
import line from "../../assets/lineHorizontal.png";
import CustomBtn from "../layer/CustomBtn";
import { FaFilter } from "react-icons/fa6";

const Shop = () => {
  let [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex flex-col gap-y-10 xl:gap-y-20">
      <Container className="w-full">
        <Category />
      </Container>
      <Container className="flex flex-col gap-y-4">
        <div className="top lg:hidden text-white font-openSans flex justify-between items-center ">
          <div
            className="head flex items-center
                  gap-x-3 xl:gap-x-6"
          >
            <div className="heading">
              <p className=" sm:text-4xl text-nowrap lg:text-wrap xl:text-nowrap">
                Weekly Deals
              </p>
            </div>
          </div>
          <div className=" w-2/3  ">
            <img className="w-full" src={line} alt={line} />
          </div>

          <div className="btn " onClick={() => setShowFilter(!showFilter)}>
            <CustomBtn
              className="bg-none text-sm text-nowrap sm:text-base border-primary border text-primary "
              
            >
              <div className="flex gap-x-1">
                <div className="icon items-center">
                  <FaFilter />
                </div>
                <p>Filter By</p>
              </div>
            </CustomBtn>
          </div>
        </div>
        <div className="flex gap-x-7 font-openSans ">
          <div className={`filter absolute lg:static sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col gap-y-9 z-50  duration-500 lg:translate-x-0 lg:opacity-100 ${showFilter ? "translate-x-0 opacity-100 ":"-translate-x-full opacity-0"}`}>
            <DeliveryFilter />
            <SortFilter />
            <PriceFilter />
            <SellerFilter />
          </div>
          <div className={`main w-full lg:w-2/3 xl:w-3/4 grid grid-cols-2 xl:grid-cols-3 gap-y-4 sm:gap-y-9 md:gap-y-14 gap-x-3 sm:gap-x-5 md:gap-x-7 relative mb-20 after:w-screen after:h-[104%] after:absolute after:bg-black/80 after:z-40 after:left-1/2  after:-translate-x-1/2 after:duration-300 overflow-x-hidden ${showFilter?"after:opacity-100 after:visible ":"after:opacity-0 after:invisible"} scrollbar-hide `}>
            <Paginate itemsPerPage={15} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
