import React, { useState, useEffect } from "react";
import Container from "./layer/Container";
import CustomBtn from "./layer/CustomBtn";
import { FaPlaystation, FaUserCircle, FaXbox } from "react-icons/fa";
import { TbCircleKeyFilled } from "react-icons/tb";
import deathBanner from "../assets/deathBanner.png";
import ghostBanner from "../assets/ghostRunner.jpg";
import seikoBanner from "../assets/seikro.jpeg";
import farCryBanner from "../assets/farCry.jpg";
import death from "../assets/death.png";
import ghost from "../assets/ghostRunner.png";
import seiko from "../assets/seikro.png";
import farCry from "../assets/farCry.png";
import star from "../assets/star.svg";
import { BiCartAdd } from "react-icons/bi";

const Banner = () => {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);

  // Games data
  const games = [
    {
      name: "Death Stranding",
      from: "70",
      to: "59.00",
      star: 5,
      banner: deathBanner,
      icon: death,
      link: "/",
    },
    {
      name: "Ghost Runner",
      from: "80",
      to: "49.00",
      star: 3,
      banner: ghostBanner,
      icon: ghost,
      link: "/",
    },
    {
      name: "SEKIRO",
      from: "75",
      to: "69.00",
      star: 4,
      banner: seikoBanner,
      icon: seiko,
      link: "/",
    },
    {
      name: "FAR CRY 6",
      from: "40",
      to: "39.00",
      star: 5,
      banner: farCryBanner,
      icon: farCry,
      link: "/",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActive((prevActive) => (prevActive + 1) % games.length);
        setFade(true);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, [games.length]);

  return (
    <div className="bg-primary-bg ">
      <Container className="z-10 py-9 md:pt-16 xl:pt-[6.4375rem] px-6 xl:px-[4.375rem] flex flex-col rounded-3xl  sm:mx-auto mb-28 md:mb-0 ">
        <div className="smallSpace h-64 md:hidden "></div>
        <div className="absolute p-3 h-full w-full top-0 left-0 -z-20">
          <img
            className={`h-full w-full   object-cover rounded-3xl transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            src={games[active].banner}
            alt={games[active].banner}
          />
        </div>
        <div className="top flex flex-col gap-y-2 md:gap-y-4">
          <div className="icon text-2xl md:text-3xl text-primary flex gap-x-4 md:gap-x-7">
            <FaPlaystation />
            <FaXbox />
            <div className="w-0.5 h-7 items-center bg-primary"></div>
            <FaUserCircle />
            <TbCircleKeyFilled />
          </div>
          <div className="name">
            <p
              className={` text-[1.625rem] md:text-7xl text-white transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {games[active].name}
            </p>
          </div>
          <div
            className={`details text-primary text-sm md:text-lg font-openSans flex gap-x-4 items-baseline transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="from flex gap-x-2.5 items-baseline">
              From{" "}
              <del className="text-xl md:text-[1.75rem]">
                ${games[active].from}
              </del>
            </div>
            <div className="to flex gap-x-1.5 items-baseline">
              to{" "}
              <span className=" text-xl md:text-[1.75rem] text-Gr-end">
                ${games[active].to}
              </span>
            </div>
            <ul className=" hidden md:flex gap-x-1 items-baseline">
              {Array.from({ length: games[active].star }).map((_, index) => (
                <li key={index}>
                  <img src={star} alt="Star" />
                </li>
              ))}
            </ul>
          </div>
          <div className="btn">
            <CustomBtn href={games[active].link}>
              <BiCartAdd />
              <p>Buy Now</p>
            </CustomBtn>
          </div>
        </div>
        <div className="bottom w-full  md:h-60 xl:h-80 md:my-5">
          <div className="absolute w-full pt-7 md:pt-0 md:h-1/2 top-full left-0 md:top-1/2 flex items-center justify-between px-6 sm:px-10 xl:px-20">
            <ul className="flex gap-x-3 sm:gap-x-6 md:gap-x-9 h-24 md:h-auto items-baseline ">
              {games.map((game, index) => (
                <li
                  key={index}
                  onClick={() => setActive(index)}
                  className={`icon border border-primary rounded-2xl duration-300 ease-in-out ${
                    active === index
                      ? "w-20 h-20 md:w-28 md:h-28 xl:w-36 xl:h-36 scale-110 opacity-100"
                      : "w-14 h-14 md:w-20 md:h-20 xl:w-28 xl:h-28 opacity-60"
                  }`}
                >
                  <img
                    className="h-full w-full object-cover border border-transparent"
                    src={game.icon}
                    alt={game.name}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
