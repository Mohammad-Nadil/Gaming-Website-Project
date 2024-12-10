import React, { useState } from "react";
import AlsoLike from "../AlsoLike";
import Container from "../layer/Container";
import Category from "../Category";
import icon from "../../assets/star.svg";
import forza from "../../assets/forza.jpg";
import { IoWarning } from "react-icons/io5";
import { FaAngleDown, FaCaretDown, FaShareAlt } from "react-icons/fa";
import bag from "../../assets/bag.svg";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { HiMiniBolt } from "react-icons/hi2";
import CustomBtn from "../layer/CustomBtn";
import { BiCartAdd } from "react-icons/bi";

let Li = ({ name }) => {
  return (
    <div className="text-2xl py-2.5 px-3 border border-white/30 rounded-lg relative overflow-hidden after:w-full after:h-full after:absolute after:top-0 after:left-0 after:-z-10 z-10 after:opacity-0 hover:after:opacity-100 after:duration-300  after:bg-gradient-to-r hover:border-transparent after:from-Gr-start after:to-Gr-end transition-all duration-300">
      <p>{name}</p>
    </div>
  );
};

const ProductDetails = () => {
  let item = [
    {
      name: "Forza Horizon 6",
      description:
        "An open-world racing game that lets players race across beautiful landscapes, from city streets to sprawling countryside.",
      category: "Racing",
      price: 55.99,
      discount: true,
      discountPercent: 25,
      priceFrom: 40,
      star: 5,
      platforms: {
        playstation: false,
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
      thumbnail: "../../../public/forza.jpg",
      images: [
        "../../../public/forza1.jpg",
        "../../../public/forza2.jpg",
        "../../../public/forza3.jpg",
      ],
    },
  ];

  let [show, setShow] = useState(false);
  let [size, setSize] = useState("1");
  let manage = (element) => {
    setSize(element.target.innerText);
  };

  return (
    <>
      <Container>
        <Category />
      </Container>
      <Container className="flex flex-col gap-y-44">
        <div className="main flex gap-x-8">
          <div className=" w-1/2 flex flex-col justify-between ">
            <div className="img w-full h-[90%]  rounded-3xl overflow-hidden">
              <img
                className="object-cover w-full h-full rounded-2xl hover:scale-110 duration-700 "
                src={forza}
                alt={forza}
              />
            </div>
            <div className="notify">
              <div className="flex gap-x-4 items-center justify-center border border-white/20 rounded-xl py-3 w-full text-white text-xl">
                <BsFillInfoCircleFill className="text-3xl" />
                <p className="flex  gap-x-2">
                  This is a Playstation Account Access (This is not code/key)
                  <a className="underline" href="#">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="info w-1/2 bg-gradient-to-b from-Gr-start to-Gr-end p-0.5 rounded-3xl  ">
            <div className="w-full h-full px-14 bg-secondary-bg text-white font-openSans rounded-3xl">
              <div className="top border-b border-white/20 flex items-center justify-center gap-x-3 text-2xl py-6">
                <IoWarning className="text-3xl" />
                <p>Can not be activated in Sweden</p>
              </div>
              <div className="details py-8 border-b border-white/20 flex flex-col gap-y-3">
                <div className="ratings flex justify-between ">
                  <div className="left flex items-center gap-x-5">
                    <div className="star flex items-center gap-1 py-3 px-5 rounded-3xl bg-primary-bg">
                      {Array(5)
                        .fill(0)
                        .map((_, index) => (
                          <img
                            key={index}
                            src={icon}
                            alt="Star"
                            className=" w-3 md:w-7 aspect-square"
                          />
                        ))}
                    </div>
                    <div className="reviews text-2xl text-[#787A7D]">
                      <p>5.0 (457 Reviews)</p>
                    </div>
                  </div>
                  <div className="share">
                    <div className="icon text-3xl p-3 bg-[#15181D] rounded-full">
                      <FaShareAlt />
                    </div>
                  </div>
                </div>
                <div className="name text-6xl ">
                  <p>Forza Horizon 6</p>
                </div>
                <div className="options flex flex-col gap-y-4">
                  <div className="model flex gap-x-3.5">
                    <Li name="PS5" />
                    <Li name="PS4" />
                    <Li name="PS3" />
                  </div>
                  <div className="type flex gap-x-3.5">
                    <Li name="Key" />
                    <Li name="Account" />
                  </div>
                  <div className="variation flex gap-x-3.5">
                    <Li name="UK" />
                    <Li name="EU" />
                  </div>
                  <div className="edition flex gap-x-3.5">
                    <Li name="Deluxe" />
                    <Li name="Complete" />
                    <Li name="Ultimate" />
                  </div>
                </div>
              </div>
              <div className="offers border-b border-white/20 py-10 flex flex-col gap-y-6">
                <div className="top flex justify-between gap-x-5">
                  <div className="text-2xl py-3 px-4 rounded-md border text-Gr-start border-Gr-start">
                    <p>Save 25%</p>
                  </div>
                  <div className="text-2xl py-3 px-4 rounded-md border text-Gr-end border-Gr-end flex items-center gap-x-2 ">
                    <HiMiniBolt className="text-3xl" />
                    <p>Instant Delivery</p>
                  </div>
                  <button className="text-2xl py-3 flex-1 hover:scale-110 duration-300 rounded-md border text-white border-white">
                    Ask Question
                  </button>
                </div>
                <div className="bottom flex flex-col gap-y-4 text-2xl">
                  <div className="seller  text-black flex items-center justify-center gap-x-4 bg-white w-full py-4 rounded-md">
                    <div className="details flex items-center gap-x-3 ">
                      <div className="icon">
                        <img src={bag} alt={bag} />
                      </div>
                      <div className="name">
                        <p>
                          Sold By
                          <span className="text-Gr-end">BigBoyGames</span>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="h-5 w-0.5 bg-black"></div>
                    <div className="rating">
                      <p className="">
                        100% of 281 ratings <strong>superb!</strong>
                      </p>
                    </div>
                  </div>
                  <div className="more  text-white text-center flex justify-center items-center gap-x-2">
                    <p>6 More Offers Available Starting From $55.99</p>
                    <FaAngleDown className="text-3xl" />
                  </div>
                </div>
              </div>
              <div className="price+ border-b border-white/20 flex font-openSans gap-x-5 py-7">
                <div className="price flex items-center gap-x-1.5">
                  <p className="flex flex-col text-primary text-xl leading-6">
                    From <del>$70 to</del>
                  </p>
                  <p className="text-3xl text-Gr-end">$59.99</p>
                </div>
                <div className="off">
                  <div
                    className={`discount  bg-gradient-to-br from-[#FF0000] to-[#FFC700] text-xs sm:text-2xl py-3 px-5 text-black rounded-lg `}
                  >
                    <p>Grab 15% OFF</p>
                  </div>
                </div>
                <div className="quantity ">
                  <div
                    onClick={() => setShow(!show)}
                    className="flex items-center gap-x-2 p-3 rounded-md border border-secondary relative text-2xl"
                  >
                    <p>{size}</p>
                    <FaAngleDown />
                    <ul
                      onClick={manage}
                      className={`w-full bottom-0 translate-y-full left-0 z-50 absolute transition-all duration-300  ${
                        show ? "visible opacity-100" : " invisible opacity-0"
                      }`}
                    >
                      {["01", "02", "03", "04", "05"].map((quantity, index) => (
                        <li className=" border bg-secondary-bg/70  py-2 text-center  ">
                          {quantity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <CustomBtn>
                  <BiCartAdd className=" text-base xl:text-[33px]" />
                  <p className=" text-sm xl:text-2xl">Buy Now</p>
                </CustomBtn>
              </div>
              <div className="activate flex items-center justify-center gap-x-3 text-2xl py-6 ">
                <BsFillInfoCircleFill className="text-3xl" />
                <p>How to activate</p>
              </div>
            </div>
          </div>
        </div>
        <div className="description"></div>
        <div className="media"></div>
        <div className="review"></div>
        <AlsoLike />
      </Container>
    </>
  );
};

export default ProductDetails;
