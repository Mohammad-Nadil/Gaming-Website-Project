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

const Model = ({ isActive, onClick, text }) => {
  return (
    <li onClick={onClick}>
      <button
        className={`font-openSans text-2xl text-white py-2.5 px-3  rounded-xl border duration-300 hover:bg-gradient-to-tr transition-all from-Gr-start to-Gr-end hover:border-transparent   ${isActive ? " bg-gradient-to-tr  border-transparent" : " bg-transparent  border-white  "}`}
      >
        {text}
      </button>
    </li>
  );
};

const Category = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  let [active, setActive] = useState(null);
  let handleVersion = (index) => {
    setActive(index)
  };

  let links = [
    {
      icon: <FaPlaystation />,
      link: "/shop",
      vers: [
        { name: "PlayStation Network" },
        { name: "PS5 " },
        { name: "PS4 " },
        { name: "PS3 " },
        { name: "PSVR " },
      ],
    },
    {
      icon: <FaXbox />,
      link: "/shop",
      vers: [
        { name: "Xbox Live" },
        { name: "Xbox Series X|S " },
        { name: "Xbox One " },
        { name: "Xbox 360 " },
        { name: "Xbox " },
      ],
    },
    {
      icon: <BsNintendoSwitch />,
      link: "/shop",
      vers: [
        { name: "Nintendo " },
        { name: "Switch " },
        { name: "Switch Lite" },
        { name: "Switch " },
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
        { name: "Compatible Platforms" },
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
        { name: "Other Accessories" },
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
        { name: "Google Play & App Store" },
      ],
    },
    {
      icon: <IoMdCodeWorking />,
      link: "/shop",
      vers: [
        { name: "Productivity Apps" },
        { name: "Entertainment Apps" },
        { name: "Educational Software" },
        { name: "Utility Tools" },
        { name: "Security Software" },
      ],
    },
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
          <div className=" hidden sm:flex w-0.5 h-11 bg-primary"></div>
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

        <ul className="versions flex gap-x-6">
        {links[activeIndex]?.vers.map((versItem, index) => (
            <Model
              text={versItem.name}
              isActive={active === index}
              onClick={() => handleVersion(index)}
            />
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Category;
