import React, { useState } from "react";
import forza from "../../assets/forza.jpg";
import {
  FaCaretDown,
  FaHeart,
  FaPlaystation,
  FaRegHeart,
  FaXbox,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { HiMiniBolt } from "react-icons/hi2";
import { ImCross } from "react-icons/im";

const CartCard = () => {
  let [heart, setHeart] = useState(false);
  let [show, setShow] = useState(false);
  let [size, setSize] = useState("1");
  let manage = (element) => {
    setSize(element.target.innerText);
  };
  let item = [
    {
      name: "Forza Horizon 6",
      description:
        "An open-world racing game that lets players race across beautiful landscapes, from city streets to sprawling countryside.",
      category: "Racing",
      price: 55.99,
      discount: true,
      discountPercent: 25,
      priceFrom: 40.99,
      star: 5,
      platforms: {
        playstation: true,
        xbox: true,
        nintendo: true,
        pc: true,
      },
      languages: ["English", "Spanish", "Italian", "German"],
      releaseDate: "2024-10-01",
      playableOn: ["Xbox Series X/S", "PC", "Nintendo Switch"],
      editions: {
        deluxe: 69.99,
        complete: 89.99,
        ultimate: 119.99,
      },
      productKey: true,
      available: true,
      stock: 200,
      tags: ["racing", "open-world", "driving"],
      brand: "Playground Games",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Best racing experience ever!",
          date: "2024-11-23T14:00:00Z",
          reviewerName: "Mark Davis",
          reviewerEmail: "mark.davis@example.com",
        },
      ],
      thumbnail: "/forza.jpg",
      images: ["/forza1.jpg", "/forza2.jpg", "/forza3.jpg"],
    },
  ];
  return (
    <div className="text-white font-openSans bg-gradient-to-r from-[#333333] to-[#16191D] flex  items-center lg:gap-x-11 rounded-md  sm:rounded-3xl p-1 py-3 sm:p-3 lg:p-0 ">
      <div className="left flex flex-col  gap-y-5 lg:flex-row gap-x-11 lg:items-center w-8/12 lg:w-auto">
        <div className="img lg:aspect-square sm:w-3/5 lg:w-1/3  2xl:w-4/12 group rounded-t-lg lg:rounded-l-3xl overflow-hidden ">
          <img
            className="w-full h-full  object-cover group-hover:scale-110 duration-500"
            src={forza}
            alt={forza}
          />
        </div>
        <div className="details flex flex-col gap-y-3 md:gap-y-5  pb-2">
          <div className="name&platforms  xl:text-2xl 2xl:text-3xl flex gap-3 sm:gap-5 items-center text-nowrap">
            <div className="name">{item[0].name}</div>
            <div className="platforms flex opacity-40 gap-3">
              {item[0].platforms.playstation && <FaPlaystation />}
              {item[0].platforms.xbox && <FaXbox />}
              {item[0].platforms.nintendo && <BsNintendoSwitch />}
            </div>
          </div>
          <div className="discounts flex gap-x-3 sm:gap-x-5 text-xs  xl:text-xl 2xl:text-2xl">
            <div className=" py-1 sm:py-2 2xl:py-3 px-1 sm:px-4 rounded-md border text-Gr-start border-Gr-start ">
              <p>Save 25%</p>
            </div>
            <div className=" py-1 sm:py-2 2xl:py-3 px-1 sm:px-4 rounded-md border text-Gr-end border-Gr-end flex items-center gap-x-2  ">
              <HiMiniBolt className="md:text-3xl" />
              <p>Instant Delivery</p>
            </div>
          </div>
          <div className="infos flex items-center text-nowrap gap-x-1 sm:gap-x-4 text-xs xl:text-xl 2xl:text-2xl">
            <div className="div gap-x-3 gap-y-2 sm:py-2.5 sm:px-3 bg-gradient-to-tr from-Gr-start to-Gr-end rounded-lg">
              <h2 className="py-1 px-1 sm:px-0 sm:py-0">PS5</h2>
            </div>
            <div className="div gap-x-3 gap-y-2 sm:py-2.5 sm:px-3 bg-gradient-to-tr from-Gr-start to-Gr-end rounded-lg">
              <h2 className="py-1 px-1 sm:px-0 sm:py-0">Deluxe edition</h2>
            </div>
            <div className="div gap-x-3 gap-y-2 sm:py-2.5 sm:px-3 bg-gradient-to-tr from-Gr-start to-Gr-end rounded-lg">
              <h2 className="py-1 px-1 sm:px-0 sm:py-0">Key</h2>
            </div>
            <div className="div gap-x-3 gap-y-2 sm:py-2.5 sm:px-3 bg-gradient-to-tr from-Gr-start to-Gr-end rounded-lg">
              <h2 className="py-1 px-1 sm:px-0 sm:py-0">UK</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="right flex flex-col gap-y-10 sm:gap-y-10 lg:flex-row gap-x-11 lg:items-center xl:w-1/2 w-4/12 lg:w-auto ">
        <div className="price&quantity flex flex-col gap-y-3 sm:gap-y-6 ">
          <div className="price flex flex-col items-end  2xl:text-2xl text-primary">
            <h2 className="text-nowrap">Unit Price</h2>
            <h3>${item[0].priceFrom}</h3>
            <p className="text-Gr-end">${item[0].price}</p>
          </div>
          <div className="quantity rounded-md flex justify-end 2xl:text-xl">
            <div
              onClick={() => setShow(!show)}
              className="flex items-center gap-x-2 sm:gap-x-3.5 py-1.5 sm:py-2.5 px-2.5 sm:px-4 border  rounded-md !relative"
            >
              <p>{size}</p>
              <FaCaretDown />
              <ul
                onClick={manage}
                className={`w-full bottom-0 translate-y-full left-0 z-50 absolute transition-all duration-300 bg-white/10 ${
                  show ? "visible opacity-100" : " invisible opacity-0"
                }`}
              >
                <li className="border border-secondary cursor-default text-center">
                  1
                </li>
                <li className="border border-secondary cursor-default text-center">
                  2
                </li>
                <li className="border border-secondary cursor-default text-center">
                  3
                </li>
                <li className="border border-secondary cursor-default text-center">
                  4
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="btns flex lg:flex-col gap-3 2xl:gap-y-6 justify-end items-end">
          <div className="">
            <button
              onClick={() => setHeart(!heart)}
              className="fav border border-primary rounded-3xl px-2.5 sm:px-5 py-3  sm:py-9 xl:py-7 2xl:py-12"
            >
              {heart ? (
                <FaHeart className="text-Gr-end" />
              ) : (
                <FaRegHeart className="text-Gr-end" />
              )}
            </button>
          </div>
          <div className="">
            <button className="cross border border-primary rounded-3xl px-2.5 sm:px-5 py-3  sm:py-9 xl:py-7 2xl:py-12">
              <ImCross />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
