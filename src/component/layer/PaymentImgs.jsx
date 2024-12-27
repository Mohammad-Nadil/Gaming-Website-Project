import React from "react";
import viva from "../../assets/viva.png";
import stripe from "../../assets/stripe.png";
import iPay from "../../assets/iPay.png";
import amex from "../../assets/amex.png";
import mastercard from "../../assets/mastercard.png";
import paypal from "../../assets/paypal.png";
import oPay from "../../assets/opay.png";
import visa from "../../assets/visa.png";
import gPay from "../../assets/gpay.png";
import skrill from "../../assets/skrill.png";
import amazonPay from "../../assets/amazonPay.png";

const PaymentImgs = ({ className }) => {
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
    <>
      {payOptions.map((item, index) => (
        <div className={` ${className}`}>
          <img
            className={`aspect-[63/43] w-10 lg:w-[63px]`}
            src={item}
            alt={item}
          />
        </div>
      ))}
    </>
  );
};

export default PaymentImgs;
