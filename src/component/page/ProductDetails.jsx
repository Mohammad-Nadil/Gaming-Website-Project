import React, { useState } from "react";
import AlsoLike from "../AlsoLike";
import Container from "../layer/Container";
import Category from "../Category";
import icon from "../../assets/star.svg";
import line from "../../assets/lineHorizontal.png";
import { IoWarning } from "react-icons/io5";
import { FaAngleDown, FaShareAlt } from "react-icons/fa";
import bag from "../../assets/bag.svg";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { HiMiniBolt } from "react-icons/hi2";
import CustomBtn from "../layer/CustomBtn";
import { BiCartAdd } from "react-icons/bi";
import ReviewCard from "../layer/ReviewCard";
import example from "../../assets/forza.jpg";

let Li = ({ name }) => {
  return (
    <div className="text- sm:text-2xl p-2 sm:py-2.5 sm:px-3 border border-white/30 rounded-lg relative overflow-hidden after:w-full after:h-full after:absolute after:top-0 after:left-0 after:-z-10 z-10 after:opacity-0 hover:after:opacity-100 after:duration-300  after:bg-gradient-to-r hover:border-transparent after:from-Gr-start after:to-Gr-end transition-all duration-300">
      <p>{name}</p>
    </div>
  );
};

let Tags = ({ text }) => {
  return (
    <li className=" p-1.5 sm:py-2 xl:py-3 sm:px-3 xl:px-5 rounded-lg bg-secondary-bg text-xs sm:text-2xl xl:text-xl  2xl:text-2xl text-white">
      <p>{text}</p>
    </li>
  );
};

