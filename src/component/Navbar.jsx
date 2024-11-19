import React, { useState } from "react";
import Container from "./layer/Container";
import logo from "../assets/logo.svg";
import { IoMdSearch } from "react-icons/io";
import { FaDollarSign, FaHeart } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  let [show , setShow] = useState()

  let [search, setSearch] = useState("");
  let manageSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="bg-primary-bg">
      <Container className="flex justify-between items-center sm:gap-x-11 2xl:gap-x-44 py-6 lg:py-12">
        <div className="logo">
          <div className="smallMenu hidden"></div>
          <div className="img w-32 lg:w-[13.375rem] aspect-[5/1]">
            <img src={logo} alt={logo} className="!w-full !h-full" />
          </div>
        </div>
        <div className={`search text-white w-full sm:relative absolute  left-0 duration-300 sm:opacity-100 sm:visible top-full ${show ?"opacity-100 visible":" opacity-0 invisible"} `}>
          <input
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={manageSearch}
            placeholder="Search products, sellers, deals..."
            className="py-3 px-6 bg-secondary-bg placeholder:text-[#B2B8C2] placeholder:font-openSans font-openSans rounded-[0.625rem]  outline-none w-full text-sm md:text-base"
          />
          <div className="icon absolute top-1/2 right-0 -translate-y-1/2 -translate-x-full text-[1.375rem]">
            <IoMdSearch />
          </div>
        </div>
        <div className="btn text-white flex gap-x-3 lg:gap-x-[2.125rem] text-2xl xl:text-4xl">
          <div onClick={()=>setShow(!show)} className="smallSearch sm:hidden  ">
            <IoMdSearch />
          </div>
          <div className="money hidden sm:flex">
            <AiFillDollarCircle />
          </div>
          <div className="wishlist">
            <FaHeart />
          </div>
          <div className="cart">
            <HiShoppingBag />
          </div>
          <div className="profile">
            <FaUserCircle />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
