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
import { PiClockCountdownFill } from "react-icons/pi";

const BannerBlog = () => {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);

  // Blogs data
  const Blogs = [
    {
      title: "Top Digital Game Releases - Stray Edition",
      tags: ["gaming", "stray"], // Removed extra space in "gaming "
      date: "19 Sep 23", // Removed extra space
      duration: "3 min read", // Removed extra space
      banner: deathBanner,
      icon: death,
      link: "#",
    },
    {
      title: "Ghostly Adventures in Gaming",
      tags: ["gaming", "horror"],
      date: "21 Sep 23",
      duration: "5 min read",
      banner: ghostBanner,
      icon: ghost,
      link: "#",
    },
    {
      title: "Seiko: The Ultimate Samurai Experience",
      tags: ["gaming", "action"],
      date: "25 Sep 23",
      duration: "4 min read",
      banner: seikoBanner,
      icon: seiko,
      link: "#",
    },
    {
      title: "Far Cry - A Journey into the Wild",
      tags: ["gaming", "open world"],
      date: "28 Sep 23",
      duration: "6 min read",
      banner: farCryBanner,
      icon: farCry,
      link: "#",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActive((prevActive) => (prevActive + 1) % Blogs.length);
        setFade(true);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, [Blogs.length]);

  return (
    <div className="bg-primary-bg ">
      <Container className="z-10 py-9 md:pt-16 xl:pt-[6.4375rem] !px-6 xl:!px-[4.375rem] flex flex-col rounded-3xl  sm:mx-auto mb-28 md:mb-0 ">
        <div className="smallSpace h-64 lg:h-20 2xl:h-64  "></div>
        <div className="absolute p-3 h-full w-full top-0 left-0 -z-20">
          <img
            className={`h-full w-full   object-cover  rounded-3xl transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            src={Blogs[active].banner}
            alt={Blogs[active].banner}
          />
        </div>
        <div className="top flex flex-col gap-y-2 md:gap-y-4 2xl:px-16">
          <div className="tags flex gap-x-2 md:gap-x-4 ">
            {Blogs[active].tags.map((tag, index) => (
              <p
                key={index}
                className="text-sm md:text-lg text-black py-1 px-2 rounded-lg bg-white "
              >
                {tag}
              </p>
            ))}
          </div>
          <div className="name">
            <p
              className={` text-2xl md:text-5xl xl:text-7xl text-white transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {Blogs[active].title}
            </p>
          </div>
          <div
            className={`details  flex gap-x-4 items-center transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="date flex gap-x-2.5 items-center text-Gr-end text-2xl">
             <p>{Blogs[active].date}</p> 
            </div>
            <div className="duration flex gap-x-1.5 items-center text-primary text-2xl">
              <PiClockCountdownFill />
              <p className="text-white" >{Blogs[active].duration}</p>
            </div>
          </div>
        </div>
        <div className="bottom w-full  md:h-60 xl:h-80 md:my-5">
          <div className="absolute w-full pt-7 md:pt-0 md:h-1/2 top-full left-0 md:top-1/2 flex items-center justify-between px-6 sm:px-10 xl:px-20">
            <ul className="flex gap-x-3 sm:gap-x-6 md:gap-x-9 h-24 md:h-auto items-baseline ">
              {Blogs.map((game, index) => (
                <li
                  key={index}
                  onClick={() => setActive(index)}
                  className={`icon border border-primary rounded-xl sm:rounded-2xl duration-300 ease-in-out ${
                    active === index
                      ? "w-20 h-20 md:w-28 md:h-28 xl:w-36 xl:h-36 scale-110 opacity-100"
                      : "w-14 h-14 md:w-20 md:h-20 xl:w-28 xl:h-28 opacity-60"
                  }`}
                >
                  <img
                    className="h-full w-full object-cover border border-transparent rounded-xl sm:rounded-2xl"
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

export default BannerBlog;
