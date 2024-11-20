import React, { useState } from "react";
import pic from "../../assets/forza.jpg";
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

const ProductCard = ({ className, Class }) => {
  let [like, setLike] = useState(false);

  return (
    <div
      className={`aspect-[398/520] p-0.5 bg-gradient-to-t from-Gr-start to-Gr-end rounded-3xl ${className}`}
    >
      <div className={`bg-primary-bg w-full h-full rounded-3xl ${Class} `}>
        <div className="img aspect-[366/285] w-full p-4 relative group">
          <img
            className="h-full w-full object-cover rounded-2xl"
            src={pic}
            alt={pic}
          />
          <div
            onClick={() => setLike(!like)}
            className={`fav absolute right-0 top-0 translate-y-1/2  -translate-x-1/2 p-2.5 rounded-full bg-white/75 text-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 ${
              like && "text-red-500"
            } `}
          >
            {like ? <FaHeart /> : <FaRegHeart />}
          </div>
          <div className="discount absolute left-0 top-0 translate-y-1/2  translate-x-1/3 py-2.5 px-3.5 rounded-full bg-gradient-to-br from-[#FF0000] to-[#FFC700] text-2xl font-openSans font-semibold text-black z-50">
            
            <p>-25%</p>
          </div>
        </div>
        <div className="info font-openSans flex flex-col items-center gap-y-8">
          <div className="details text-[28px] w-full flex flex-col gap-y-3 px-6 ">
            <div className="name text-white ">Forza Horizon 6</div>
            <div className="priceRating flex justify-between items-center">
              <div className="price text-Gr-end flex gap-x-2.5">
                <span className="text-lg text-primary flex flex-col">
                  From <del>$70 to</del>
                </span>
                $59.99
              </div>
              <div className="rating text-Gr-start  flex gap-x-0.5 ">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
            </div>
          </div>
          <div className="icon text-[2.0625rem] text-primary flex gap-x-7">
            <FaPlaystation />
            <FaXbox />
            <BsNintendoSwitch />
            <div className="h-8 w-0.5 bg-primary"></div>
            <FaUserCircle />
            <TbCircleKeyFilled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
