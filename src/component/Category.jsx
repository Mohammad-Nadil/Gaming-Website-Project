import React, { useState } from "react";
import Container from "./layer/Container";
import { Link } from "react-router-dom";
import { FaMouse, FaPlaystation, FaXbox } from "react-icons/fa";
import { BsHeadsetVr, BsNintendoSwitch } from "react-icons/bs";
import { GiCrestedHelmet } from "react-icons/gi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { IoMdCodeWorking } from "react-icons/io";

const Li = ({ href, icon, isActive, onClick , className }) => {
  return (
    <li
      onClick={onClick}
      className={`border border-[#57595D] duration-300 rounded-lg sm:border-primary-bg hover:border-[#57595D] ${className}`}
    >
      <Link to={href}>
        <p
          className={`bg-gradient-to-bl hover:from-Gr-end hover:to-Gr-start rounded-lg p-3 hover:text-white !duration-300 border border-primary-bg !transition-all ${
            isActive ? "from-Gr-end to-Gr-start text-white" : ""
          }`}
        >
          {icon}
        </p>
      </Link>
    </li>
  );
};

const Category = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(index); 
  };


  let links = [
    { icon: <FaPlaystation />, link: "/" },
    { icon: <FaXbox />, link: "/" },
    { icon: <BsNintendoSwitch />, link: "/" },
    { icon: <FaMouse />, link: "/" },
  ];
  let links2 = [
    { icon: <BsHeadsetVr />, link: "/" },
    { icon: <GiCrestedHelmet />, link: "/" },
    { icon: <RiMoneyDollarBoxFill />, link: "/" },
    { icon: <IoMdCodeWorking />, link: "/" },
  ];



  return (
    <div className="bg-primary-bg">
      <Container>
        <ul className="text-primary text-2xl  md:text-[43px] flex justify-between py-6 items-center overflow-x-auto scrollbar-hide gap-x-4 sm:gap-x-0 ">
          {links.map((item, index) => (
            <Li
              key={index}
              icon={item.icon}
              href={item.link}
              isActive={activeIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
          <div className="w-0.5 h-11 bg-primary"></div>
          {links2.map((item, index) => (
            <Li
              key={index + links.length}
              icon={item.icon}
              href={item.link}
              isActive={activeIndex === index + links.length}
              onClick={() => handleClick(index + links.length)}
            />
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Category;
