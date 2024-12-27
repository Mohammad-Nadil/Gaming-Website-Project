import React from "react";
import Container from "../layer/Container";
import star from "../../assets/star.svg";
import save from "../../assets/saveIcon.png";
import CustomBtn from "../layer/CustomBtn";
import PaymentImgs from "../layer/PaymentImgs";
import line from "../../assets/lineHorizontal.png";

const Cart = () => {
  return (
    <div>
      <Container className="flex flex-col gap-y-11 py-12">
        <div className="header font-openSans text-white flex items-center justify-between">
          <div className="name flex gap-x-2.5 items-center text-white">
            <h2 className=" text-4xl">My cart</h2>
            <p className=" text-2xl px-2.5 rounded-full bg-gradient-to-tr from-Gr-start to-Gr-end">
              2
            </p>
          </div>
          <div className="line w-2/3 o">
            <img className="w-full" src={line} alt={line} />
          </div>
          <div className="btn">
            <button className=" text-2xl border  py-3 px-5 rounded-xl hover:scale-110 duration-300">
              Continue Shopping
            </button>
          </div>
        </div>
        <div className="main flex gap-x-11 w-full ">
          <div className="w-2/3  "></div>
          <div className="w-1/3 flex flex-col gap-y-12 ">
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
