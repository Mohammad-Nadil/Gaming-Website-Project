import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const SellerFilter = () => {
  let [close, setClose] = useState(false);
  let [showSeller, setShowSeller] = useState("");
  let [show , setShow] = useState(10)

  let seller = [
    { name: "Seller Name", id: "1" },
    { name: "Seller Name", id: "2" },
    { name: "Seller Name", id: "3" },
    { name: "Seller Name", id: "4" },
    { name: "Seller Name", id: "5" },
    { name: "Seller Name", id: "6" },
    { name: "Seller Name", id: "7" },
    { name: "Seller Name", id: "8" },
    { name: "Seller Name", id: "9" },
    { name: "Seller Name", id: "10" },
    { name: "Seller Name", id: "11" },
    { name: "Seller Name", id: "12" },
    { name: "Seller Name", id: "13" },
    { name: "Seller Name", id: "14" },
    { name: "Seller Name", id: "15" },
    { name: "Seller Name", id: "16" },
    { name: "Seller Name", id: "17" },
    { name: "Seller Name", id: "18" },
    { name: "Seller Name", id: "19" },
    { name: "Seller Name", id: "20" },
  ];

  return (
    <div className="bg-gradient-to-t from-Gr-start to-Gr-end p-0.5 rounded-3xl font-openSans">
      <div className="delivery font-openSans w-full h-full bg-primary-bg rounded-3xl py-5 px-6 flex flex-col gap-y-5">
        <div
          onClick={() => setClose(!close)}
          className="head flex justify-between items-center w-full  text-Gr-end text-2xl"
        >
          <p className="font-semibold ">Seller</p>
          <div className="icon">
            <FaAngleUp
              className={`duration-300 ${close ? " rotate-180 " : " rotate-0"}`}
            />
          </div>
        </div>
        <div
          className={`main overflow-hidden transition-all duration-500 flex flex-col gap-y-6  ${
            close ? "max-h-0" : "max-h-[52rem]"
          }`}
        >
          {seller.filter(( data , index )=> index < show  ).map((item, index) => (
            <div key={index} className="flex gap-x-2 items-center">
              <input
                className="appearance-none bg-white w-6 h-6 border-2 border-white rounded-full checked:bg-Gr-start checked:border-transparent transition-all duration-300"
                type="radio"
                name="seller"
                id={item.id}
              />
              <label
                htmlFor={item.id}
                className=" sm:text-xl xl:text-2xl text-white"
              >
                {item.name}
              </label>
            </div>
          ))}
        </div>
        <p
          onClick={() => setShow(20)}
          className="text-2xl text-Gr-end cursor-pointer  w-auto hover:text-Gr-end/70 duration-300"
        >
          + See all
        </p>
      </div>
    </div>
  );
};

export default SellerFilter;
