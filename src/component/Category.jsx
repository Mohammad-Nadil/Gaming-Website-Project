import React, { useState } from "react";
import Container from "./layer/Container";
import { Link } from "react-router-dom";
import { FaMouse, FaPlaystation, FaXbox } from "react-icons/fa";
import { BsHeadsetVr, BsNintendoSwitch } from "react-icons/bs";
import { GiCrestedHelmet } from "react-icons/gi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { IoMdCodeWorking } from "react-icons/io";

const Li = ({ href, icon, isActive, onClick, className }) => {
  return (
    <li
      onClick={onClick}
      className={`border border-[#57595D] duration-300 rounded-lg sm:border-primary-bg hover:border-[#57595D] ${className}`}
    >
      <Link to={href}>
        <p
          className={`after:w-full after:h-full after:absolute relative after:top-0 after:left-0 overflow-hidden after:-z-10 z-10 after:opacity-0 hover:after:opacity-100 after:duration-300 after:bg-gradient-to-bl after:from-Gr-end after:to-Gr-start rounded-lg p-3 hover:text-white duration-300 border border-primary-bg !transition-all ${
            isActive ? "from-Gr-end to-Gr-start text-white" : ""
          }`}
        >
          {icon}
        </p>
      </Link>
    </li>
  );
};

const Model = ({ onClick, text, isActive }) => {
  return (
    <li onClick={onClick}>
      <button
        className={`font-openSans text-sm xl:text-2xl text-white py-1.5 xl:py-2.5 px-2.5 xl:px-3 rounded-lg xl:rounded-xl border duration-300 hover:bg-gradient-to-tr transition-all from-Gr-start to-Gr-end hover:border-transparent text-nowrap ${
          isActive
            ? "bg-gradient-to-tr border-transparent"
            : "bg-transparent border-white"
        }`}
      >
        {text}
      </button>
    </li>
  );
};

const Category = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeModels, setActiveModels] = useState([]);

  const handleClick = (index) => {
    setActiveIndex(index);
    setActiveModels([]);
  };

  const handleModelClick = (index) => {
    setActiveModels((prevState) =>
      prevState.includes(index)
        ? prevState.filter((i) => i !== index)
        : [...prevState, index]
    );
  };

  let links = [
    {
      icon: <FaPlaystation />,
      link: "/shop",
      vers: [
        { name: "PlayStation Network" },
        { name: "PS5" },
        { name: "PS4" },
        { name: "PS3" },
        { name: "PSVR" },
      ],
    },
    {
      icon: <FaXbox />,
      link: "/shop",
      vers: [
        { name: "Xbox Live" },
        { name: "Xbox Series X|S" },
        { name: "Xbox One" },
        { name: "Xbox 360" },
        { name: "Xbox" },
      ],
    },
    {
      icon: <BsNintendoSwitch />,
      link: "/shop",
      vers: [
        { name: "Nintendo" },
        { name: "Switch" },
        { name: "Switch Lite" },
        { name: "Nintendo Online Membership" },
      ],
    },
    {
      icon: <FaMouse />,
      link: "/shop",
      vers: [
        { name: "PC Games" },
        { name: "Game Vouchers" },
        { name: "Software Apps" },
        { name: "Gaming Accessories" },
        { name: "Steam Wallet Codes" },
      ],
    },
  ];

  let links2 = [
    {
      icon: <BsHeadsetVr />,
      link: "/shop",
      vers: [
        { name: "VR Headsets" },
        { name: "VR Games" },
        { name: "VR Accessories" },
        { name: "VR Bundles" },
      ],
    },
    {
      icon: <GiCrestedHelmet />,
      link: "/shop",
      vers: [
        { name: "Gaming Headsets" },
        { name: "Controllers" },
        { name: "Keyboards" },
        { name: "Mice" },
      ],
    },
    {
      icon: <RiMoneyDollarBoxFill />,
      link: "/shop",
      vers: [
        { name: "PlayStation Store" },
        { name: "Xbox Gift Cards" },
        { name: "Nintendo eShop Cards" },
        { name: "Steam Wallet Codes" },
      ],
    },
    {
      icon: <IoMdCodeWorking />,
      link: "/shop",
      vers: [
        { name: "Productivity Apps" },
        { name: "Entertainment Apps" },
        { name: "Educational Software" },
      ],
    },
  ];

  return (
    <div className="bg-primary-bg">
      <Container className="flex flex-col gap-y-3 sm:gap-y-4">
        <ul className="text-primary text-2xl md:text-[43px] flex justify-between xl:py-6 items-center overflow-x-auto scrollbar-hide gap-x-4 sm:gap-x-0 ">
          {links.map((item, index) => (
            <Li
              key={index}
              icon={item.icon}
              href={item.link}
              isActive={activeIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
          <div className="hidden sm:flex w-0.5 h-11 bg-primary"></div>
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
        <ul className="versions flex gap-x-2 sm:gap-x-4 md:gap-x-6 overflow-x-auto scrollbar-hide w-full">
          {activeIndex !== null &&
            links
              .concat(links2)
              [
                activeIndex
              ]?.vers.map((versItem, index) => <Model key={index} text={versItem.name} isActive={activeModels.includes(index)} onClick={() => handleModelClick(index)} />)}
        </ul>
      </Container>
    </div>
  );
};

export default Category;
