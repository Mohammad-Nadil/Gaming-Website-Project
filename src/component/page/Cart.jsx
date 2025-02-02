import React from "react";
import Container from "../layer/Container";
import star from "../../assets/star.svg";
import save from "../../assets/saveIcon.png";
import CustomBtn from "../layer/CustomBtn";
import PaymentImgs from "../layer/PaymentImgs";
import line from "../../assets/lineHorizontal.png";
import CartCard from "../layer/CartCard";
import { Link } from "react-router-dom";

const Cart = () => {
  let item = [
    {
      name: "Forza Horizon 6",
      description:
        "An open-world racing game that lets players race across beautiful landscapes, from city streets to sprawling countryside.",
      category: "Racing",
      price: 55.99,
      discount: true,
      discountPercent: 25,
      priceFrom: 40.99,
      star: 5,
      platforms: {
        playstation: true,
        xbox: true,
        nintendo: true,
        pc: true,
      },
      languages: ["English", "Spanish", "Italian", "German"],
      releaseDate: "2024-10-01",
      playableOn: ["Xbox Series X/S", "PC", "Nintendo Switch"],
      editions: {
        deluxe: 69.99,
        complete: 89.99,
        ultimate: 119.99,
      },
      productKey: true,
      available: true,
      stock: 200,
      tags: ["racing", "open-world", "driving"],
      brand: "Playground Games",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Best racing experience ever!",
          date: "2024-11-23T14:00:00Z",
          reviewerName: "Mark Davis",
          reviewerEmail: "mark.davis@example.com",
        },
      ],
      thumbnail: "/forza.jpg",
      images: ["/forza1.jpg", "/forza2.jpg", "/forza3.jpg"],
    },
    {
      name: "Ghostrunner",
      description:
        "A high-speed action game set in a cyberpunk world where players take on the role of a cybernetic ninja fighting through futuristic cityscapes.",
      category: "Action",
      price: 79.99,
      discount: true,
      discountPercent: 25,
      priceFrom: 50,
      star: 4,
      platforms: {
        playstation: true,
        xbox: false,
        nintendo: false,
        pc: true,
      },
      languages: ["English", "Spanish", "French", "German"],
      releaseDate: "2020-10-27",
      playableOn: ["PS5", "PS4", "PC"],
      editions: {
        deluxe: 89.99,
        complete: 109.99,
        ultimate: 129.99,
      },
      productKey: false,
      available: true,
      stock: 150,
      tags: ["cyberpunk", "action", "stealth"],
      brand: "One More Level",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Fast-paced action and a unique setting.",
          date: "2024-11-22T15:00:00Z",
          reviewerName: "Chris Mendez",
          reviewerEmail: "chris.mendez@example.com",
        },
      ],
      thumbnail: "/ghostRunner.png",
      images: ["/ghostRunner1.jpg", "/ghostRunner2.jpg", "/ghostRunner3.jpg"],
    },
  ];

  return (
    <div>
      <Container className="flex flex-col gap-y-6 md:gap-y-11 py-6 md:py-12">
        <div className="header font-openSans text-white flex items-center justify-between">
          <div className="name flex gap-x-2.5 items-center text-white">
            <h2 className=" sm:text-4xl text-nowrap">My cart</h2>
            <p className=" text-sm sm:text-2xl px-1 sm:px-2.5 rounded-full bg-gradient-to-tr from-Gr-start to-Gr-end">
              2
            </p>
          </div>
          <div className="line w-2/3 ">
            <img className="w-full" src={line} alt={line} />
          </div>
          <div className="btn">
            <Link to="/shop">
              <button className=" text-xs sm:text-2xl border py-1.5 px-3 md:py-3 md:px-5 rounded-xl hover:scale-110 duration-300 text-nowrap">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
        <div className="main flex flex-col xl:flex-row gap-x-3 gap-y-10 lg:gap-y-16 xl:gap-x-11  w-full ">
          <div className="xl:w-2/3 flex flex-col gap-y-10 lg:gap-y-16 ">
            <CartCard />
            <CartCard />
          </div>
          <div className="xl:w-1/3 flex flex-col gap-y-12 ">
            <div className="totalBill flex flex-col gap-y-9 bg-secondary-bg rounded-3xl py-7 px-8">
              <div className="price flex flex-col gap-y-7 text-white text-2xl">
                <div className="item flex justify-between items-center">
                  <p> 2 items</p>
                  <p>$99</p>
                </div>
                <div className="vat flex justify-between items-center">
                  <p>VAT</p>
                  <p>$2,82</p>
                </div>
                <div className="fees flex justify-between items-center">
                  <p> Fees</p>
                  <p>$0,82</p>
                </div>
              </div>
              <div className="line w-full h-0.5 bg-primary/50 "></div>
              <div className="couponReferral flex flex-col gap-y-5 text-white text-xl">
                <div className="coupon flex gap-x-3  ">
                  <div className="w-3/4  bg-primary-bg rounded-xl flex gap-x-1 items-center justify-center ">
                    <label
                      htmlFor="coupon"
                      className=" text-nowrap  text-[21px] py-4 pl-6 "
                    >
                      Coupon Code :
                    </label>
                    <input
                      name="coupon"
                      id="coupon"
                      type="text"
                      className="w-1/2 pr-6 py-4 bg-transparent outline-none "
                    />
                  </div>
                  <div className="w-1/4">
                    <button className=" text-xl border w-full py-4 rounded-xl hover:scale-110 duration-300">
                      Apply
                    </button>
                  </div>
                </div>
                <div className="referral flex gap-x-3  ">
                  <div className="w-3/4  bg-primary-bg rounded-xl flex gap-x-1 items-center justify-center ">
                    <label
                      htmlFor="referral"
                      className=" text-nowrap  text-[21px] py-4 pl-6 "
                    >
                      Referral Code :
                    </label>
                    <input
                      name="referral"
                      id="referral"
                      type="text"
                      className="w-1/2 pr-6 py-4 bg-transparent outline-none "
                    />
                  </div>
                  <div className="w-1/4">
                    <button className=" text-xl border w-full py-4 rounded-xl hover:scale-110 duration-300">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
              <div className="line w-full h-0.5 bg-primary/50 "></div>
              <div className="total flex flex-col gap-y-7">
                <div className="totalAmount text-[26px] text-white flex justify-between items-center">
                  <p>Total</p>
                  <p>$102,76</p>
                </div>
                <div className="checkout">
                  <CustomBtn
                    text="Proceed to Checkout"
                    className="w-full grid place-items-center text-center  md:text-xl hover:scale-105"
                    href="/checkout"
                  />
                </div>
                <div className="imgs flex flex-wrap justify-center gap-3 ">
                  <PaymentImgs className="lg:w-11 " />
                </div>
              </div>
            </div>
            <div className="trust bg-secondary-bg flex flex-col gap-y-9 p-8 rounded-3xl">
              <div className="top flex flex-col gap-y-3  items-center ">
                <div className="heading flex items-center gap-x-1">
                  <img src={star} alt={star} />
                  <p className="text-white text-4xl ">Trustpilot</p>
                </div>
                <div className="text text-primary text-xl ">
                  TrustScore 5.0 | 457 Reviews
                </div>
              </div>
              <div className="line w-full h-0.5 bg-primary/50 "></div>
              <div className="bottom flex flex-col gap-y-3 items-center">
                <div className="heading flex items-center gap-x-1">
                  <img src={save} alt={save} />
                  <p className="text-white text-3xl ">Safe & Secure</p>
                </div>
                <div className="text text-primary text-xl ">
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

export default Cart;
