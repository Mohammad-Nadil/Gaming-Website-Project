import React from "react";

const SmallCards = ({name , image , from , price , discount , discountPercent , className}) => {

  return (
    <div className={`flex p-2 sm:p-3 lg:p-2  xl:p-2.5 rounded-xl sm:rounded-2xl lg:rounded-xl 2xl:rounded-3xl bg-[#1E2127] items-center gap-x-7 ${className} mx-0.5 sm:my-3 lg:mx-0.5 my-2.5`}>
      <div className=" w-1/4 2xl:w-auto aspect-square ">
        <img
          className=" h-full 2xl:h-32 aspect-square object-cover rounded-xl sm:rounded-2xl lg:rounded-xl 2xl:rounded-3xl"
          src={image}
          alt={image}
        />
      </div>
      <div className="  flex flex-col  h-full sm:text-4xl lg:text-base xl:text-2xl 2xl:text-3xl w-2/3">
        <div className="name  text-white">
          <h2>{name}</h2>
        </div>
        <div className="price+ flex justify-between w-full sm:pt-3 lg:pt-1 2xl:pt-2.5 ">
          <div className="price">
            {discount ? (
              <p className="text-[#E614FC] flex items-end gap-x-2.5">
                <span className=" text-sm sm:text-xl lg:text-sm xl:text-base  2xl:text-lg text-primary flex flex-col">
                  From{" "}
                  <div>
                    <del>$ {from} </del>to
                  </div>
                </span>
                ${price}
              </p>
            ) : (
              <p className="text-[#E614FC] "> Starts at ${price}</p>
            )}
          </div>
          <div className="btn ">{discount && <div><button className="border rounded-lg sm:rounded-xl   lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl text-sm sm:text-2xl lg:text-sm  xl:text-base 2xl:text-2xl border-[#28B8E3] text-[#28B8E3] py-1 sm:py-2 lg:py-1 xl:py-2 px-1.5 sm:px-3 lg:px-1.5 xl:px-3" >Save {discountPercent}%</button></div>}</div>
        </div>
      </div>
    </div>
  );
};

export default SmallCards;