const ProductDetails = () => {
  let [item] = [
    {
      id: 1,
      name: "Forza Horizon 6",
      description:
        "An open-world racing game that lets players race across beautiful landscapes, from city streets to sprawling countryside.",
      category: "Racing",
      priceDetails: {
        current: 40,
        original: 55.99,
        discountPercent: 25,
      },
      rating: 5,
      reviewsCount: 457,
      tags: ["racing", "open-world", "driving"],
      platforms: ["Xbox", "PC", "Nintendo Switch"],
      languages: ["English", "Spanish", "Italian"],
      releaseDate: "2024-10-01",
      stock: 200,
      seller: {
        name: "BigBoyGames",
        rating: 100,
        reviews: 281,
      },
      editions: [
        { type: "Deluxe", price: 69.99 },
        { type: "Complete", price: 89.99 },
        { type: "Ultimate", price: 119.99 },
      ],
      reviews: [
        {
          rating: 5,
          comment: "Best racing experience ever!",
          date: "2024-11-23T14:00:00Z",
          reviewerName: "Mark Davis",
          reviewerEmail: "mark.davis@example.com",
        },
      ],
      images: {
        thumbnail: "../../../public/forza.jpg",
        gallery: [
          "../../../public/forza1.jpg",
          "../../../public/forza2.jpg",
          "../../../public/forza3.jpg",
          "../../../public/forza1.jpg",
        ],
      },
      availability: {
        isAvailable: true,
        status: "In Stock",
      },
      warnings: ["Cannot be activated in Sweden"],
      offers: [
        { type: "discount", description: "Save 25%" },
        { type: "delivery", description: "Instant Delivery" },
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
      <Container className="flex flex-col gap-y-20 sm:gap-y-28 md:gap-y-32 lg:gap-y-40 xl:gap-y-44 ">
        <div className="main flex-col xl:flex-row flex gap-y-5 sm:gap-y-10 gap-x-5 2xl:gap-x-8">
          <div className=" xl:w-1/2 flex flex-col justify-between gap-y-2 sm:gap-y-5 xl:gap-y-0  ">
            <div className="img w-full h-[90%] rounded-2xl  sm:rounded-3xl overflow-hidden">
              <img
                className="object-cover w-full h-full rounded-2xl hover:scale-110 duration-700 "
                src={item.images.thumbnail}
                alt={item.images.thumbnail}
              />
            </div>
            <div className="notify">
              <div className="flex gap-x-2 sm:gap-x-4 items-center justify-center border border-white/20 rounded-xl  py-3 w-full text-white text-[10px] sm:text-base 2xl:text-xl">
                <BsFillInfoCircleFill className="text-base sm:text-3xl" />
                <p className="flex flex-col sm:flex-row sm:gap-x-2">
                  This is a Playstation Account Access (This is not code/key)
                  <a className="underline" href="#">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="info xl:w-1/2 bg-gradient-to-b from-Gr-start to-Gr-end p-0.5 rounded-2xl sm:rounded-3xl  ">
            <div className="w-full h-full px-3 2xl:px-14 bg-secondary-bg text-white font-openSans rounded-2xl sm:rounded-3xl">
              <div className="top border-b border-white/20 flex items-center justify-center gap-x-3  sm:text-2xl py-3 sm:py-6">
                <IoWarning className=" text-base sm:text-3xl" />
                <p>{item.warnings}</p>
              </div>
              <div className="details py-4 sm:py-8 border-b border-white/20 flex flex-col gap-y-3">
                <div className="ratings flex justify-between ">
                  <div className="left flex items-center gap-x-2.5 sm:gap-x-5">
                    <div className="star flex items-center gap-1 py-1.5 sm:py-3 px-2.5 sm:px-5 rounded-3xl bg-primary-bg">
                      {Array(item.rating)
                        .fill(0)
                        .map((_, index) => (
                          <img
                            key={index}
                            src={icon}
                            alt="Star"
                            className=" w-3.5 md:w-7 aspect-square"
                          />
                        ))}
                    </div>
                    <div className="reviews text-sm sm:text-2xl text-[#787A7D]">
                      <p>
                        {item.rating}.0 ({item.reviewsCount} Reviews){" "}
                      </p>
                    </div>
                  </div>
                  <div className="share">
                    <div className="icon text-sm sm:text-3xl p-1.5 sm:p-3 bg-[#15181D] rounded-full">
                      <FaShareAlt />
                    </div>
                  </div>
                </div>
                <div className="name text-3xl sm:text-6xl ">
                  <p>{item.name}</p>
                </div>
                <div className="options flex flex-col gap-y-3 sm:gap-y-4">
                  <div className="model flex gap-x-2 sm:gap-x-3.5">
                    <Li name="PS5" />
                    <Li name="PS4" />
                    <Li name="PS3" />
                  </div>
                  <div className="type flex gap-x-2 sm:gap-x-3.5">
                    <Li name="Key" />
                    <Li name="Account" />
                  </div>
                  <div className="variation flex gap-x-2 sm:gap-x-3.5">
                    <Li name="UK" />
                    <Li name="EU" />
                  </div>
                  <div className="edition flex gap-x-2 sm:gap-x-3.5">
                    <Li name="Deluxe" />
                    <Li name="Complete" />
                    <Li name="Ultimate" />
                  </div>
                </div>
              </div>
              <div className="offers border-b border-white/20 py-10 hidden sm:flex flex-col gap-y-6 text-2xl lg:text-3xl xl:text-xl 2xl:text-2xl">
                <div className="top flex justify-between gap-x-5">
                  <div className=" py-3 px-4 rounded-md border text-Gr-start border-Gr-start">
                    <p>Save 25%</p>
                  </div>
                  <div className=" py-3 px-4 rounded-md border text-Gr-end border-Gr-end flex items-center gap-x-2 ">
                    <HiMiniBolt className="text-3xl" />
                    <p>Instant Delivery</p>
                  </div>
                  <button className=" py-3 flex-1 hover:scale-110 duration-300 rounded-md border text-white border-white">
                    Ask Question
                  </button>
                </div>
                <div className="bottom flex flex-col gap-y-4 ">
                  <div className="seller  text-black flex items-center justify-center gap-x-4 bg-white w-full py-2.5 2xl:py-4 rounded-md">
                    <div className="details flex items-center gap-x-3 ">
                      <div className="icon">
                        <img src={bag} alt={bag} />
                      </div>
                      <div className="name">
                        <p>
                          Sold By
                          <span className="text-Gr-end">
                            {item.seller.name}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="h-5 w-0.5 bg-black"></div>
                    <div className="rating">
                      <p className="">
                        {item.seller.rating}% of {item.seller.reviews} ratings{" "}
                        <strong>superb!</strong>
                      </p>
                    </div>
                  </div>
                  <div className="more  text-white text-center flex justify-center items-center gap-x-2">
                    <p>6 More Offers Available Starting From $55.99</p>
                    <FaAngleDown className="text-3xl" />
                  </div>
                </div>
              </div>
              <div className="price+ border-b border-white/20 grid grid-cols-5 md:grid-cols-7 xl:grid-cols-5 2xl:grid-cols-7  font-openSans gap-y-2 gap-x-3.5 sm:gap-5 lg:px-5 xl:px-0 py-7 ">
                <div className="price flex items-center gap-x-1.5 col-span-2 md:col-span-2 xl:col-span-2 justify-center">
                  <p className="flex flex-col text-primary text-xs leading-3 sm:text-xl sm:leading-6">
                    From <del>${item.priceDetails.original} to</del>
                  </p>
                  <p className="sm:text-3xl text-Gr-end">
                    ${item.priceDetails.current}
                  </p>
                </div>
                <div className="off col-span-3 md:col-span-2 xl:col-span-3 2xl:col-span-2">
                  <div
                    className={`discount  bg-gradient-to-br from-[#FF0000] to-[#FFC700] text-sm sm:text-2xl py-2 sm:py-3  text-center text-black rounded-lg `}
                  >
                    <p>Grab {item.priceDetails.discountPercent}% OFF</p>
                  </div>
                </div>
                <div className="quantity col-span-2 md:col-span-1  xl:col-span-2 2xl:col-span-1">
                  <div
                    onClick={() => setShow(!show)}
                    className="flex items-center gap-x-2  rounded-md border border-secondary relative text-xl sm:text-2xl justify-between px-5 py-0.5 sm:py-1.5 md:p-3 md:px-6 2xl:px-3"
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
                <div className="btn col-span-3 md:col-span-2 xl:col-span-3 2xl:col-span-2">
                  <CustomBtn className="w-full sm:h-full items-center justify-center ">
                    <BiCartAdd className=" text-2xl sm:text-3xl xl:text-2xl xl:text-[33px]" />
                    <p className="  sm:text-2xl xl:text-x 2xl:text-2xl">
                      Buy Now
                    </p>
                  </CustomBtn>
                </div>
              </div>
              <div className="activate sm:flex items-center justify-center gap-x-3 text-2xl py-6 hidden ">
                <BsFillInfoCircleFill className="text-3xl" />
                <p>How to activate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="describe&seller flex flex-col-reverse items-center xl:flex-row gap-8 font-openSans text-white">
          <div className="description flex flex-col gap-y-10 w-full xl:w-1/2">
            <div className="title flex flex-col gap-y-3.5">
              <p className="sm:text-3xl ">Description</p>
              <p className=" text-sm sm:text-[1.375rem] sm:leading-8 text-primary ">
                {item.description}
              </p>
              <a className="text-2xl underline text-Gr-end" href="#">
                Read more
              </a>
            </div>
            <div className="hr w-full h-0.5 bg-primary/40"></div>
            <div className="moreInfo flex flex-col gap-y-2 sm:gap-y-4">
              <div className="release flex items-center gap-x-4">
                <p className="text-xs sm:text-2xl w-20 sm:w-40">
                  Release Date :
                </p>
                <ul className="flex gap-x-3">
                  <Tags text={item.releaseDate} />
                </ul>
              </div>
              <div className="tags release flex items-center gap-x-4">
                <p className="text-xs sm:text-2xl w-20 sm:w-40">Genre :</p>
                <ul className="flex gap-x-1.5 sm:gap-x-3">
                  {item.tags.map((items, index) => (
                    <Tags text={items} />
                  ))}
                </ul>
              </div>
              <div className="language release flex items-center gap-x-4">
                <p className="text-xs sm:text-2xl w-20 sm:w-40">Language :</p>
                <ul className="flex gap-x-1.5 sm:gap-x-3">
                  {item.languages.map((items, index) => (
                    <Tags text={items} />
                  ))}
                </ul>
              </div>
              <div className="playable release flex items-center gap-x-4">
                <p className="text-xs sm:text-2xl w-20 sm:w-40">
                  Playable on :
                </p>
                <ul className="flex gap-x-1.5 sm:gap-x-3">
                  {item.platforms.map((items, index) => (
                    <Tags text={items} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="seller text-white font-openSans w-full xl:w-1/2  bg-secondary-bg rounded-3xl py-4 2xl:py-8 px-3 sm:px-6 2xl:px-11 flex flex-col gap-y-6">
            <p className=" text-xl sm:text-3xl">Offers from other sellers</p>
            <ul className="flex flex-col gap-y-2 sm:gap-y-5">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <li
                  key={index}
                  className=" text-xs sm:text-xl md:text-2xl  xl:text-base 2xl:text-2xl flex sm:gap-3 justify-between items-center "
                >
                  <div className="name text-black  bg-white p-2  sm:py-3 sm:px-5 rounded-lg w-1/4">
                    <p>Sellername</p>
                  </div>
                  <div className="rating flex p-2 sm:py-4 sm:px-4 bg-primary-bg gap-1 rounded-lg">
                    <div className="icon hidden sm:flex">
                      <img className="" src={icon} alt={icon} />
                    </div>
                    <p className="">100% of 281 ratings</p>
                  </div>
                  <div className="price bg-primary-bg px-1 py-2 sm:py-4 sm:px-5 rounded-lg">
                    <p>$59.99</p>
                  </div>
                  <div className="btn">
                    <CustomBtn className=" py-2 px-2 md:px-6 md:py-3 ">
                      <BiCartAdd className="  sm:text-3xl xl:text-2xl xl:text-[33px]" />
                    </CustomBtn>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="media flex flex-col gap-y-9">
          <div className="head flex items-center gap-x-14">
            <p className=" sm:text-4xl text-nowrap  text-white">Game Media</p>
            <div>
              <img className="ma" src={line} alt={line} />
            </div>
          </div>
          <div className="main grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 gap-5 xl:gap-x-7">
            {item.images.gallery.map((items, index) => (
              <div className="aspect-[394/297]">
                <img
                  className="object-cover w-full h-full rounded-3xl"
                  src={items}
                  alt={items}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-9">
          <div className="top text-white font-openSans flex justify-between items-center px-4 sm:px-8 xl:px-20">
            <div
              className="head flex items-center
                  gap-x-3 xl:gap-x-6"
            >
              <div className="heading">
                <p className=" sm:text-4xl text-nowrap">Product Reviews</p>
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
          <div className="review grid sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-5">
            <ReviewCard
              image={example}
              name={item.reviews[0].reviewerName}
              star={item.reviews[0].rating}
              review={item.reviews[0].comment}
              className=" md:py-6 md:px-5 bg-secondary-bg sm:bg-primary-bg"
              Class=" mx-0 md:mx-0 bg-none sm:bg-gradient-to-t"
            />
            <ReviewCard
              image={example}
              name={item.reviews[0].reviewerName}
              star={item.reviews[0].rating}
              review={item.reviews[0].comment}
              className=" md:py-6 md:px-5 bg-secondary-bg sm:bg-primary-bg"
              Class=" mx-0 md:mx-0 bg-none sm:bg-gradient-to-t"
            />
            <ReviewCard
              image={example}
              name={item.reviews[0].reviewerName}
              star={item.reviews[0].rating}
              review={item.reviews[0].comment}
              className=" md:py-6 md:px-5 bg-secondary-bg sm:bg-primary-bg"
              Class=" mx-0 md:mx-0 bg-none sm:bg-gradient-to-t"
            />
          </div>
        </div>
        <AlsoLike />
      </Container>
    </>
  );
};

export default ProductDetails;
