import React, { useState } from "react";
import { FaAngleUp, FaLocationArrow } from "react-icons/fa6";
import Toggler from "./Toggler";
import { BsLightningChargeFill } from "react-icons/bs";

const DeliveryFilter = () => {
  let [close, setClose] = useState(false);

  return (
    <div className="bg-gradient-to-t from-Gr-start to-Gr-end p-0.5 rounded-3xl font-openSans">
      <div className="delivery font-openSans w-full h-full bg-primary-bg rounded-3xl py-5 px-6 flex flex-col gap-y-5">
        <div
          onClick={() => setClose(!close)}
          className="head flex justify-between items-center w-full  text-Gr-end text-2xl"
        >
          <p className="font-semibold ">Delivery</p>
          <div className="icon">
            <FaAngleUp
              className={`duration-300 ${close ? " rotate-180 " : " rotate-0"}`}
            />
          </div>
        </div>
        <div
          className={`main overflow-hidden transition-all duration-500 flex flex-col gap-y-6  ${
            close ? "max-h-0" : "max-h-40"
          }`}
        >
          <div className="instantDelivery flex items-center justify-between  ">
            <p className=" sm:text-xl 2xl:text-2xl text-white flex items-center gap-x-1.5">
              <span>
                <BsLightningChargeFill className="  2xl:text-3xl" />
              </span>
              Instant Delivery
            </p>
            <Toggler />
          </div>
          <div className="manualDelivery flex items-center justify-between ">
            <p className=" sm:text-xl 2xl:text-2xl text-white flex items-center gap-x-1.5">
              <span>
                <FaLocationArrow className="  2xl:text-3xl" />
              </span>
              Manually Delivery
            </p>
            <Toggler />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryFilter;
