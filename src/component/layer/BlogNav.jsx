import React, { useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

const BlogNav = () => {
  let category = [
    { name: "all", link: "#" },
    { name: "gaming", link: "#" },
    { name: "investment", link: "#" },
    { name: "software", link: "#" },
    { name: "news", link: "#" },
  ];

  let [active, setActive] = useState(null);
  let manage = (index) => {
    setActive(index);
  };
  let [search, setSearch] = useState("");
  let manageSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <Container className="py-4 md:py-12 flex flex-col-reverse lg:flex-row justify-between gap-y-2.5 sm:gap-y-4">
        <div className="category font-openSans flex items-center gap-x-7">
          <h2 className="hidden lg:flex text-xl 2xl:text-4xl text-white text-nowrap">
            Blog Articles
          </h2>
          <ul className="flex gap-x-3 sm:gap-x-4 2xl:gap-x-8 overflow-x-auto scrollbar-hide">
            {category.map((item, index) => (
              <Link key={index} to={item.link}>
                <li
                  onClick={() => manage(index)}
                  className={` border  text-white py-1.5 2xl:py-3 px-3 2xl:px-4 rounded-md sm:rounded-lg text-xs sm:text-lg 2xl:text-2xl  ${active === index ? "bg-gradient-to-r from-Gr-start to-Gr-end border-primary-bg" : " bg-transparent border-white"} `}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="right lg:w-full flex gap-x-12 justify-between items-center">
          <p className="hidden lg:flex"></p>
          <h2 className=" lg:hidden sm:text-xl 2xl:text-4xl text-white text-nowrap">
            Blog Articles
          </h2>
          <div className="search w-full xl:w-1/2 relative ">
            <div className={`search text-white w-full `}>
              <input
                type="text"
                name="search"
                id="search"
                value={search}
                onChange={manageSearch}
                placeholder="Search blog article..."
                className="py-2 sm:py-4 px-3 sm:px-6 bg-secondary-bg placeholder:text-[#B2B8C2] placeholder:font-openSans font-openSans rounded-[0.625rem]  outline-none w-full text-sm md:text-base"
              />
              <div className="icon absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/2 sm:-translate-x-full text-sm sm:text-[1.375rem]">
                <IoMdSearch />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogNav;
