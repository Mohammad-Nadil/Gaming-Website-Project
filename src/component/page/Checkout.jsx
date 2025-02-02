import React, { useState } from "react";
import Container from "../layer/Container";
import star from "../../assets/star.svg";
import save from "../../assets/saveIcon.png";
import CustomBtn from "../layer/CustomBtn";
import line from "../../assets/lineHorizontal.png";
import { Link } from "react-router-dom";
import viva from "../../assets/viva.png";
import stripe from "../../assets/stripe.png";
import iPay from "../../assets/iPay.png";
import amazonPay from "../../assets/amazonPay.png";
import skrill from "../../assets/skrill.png";
import gPay from "../../assets/gpay.png";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import paypal from "../../assets/paypal.png";
import amex from "../../assets/amex.png";
import oPay from "../../assets/opay.png";
import vivaOff from "../../assets/vivaOff.png";
import stripeOff from "../../assets/stripeOff.png";
import iPayOff from "../../assets/iPayOff.png";
import amazonPayOff from "../../assets/amazonPayOff.png";
import skrillOff from "../../assets/skrillOff.png";
import gPayOff from "../../assets/gpayOff.png";
import visaOff from "../../assets/visaOff.png";
import mastercardOff from "../../assets/mastercardOff.png";
import paypalOff from "../../assets/paypalOff.png";
import amexOff from "../../assets/amexOff.png";
import oPayOff from "../../assets/opayOff.png";
import { IoIosLock } from "react-icons/io";

const PinInput = ({ placeholder }) => {
  const [pin, setPin] = useState("");
  const [show, setShow] = useState(false);
  const handleInputChange = (event) => {
    const { value } = event.target;
    setPin(value);
  };
  return (
    <div className="relative flex items-center gap-x-3 bg-secondary-bg rounded-xl py-2.5 sm:py-5 px-3 sm:px-6">
      <p className="sm:text-2xl text-white text-nowrap">{placeholder}</p>
      <input
        type={show ? "text" : "password"}
        className=" bg-secondary-bg w-3/5  outline-none sm:text-2xl text-white  "
        value={pin}
        onChange={handleInputChange}
      />
      <IoIosLock
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer sm:text-3xl text-primary"
        onClick={() => setShow(!show)}
      />
    </div>
  );
};

const Checkout = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i); // Next 10 years

  let payOptions = [
    { on: viva, off: vivaOff, links: "/" },
    { on: stripe, off: stripeOff, links: "/" },
    { on: iPay, off: iPayOff, links: "/" },
    { on: amex, off: amexOff, links: "/" },
    { on: mastercard, off: mastercardOff, links: "/" },
    { on: paypal, off: paypalOff, links: "/" },
    { on: oPay, off: oPayOff, links: "/" },
    { on: visa, off: visaOff, links: "/" },
    { on: gPay, off: gPayOff, links: "/" },
    { on: skrill, off: skrillOff, links: "/" },
    { on: amazonPay, off: amazonPayOff, links: "/" },
  ];

  return (
    <div>
      <Container className="flex flex-col gap-y-6 md:gap-y-11 py-6 md:py-12 font-openSans overflow-hidden ">
        <div className="header font-openSans text-white flex items-center justify-between">
          <div className="name flex gap-x-2.5 items-center text-white">
            <h2 className="sm:text-4xl text-nowrap">Checkout</h2>
          </div>
          <div className="line w-2/3 ">
            <img className="w-full" src={line} alt="line" />
          </div>
          <div className="btn">
            <Link to="/shop">
              <button className="text-xs sm:text-2xl border py-1.5 px-3 md:py-3 md:px-5 rounded-xl hover:scale-110 duration-300 text-nowrap">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
        <div className="main flex flex-col xl:flex-row gap-x-3 gap-y-10 lg:gap-y-16 xl:gap-x-11 w-full">
          <div className="xl:w-2/3 flex flex-col gap-y-10 lg:gap-y-16">
            <div className="top flex flex-wrap gap-2 sm:gap-4">
              {payOptions.map((item, index) => (
                <div key={index} onClick={() => handleClick(index)}>
                  <div className=" w-10 md:w-20 h-7 md:h-14 flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain"
                      src={activeIndex === index ? item.on : item.off}
                      alt="payment option"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="main flex flex-col md:flex-row gap-4 sm:gap-6 2xl:gap-10 ">
              <div className="aboutCard flex flex-col gap-y-4 sm:gap-y-6">
                <PinInput placeholder="Card Name:" />
                <PinInput placeholder="Card Number:" />
                <PinInput placeholder="Security code:" />
              </div>
              <div className=" flex flex-col gap-y-4 sm:gap-y-6 md:w-1/2">
                {/* Month Dropdown */}
                <div className="relative bg-secondary-bg rounded-xl py-2.5 sm:py-5 px-3 sm:px-6 w-full">
                  <select
                    className="bg-secondary-bg sm:text-2xl text-white outline-none w-full"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  >
                    <option value="" disabled>
                      Select Month
                    </option>
                    {months.map((month, index) => (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Year Dropdown */}
                <div className="relative bg-secondary-bg rounded-xl py-2.5 sm:py-5 px-3 sm:px-6 w-full">
                  <select
                    className="bg-secondary-bg sm:text-2xl text-white outline-none w-full"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    <option value="" disabled>
                      Select Year
                    </option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <CustomBtn text="Pay Now" className="w-full justify-center text-sm sm:text-2xl" />
              </div>
            </div>
          </div>
          <div className="xl:w-1/3 flex flex-col gap-y-12">
            <div className="totalBill flex flex-col gap-y-9 border border-primary/50 rounded-3xl py-7 px-8">
              <div className="price flex flex-col gap-y-7 text-white text-2xl">
                <div className="item flex justify-between items-center">
                  <p>2 items</p>
                  <p>$99</p>
                </div>
                <div className="vat flex justify-between items-center">
                  <p>VAT</p>
                  <p>$2.82</p>
                </div>
                <div className="fees flex justify-between items-center">
                  <p>Fees</p>
                  <p>$0.82</p>
                </div>
              </div>
              <div className="line w-full h-0.5 bg-primary/50"></div>
              <div className="total flex flex-col gap-y-7">
                <div className="totalAmount text-[26px] text-white flex justify-between items-center">
                  <p>Total</p>
                  <p>$102.76</p>
                </div>
              </div>
            </div>
            <div className="trust border border-primary/50 flex flex-col gap-y-9 p-8 rounded-3xl">
              <div className="top flex flex-col gap-y-3 items-center">
                <div className="heading flex items-center gap-x-1">
                  <img src={star} alt="star" />
                  <p className="text-white text-4xl">Trustpilot</p>
                </div>
                <div className="text text-primary text-xl">
                  TrustScore 5.0 | 457 Reviews
                </div>
              </div>
              <div className="line w-full h-0.5 bg-primary/50"></div>
              <div className="bottom flex flex-col gap-y-3 items-center">
                <div className="heading flex items-center gap-x-1">
                  <img src={save} alt="save" />
                  <p className="text-white text-3xl">Safe & Secure</p>
                </div>
                <div className="text text-primary text-xl">
                  100% Secure, 24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
