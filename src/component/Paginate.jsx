import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "./layer/ProductCard";
import games from "../games";

let items = games;

console.log(length.games);

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <ProductCard
            name={item.name}
            image={item.thumbnail}
            discount={item.discount}
            discountPercent={item.discountPercent}
            from={item.priceFrom}
            price={item.price}
            star={item.star}
            playstationIcon={item.platforms.playstation}
            xboxIcon={item.platforms.xbox}
            nintendoIcon={item.platforms.nintendo}
            userIcon={true}
            productKeyIcon={item.productKey}
            available={item.available}
          />
        ))}
    </>
  );
}

const Paginate = ({ itemsPerPage }) => {
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
    </>
  );
};

export default Paginate;
