import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import {
  FaHeart,
  FaPlaystation,
  FaRegHeart,
  FaUserCircle,
  FaXbox,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { TbCircleKeyFilled } from "react-icons/tb";

const ProductCard = ({
  className,
  Class,
  name,
  image,
  discountPercent,
  price,
  from,
  star,
  discount,
  playstationIcon,
  xboxIcon,
  nintendoIcon,
  userIcon,
  productKeyIcon,
  key,
  available,
}) => {
  let [like, setLike] = useState(false);

  return (
    <div
      key={key}
      className={`aspect-[398/520] p-0.5 bg-gradient-to-t from-Gr-start to-Gr-end rounded-xl sm:rounded-3xl group-[]: ${className}`}
    >
      <div
        className={`bg-primary-bg w-full h-full rounded-xl sm:rounded-3xl ${Class} xl:flex xl:flex-col gap-y-5 xl:gap-y-0 `}
      >
        <div className="img aspect-[366/285]  w-full p-1 sm:p-4 relative ">
          <img
            className="h-full w-full object-cover rounded-lg sm:rounded-2xl"
            src={image}
            alt={image}
          />
          <div
            onClick={() => setLike(!like)}
            className={`fav absolute right-0 top-0 translate-y-1/2  -translate-x-1/2 p-1.5 sm:p-2.5 rounded-full bg-white/75 text-xs sm:text-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 ${
              like && "text-red-500"
            } `}
          >
            {like ? <FaHeart /> : <FaRegHeart />}
          </div>
          <div
            className={`discount absolute left-0 top-0 translate-y-1/2  translate-x-1/3 py-1 sm:py-2.5 px-2 sm:px-3.5 rounded-full bg-gradient-to-br from-[#FF0000] to-[#FFC700] text-xs sm:text-2xl font-openSans font-semibold text-black z-30 ${
              discount ? "flex" : "hidden"
            }`}
          >
            <p>-{discountPercent}%</p>
          </div>
        </div>
        <div className="info font-openSans flex flex-col items-center justify-between xl:justify-center  gap-y-1 sm:gap-y-3 xl:gap-y-  !w-full 2xl:gap-y-6 h-1/3 xl:h-auto overflow-hidden">
          <div className="details text-sm sm:text-[28px] xl:text-2xl 2xl:text-3xl w-full flex  flex-col  sm:gap-y-3 lg:gap-y-2 px-2.5 sm:px-6 !h-2/3 ">
            <div className="name text-white  text-nowrap w-full ">
              {" "}
              {name.length > 18 ? name.substring(0, 18) + "..." : name}
            </div>
            {available ? (
              <div className="priceRating flex justify-between text-[11px] sm:text-2xl xl:text-xl 2xl:text-[28px] items-center">
                <div className="price  text-Gr-end flex gap-x-1 sm:gap-x-2.5">
                  {discount && (
                    <span className=" text-[9px] leading-3 2xl:leading-[10px]  sm:text-lg xl:text-sm 2xl:text-lg  text-primary flex flex-col">
                      From <del>${from} to</del>
                    </span>
                  )}
                  ${price}
                </div>
                <div className="rating text-Gr-start text-[9px] sm:text-base xl:text-xl 2xl:text-[28px]  flex sm:gap-x-0.5 ">
                  {Array(star)
                    .fill(0)
                    .map((_, index) => (
                      <IoMdStar key={index} />
                    ))}
                </div>
              </div>
            ) : (
              <div className="">
                <p className="font-openSans text-sm sm:text-2xl sm:py-3 2xl:text-3xl text-[#E614FC]">
                  Release date 2024
                </p>
              </div>
            )}
          </div>
          <div className="icon text-sm sm:text-[2.0625rem] text-primary flex  gap-2 sm:gap-x-4 2xl:gap-x-7 w-full justify-center  !h-1/3">
            {playstationIcon && <FaPlaystation />}
            {xboxIcon && <FaXbox />}
            {nintendoIcon && <BsNintendoSwitch />}
            <div className=" h-3  sm:h-8 w-0.5 bg-primary"></div>
            {userIcon && <FaUserCircle />}
            {productKeyIcon && <TbCircleKeyFilled />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

