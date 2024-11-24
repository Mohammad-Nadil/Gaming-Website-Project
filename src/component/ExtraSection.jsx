import React from "react";
import Container from "./layer/Container";
import SpecialOffers from "./SpecialOffers";
import GiftCards from "./GiftCards";
import SoftwareDeals from "./SoftwareDeals";

const ExtraSection = () => {
  return (
    <div>
      <Container className="pt-10 md:pt-20 xl:pt-40 flex flex-col lg:flex-row gap-x-3  2xl:gap-x-11 mx-2.5">
        <div className=" w-full lg:max-w-[33%] ">
          <SpecialOffers />
        </div>
        <div className=" w-full lg:max-w-[33%] ">
          <GiftCards />
        </div>
        <div className=" w-full lg:max-w-[33%] =">
          <SoftwareDeals />
        </div>
      </Container>
    </div>
  );
};

export default ExtraSection;
