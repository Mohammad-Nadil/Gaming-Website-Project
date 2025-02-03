import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "./layer/ProductCard";
import games from "../games";
import Container from "./layer/Container";
import line from "../assets/lineHorizontal.png";
import BlogCard from "./layer/BlogCard";

let items = games;

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <BlogCard img={item.thumbnail}/>
        ))}
    </>
  );
}

const BlogPaginate = () => {
  const itemsPerPage = 9;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Container className=" py-10 sm:py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-52 flex flex-col gap-y-4 md:gap-y-8 mb-10" >
        <div className="header font-openSans text-white flex items-center justify-between">
          <div className="name flex gap-x-2.5 items-center text-white">
            <h2 className=" sm:text-4xl text-nowrap">Latest articles</h2>
          </div>
          <div className="line w-2/3 ">
            <img className="w-full" src={line} alt={line} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-6 2xl:gap-x-11 gap-y-4 sm:gap-y-6 md:gap-y-10 2xl:gap-y-20">
          <Items currentItems={currentItems} />
          <ReactPaginate
            containerClassName="flex gap-x-6 w-full justify-center absolute top-full  translate-y-1/2 "
            pageClassName="page-item w-8 md:w-[60px] aspect-square  rounded-full text-white border border-white/40 hover:bg-primary duration-300 text-xs md:text-2xl"
            pageLinkClassName="page-link grid place-content-center h-full w-full"
            activeClassName="active bg-gradient-to-tr from-Gr-start to-Gr-end text-white border-transparent "
            breakLabel="..."
            breakClassName="page-item text-3xl w-8 md:w-[60px] aspect-square  rounded-full text-white border border-white/40 hover:bg-primary duration-300"
            breakLinkClassName="page-link flex justify-center h-full w-full"
            nextLabel=" > "
            nextClassName="page-item w-8 md:w-[60px] aspect-square  rounded-full text-white border border-white/40 hover:bg-primary duration-300 text-xs md:text-2xl"
            nextLinkClassName="page-link grid place-content-center h-full w-full"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< "
            previousClassName="page-item w-8 md:w-[60px] aspect-square  rounded-full text-white border border-white/40 hover:bg-primary duration-300 text-xs md:text-2xl"
            previousLinkClassName="page-link grid place-content-center h-full w-full"
            renderOnZeroPageCount={null}
          />
        </div>
      </Container>
    </>
  );
};

export default BlogPaginate;
