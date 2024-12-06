import React from "react";
import Container from "./layer/Container";
import bigStar from "../assets/footerStarBig.png";
import star from "../assets/footerStar.png";
import safe from "../assets/saveIcon.png";
import viva from "../assets/viva.png";
import stripe from "../assets/stripe.png";
import iPay from "../assets/iPay.png";
import amex from "../assets/amex.png";
import mastercard from "../assets/mastercard.png";
import paypal from "../assets/paypal.png";
import oPay from "../assets/opay.png";
import visa from "../assets/visa.png";
import gPay from "../assets/gpay.png";
import skrill from "../assets/skrill.png";
import amazonPay from "../assets/amazonPay.png";
import smallLogo from "../assets/favicon.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import PaymentImgs from "./layer/PaymentImgs";

const Footer = () => {
  let companyLinks = [
    { text: "home", link: "/" },
    { text: "out story", link: "/" },
    { text: "blog", link: "/" },
    { text: "contact us", link: "/" },
  ];
  let ordersLinks = [
    { text: "my order", link: "/" },
    { text: "refund policy", link: "/" },
    { text: "cancelations", link: "/" },
    { text: "help center", link: "/" },
  ];
  let resourcesLinks = [
    { text: "Why do Customers Love Us", link: "/" },
    { text: "Redeem Argentina and Turkey", link: "/" },
    { text: "How to Sell?", link: "/" },
    { text: "How Become affliate?", link: "/" },
  ];
  let socialLinks = [
    { icon: <FaXTwitter />, link: "/" },
    { icon: <FaInstagram />, link: "/" },
    { icon: <FaFacebookF />, link: "/" },
    { icon: <FaLinkedinIn />, link: "/" },
  ];

  let payOptions = [
    viva,
    stripe,
    iPay,
    amex,
    mastercard,
    paypal,
    oPay,
    visa,
    gPay,
    skrill,
    amazonPay,
  ];

  return (
    <footer className="pt-10 md:pt-20 xl:pt-40 px-3 xl:px-0 pb-6">
      <Container className=" flex !px-0.5 py-0.5  bg-gradient-to-b from-Gr-start to-Gr-end rounded-[1.875rem] font-openSans text-white max-w-[116.375rem] ">
        <div className="main !h-full !w-full bg-secondary-bg rounded-[1.75rem] pt-10 px-3 lg:px-10 xl:px-4 2xl:px-28 lg:pt-20 2xl:pt-36 pb-9 flex flex-col gap-y-20 2xl:gap-y-36 ">
          <div className="top flex flex-col lg:flex-row justify-between gap-y-14 ">
            <div className="rating flex  justify-between gap-x-4 lg:flex-col gap-y-8 2xl:gap-y-10 items-end lg:items-start sm:px-5 lg:px-0 ">
              <div className="trust flex flex-col xl:gap-y-5 2xl:gap-y-7">
                <p className=" font-medium xl:text-[28px] leading-[42px]">
                  Trustful
                </p>
                <div className="trustpilot flex flex-col gap-y-1.5 xl:gap-y-4">
                  <div className="star flex flex-col gap-y-2 xl:gap-y-3.5 ml-1 xl:ml-0">
                    <div className="top flex gap-x-0.5 xl:gap-x-1.5 items-baseline">
                      <img
                        className="aspect-square w-7 xl:w-12 2xl:w-[3.75rem]"
                        src={bigStar}
                        alt={bigStar}
                      />
                      <p className="text-xl  xl:text-4xl 2xl:text-[45px] tracking-[-5%]">
                        Trustpilot
                      </p>
                    </div>
                    <div className="main flex gap-x-1">
                      <div className="starDiv p-1 xl:p-2 bg-gradient-to-tr from-Gr-start to-Gr-end">
                        <img
                          className="aspect-square w-4 xl:w-6 2xl:w-8"
                          src={star}
                          alt={star}
                        />
                      </div>
                      <div className="starDiv p-1 xl:p-2 bg-gradient-to-tr from-Gr-start to-Gr-end">
                        <img
                          className="aspect-square w-4 xl:w-6 2xl:w-8"
                          src={star}
                          alt={star}
                        />
                      </div>
                      <div className="starDiv p-1 xl:p-2 bg-gradient-to-tr from-Gr-start to-Gr-end">
                        <img
                          className="aspect-square w-4 xl:w-6 2xl:w-8"
                          src={star}
                          alt={star}
                        />
                      </div>
                      <div className="starDiv p-1 xl:p-2 bg-gradient-to-tr from-Gr-start to-Gr-end">
                        <img
                          className="aspect-square w-4 xl:w-6 2xl:w-8"
                          src={star}
                          alt={star}
                        />
                      </div>
                      <div className="starDiv p-1 xl:p-2 bg-primary after:absolute relative after:top-0 after:left-0 after:h-full after:w-1/2 after:z-[-1] z-0 after:bg-gradient-to-tr after:from-Gr-start after:to-Gr-end">
                        <img
                          className="aspect-square w-4 xl:w-6 2xl:w-8"
                          src={star}
                          alt={star}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="score">
                    <p className="text-xs xl:text-lg 2xl:text-xl text-[#787A7D]">
                      TrustScore 5.0 | 457 Reviews
                    </p>
                  </div>
                </div>
              </div>
              <div className="safe flex flex-col gap-y-2 2xl:gap-y-4">
                <div className="top">
                  <div className="heading  flex gap-x-2.5 items-center xl:items-start">
                    <img
                      className="w-4 h-5 xl:h-auto xl:w-auto"
                      src={safe}
                      alt={safe}
                    />
                    <h2 className=" text-sm xl:text-2xl 2xl:text-[1.75rem] leading-7 xl:leading-10">
                      Safe & Secure
                    </h2>
                  </div>
                  <p className=" text-xs xl:text-lg 2xl:text-xl text-[#787A7D]">
                    100% Secure, 24/7 Support
                  </p>
                </div>
                <div className="w-full h-0.5 bg-[#4A4A4A]"></div>
                <div className="bottom">
                  <p className=" text-xs xl:text-2xl text-Gr-end">
                    100% Money Back
                  </p>
                </div>
              </div>
            </div>
            <div className="lists flex gap-x-10 xl:gap-x-16 2xl:gap-x-28 flex-wrap justify-between px-5 lg:px-0 gap-y-14">
              <div className="company flex flex-col gap-y-2 xl:gap-y-7">
                <p className=" text-lg xl:text-[28px] font-medium">Company</p>
                <ul className="flex flex-col gap-y-4 xl:gap-y-10 2xl:gap-y-12">
                  {companyLinks.map((item, index) => (
                    <li
                      className="capitalize text-sm xl:text-xl 2xl:text-2xl opacity-60 hover:cursor-pointer"
                      key={index}
                    >
                      <Link to={item.link}>{item.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="orders flex flex-col gap-y-2 xl:gap-y-7">
                <p className=" text-lg xl:text-[28px] font-medium">Orders</p>
                <ul className="flex flex-col gap-y-4 xl:gap-y-10 2xl:gap-y-12">
                  {ordersLinks.map((item, index) => (
                    <li
                      className="capitalize text-sm xl:text-xl 2xl:text-2xl opacity-60 hover:cursor-pointer"
                      key={index}
                    >
                      <Link to={item.link}>{item.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="resources flex flex-col gap-y-2 xl:gap-y-7">
                <p className=" text-lg xl:text-[28px] font-medium">Company</p>
                <ul className="flex flex-col gap-y-4 xl:gap-y-10 2xl:gap-y-12">
                  {resourcesLinks.map((item, index) => (
                    <li
                      className="capitalize text-sm xl:text-xl 2xl:text-2xl opacity-60 hover:cursor-pointer"
                      key={index}
                    >
                      <Link to={item.link}>{item.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="followUs flex flex-col gap-y-4 xl:gap-y-7  sm:px-5 lg:px-0">
              <p className=" text-lg xl:text-[28px] font-medium">Follow Us</p>
              <div className="socialLinks flex gap-x-2.5">
                {socialLinks.map((items, index) => (
                  <a key={index} href={items.link}>
                    <div className="icon xl:text-2xl p-1.5 xl:p-3 rounded-full bg-gradient-to-tr from-Gr-start to-Gr-end">
                      {items.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="bottom flex flex-col items-center gap-y-14 md:gap-y-16 2xl:gap-y-28 sm:px-5 lg:px-0">
            <div className="pay flex gap-2.5 sm:gap-x-4 flex-wrap ">
             <PaymentImgs/>
            </div>
            <div className="bottomFooter text-sm md:text-xl flex flex-col sm:flex-row gap-y-2 items-baseline justify-between w-full">
              <div className="logo flex sm:hidden ">
                <img
                  className="aspect-[52/38] w-9"
                  src={smallLogo}
                  alt={smallLogo}
                />
              </div>
              <div className="copyright">
                <p>Vbrae © Copyright 2023</p>
              </div>
              <div className="logo hidden sm:flex">
                <img
                  className="aspect-[52/38] w-[52px]"
                  src={smallLogo}
                  alt={smallLogo}
                />
              </div>
              <div className="terms">
                <p>Privacy Policy | Terms of Service</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
