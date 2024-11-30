import React, { useEffect, useState } from "react";
import Container from "./layer/Container";
import ProductCard from "./layer/ProductCard";
import line from "../assets/lineHorizontal.png";
import CustomBtn from "./layer/CustomBtn";
import seikro from "../assets/seikro.png";
import ghost from "../assets/ghostRunner.png";
import forza from "../assets/forza.jpg";
import farcry from "../assets/farCry.png";

const WeeklyDeals = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const endOfWeek = new Date();
      endOfWeek.setDate(now.getDate() + ((7 - now.getDay()) % 7));
      endOfWeek.setHours(23, 59, 59, 999);

      const timeDiff = endOfWeek - now;

      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(timer);
  }, []);

  let [show, setShow] = useState(4);

  useEffect(() => {
    if (typeof window !== "undefined") {
      function widthSize() {
        if (window.innerWidth >= 1536) {
          setShow(4);
        } else if (window.innerWidth >= 1280) {
          setShow(4);
        } else if (window.innerWidth >= 1024) {
          setShow(3);
        } else if (window.innerWidth >= 768) {
          setShow(4);
        } else if (window.innerWidth >= 640) {
          setShow(4);
        } else {
          setShow(4);
        }
      }
      widthSize();
      window.addEventListener("resize", widthSize);
  
      return () => window.removeEventListener("resize", widthSize); // Cleanup
    }
  }, []);

  let items = [
    {
      name: "Sekiro Shadows Die once",
      image: seikro,
      discount: true,
      discountPercent: "25",
      price: "59.99",
      priceFrom: "70",
      star: 5,
      playstation: true,
      xbox: true,
      nintendo: true,
      user: true,
      productKey: true,
      available:true
    },
    {
      name: "Ghost Runner",
      image: ghost,
      discount: true,
      discountPercent: "25",
      price: "79.99",
      priceFrom: "50",
      star: 4,
      playstation: true,
      xbox: false,
      nintendo: false,
      user: true,
      productKey: false,
      available:true
    },
    {
      name: "Forza Horizon 6",
      image: forza,
      discount: true,
      discountPercent: "25",
      price: "55.99",
      priceFrom: "40",
      star: 5,
      playstation: false,
      xbox: false,
      nintendo: true,
      user: true,
      productKey: true,
      available:true
    },
    {
      name: "Farcry 6",
      image: farcry,
      discount: false,
      discountPercent: "25",
      price: "69.99",
      priceFrom: "65",
      star: 3,
      playstation: true,
      xbox: false,
      nintendo: true,
      user: true,
      productKey: false,
      available:true
    },
  ];
  return (
    <div>
      <Container className="pt-10 md:pt-20 xl:pt-40 max-w-[1763px]">
        <div className="p-0.5 px-0.5 md:bg-gradient-to-t from-Gr-start to-Gr-end rounded-3xl ">
          <div className="div h-full w-full bg-primary-bg rounded-3xl   px-3 2xl:px-12 py-8 xl:pt-14 xl:pb-9 flex flex-col gap-y-9">
            <div className="top text-white font-openSans flex justify-between items-center px-4 sm:px-8 xl:px-20">
              <div
                className="head flex items-center
                  gap-x-3 xl:gap-x-6"
              >
                <div className="heading">
                  <p className=" sm:text-4xl text-nowrap lg:text-wrap xl:text-nowrap">
                    Weekly Arrivals
                  </p>
                </div>
                <div className="btn hidden lg:flex lg:w-full">
                  <CustomBtn
                    text="Browse All"
                    className="bg-none border-primary border text-primary "
                    href="/"
                  />
                </div>
              </div>
              <div className=" lg:w-1/3  ">
                <img src={line} alt={line} />
              </div>

              <div className="btn lg:hidden  w-full">
                <CustomBtn
                  text="Browse All"
                  className="bg-none text-sm text-nowrap sm:text-base border-primary border text-primary "
                  href="/"
                />
              </div>

              <div className="timeRemainFromWeek text-2xl hidden lg:flex items-center gap-x-3.5">
                <p className="p-4 rounded-2xl bg-gradient-to-tr from-Gr-start to-Gr-end">
                  {timeRemaining.days.toString().padStart(2, "0")}
                </p>
                <p className="text-3xl">:</p>
                <p className="p-4 rounded-2xl bg-gradient-to-tr from-Gr-start to-Gr-end">
                  {timeRemaining.hours.toString().padStart(2, "0")}
                </p>
                <p className="text-3xl">:</p>
                <p className="p-4 rounded-2xl bg-gradient-to-tr from-Gr-start to-Gr-end">
                  {timeRemaining.minutes.toString().padStart(2, "0")}
                </p>
                <p className="text-3xl">:</p>
                <p className="p-4 rounded-2xl bg-gradient-to-tr from-Gr-start to-Gr-end">
                  {timeRemaining.seconds.toString().padStart(2, "0")}
                </p>
              </div>
            </div>
            <div className="bottom grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 2xl:gap-7 !grid-rows-1 gr">
              {items
                .filter((data, index) => index < show)
                .map((item, index) => (
                  <ProductCard
                    key={index}
                    name={item.name}
                    image={item.image}
                    discount={item.discount}
                    discountPercent={item.discountPercent}
                    from={item.priceFrom}
                    price={item.price}
                    star={item.star}
                    playstationIcon={item.playstation}
                    xboxIcon={item.xbox}
                    nintendoIcon={item.nintendo}
                    userIcon={item.user}
                    productKeyIcon={item.productKey}
                    available={item.available}
                    className="!bg-none "
                    Class=" !bg-[#1E2127]"
                  />
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WeeklyDeals;
