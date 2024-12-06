import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

let Price = ({ label, id }) => {
  return (
    <div className="flex gap-x-2 items-center">
      <input
        className="appearance-none bg-white w-6 h-6 border-2 border-white rounded-full checked:bg-Gr-start checked:border-transparent transition-all duration-300"
        type="radio"
        name="price"
        id={id}
      />
      <label htmlFor={id} className=" sm:text-xl xl:text-2xl text-white">
        {label}
      </label>
    </div>
  );
};

const PriceFilter = () => {
  let [close, setClose] = useState(false);

  return (
    <div className="bg-gradient-to-t from-Gr-start to-Gr-end p-0.5 rounded-3xl font-openSans">
      <div className="delivery font-openSans w-full h-full bg-primary-bg rounded-3xl py-5 px-6 flex flex-col gap-y-5">
        <div
          onClick={() => setClose(!close)}
          className="head flex justify-between items-center w-full  text-Gr-end text-2xl"
        >
          <p className="font-semibold ">Sort by</p>
          <div className="icon">
            <FaAngleUp
              className={`duration-300 ${close ? " rotate-180 " : " rotate-0"}`}
            />
          </div>
        </div>
        <div
          className={`main overflow-hidden transition-all duration-500 flex flex-col gap-y-6  ${
            close ? "max-h-0" : "max-h-[25rem]"
          }`}
        >
          <Price label="Most Recent" id="recent" />
          <Price label="Features Items" id="features" />
          <Price label="Best Sellers" id="sellers" />
          <Price label="Best Reviews" id="reviews" />
          <Price label="Lowest to highest price" id="price" />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
