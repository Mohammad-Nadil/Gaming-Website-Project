import React from "react";
import Container from "./layer/Container";
import { FaPlaystation, FaUserCircle, FaXbox } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { TbCircleKeyFilled } from "react-icons/tb";
import { IoMdStar } from "react-icons/io";
import badge from "../assets/offerBadge.png";
import CustomBtn from "./layer/CustomBtn";
import { BiCartAdd } from "react-icons/bi";

const OfferBadge = ({
  name,
  image,
  discount,
  discountPercent,
  price,
  priceFrom,
  star,
  playstation,
  xbox,
  nintendo,
  user,
  productKey,
}) => {
  return (
    <div>
      <Container className="flex flex-col md:flex-row pt-10 md:pt-20 xl:pt-40 gap-x-7 gap-y-5 ">
        <div className="left w-full lg:w-1/2  ">
          <img
            className="h-full w-full object-cover rounded-3xl"
            src={image}
            alt={image}
          />
        </div>
        <div className="right p-0.5 bg-gradient-to-t from-Gr-start to-Gr-end rounded-2xl sm:rounded-3xl w-full lg:w-1/2 ">
          <div className="main relative w-full h-full bg-[#1E2127] rounded-2xl sm:rounded-3xl   py-6 xl:py-[4.6875rem] px-5 xl:px-16">
            <div
              className={`discount absolute right-0 top-0  -translate-x-full rounded-full  z-50 ${
                discount ? "flex" : "hidden"
              }`}
            >
              {" "}
              <img
                className="absolute -z-10 h-full w-full"
                src={badge}
                alt={badge}
              />
              <p className=" text-sm xl:text-2xl font-openSans  text-white flex flex-col items-center px-2 xl:px-6 pt-1.5 xl:pt-4 pb-3.5 xl:pb-11">
                {" "}
                <span>save</span> {discountPercent}%
              </p>
            </div>
            <div className="info font-openSans flex flex-col gap-y-5  xl:gap-y-7 ">
              <div className="icon text-lg xl:text-[33px] text-primary flex  gap-x-4 xl:gap-x-7">
                {playstation && <FaPlaystation />}
                {xbox && <FaXbox />}
                {nintendo && <BsNintendoSwitch />}
                <div className=" h-4  xl:h-8 w-0.5 bg-primary"></div>
                {user && <FaUserCircle />}
                {productKey && <TbCircleKeyFilled />}
              </div>
              <div className="details text-[1.625rem] xl:text-[4rem] xl:leading-[5.75rem] flex  flex-col gap-y-1 xl:gap-y-3  ">
                <div className="name text-white  text-nowrap overflow-hidden ">
                  {" "}
                  {name.length > 18 ? name.substring(0, 18) + "..." : name}
                </div>
                <div className="priceRating flex gap-x-8 text-xl xl:text-3xl ">
                  <div className="price text-Gr-end flex gap-x-1 sm:gap-x-2.5">
                    {discount && (
                      <span className=" text-base xl:text-lg leading-[1.5rem]  text-primary flex xl:flex-col">
                        From <del>${priceFrom} to</del>
                      </span>
                    )}
                    ${price}
                  </div>
                  <div className="rating text-Gr-start xl:text-3xl hidden  sm:flex md:hidden lg:flex sm:gap-x-0.5 ">
                    {Array(star)
                      .fill(0)
                      .map((_, index) => (
                        <IoMdStar key={index} />
                      ))}
                  </div>
                </div>
              </div>
              <div className="btn xl:pt-3">
                <CustomBtn className="py-1.5 px-2 " href="/">
                  <BiCartAdd className=" text-base xl:text-[33px]" />
                  <p className=" text-sm xl:text-2xl" >Buy Now</p>
                </CustomBtn>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OfferBadge;
