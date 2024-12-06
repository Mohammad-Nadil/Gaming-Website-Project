import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

let Radio = ({ label, id, children, className }) => {
  return (
    <div className="flex gap-x-2 items-center">
      <input
        className="appearance-none bg-white w-6 h-6 border-2 border-white rounded-full checked:bg-Gr-start checked:border-transparent transition-all duration-300"
        type="radio"
        name="sort"
        id={id}
      />
      <label htmlFor={id} className={` sm:text-xl xl:text-2xl text-white ${className}`}>
        {label} {children}
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
          <p className="font-semibold ">Price</p>
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
          <Radio label="$10 to $25" id="10-25" />
          <Radio label="$26 to $50" id="26-50" />
          <Radio label="$51 to $100" id="51-100" />
          <Radio label="$100 to $200" id="100-200" />
          <Radio className="flex gap-x-2 items-center w-5/6" id="custom">
            From
            <input
              type="text"
              name="custom"
              id="custom"
              className=" w-16 xl:w-24 rounded-lg outline-none bg-[#1E2127] py-2 xl:py-3 px-3 xl:px-5 placeholder:"
              placeholder="$0"
            />
            To
            <input
              type="text"
              name="custom"
              id="custom"
              className=" w-16 xl:w-24 rounded-lg outline-none bg-[#1E2127] py-2 xl:py-3 px-3 xl:px-5 placeholder:"
              placeholder="$0"
            />
          </Radio>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
