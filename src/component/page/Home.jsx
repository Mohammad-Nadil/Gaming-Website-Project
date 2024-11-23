import React from "react";
import Category from "../Category";
import Banner from "../Banner";
import Review from "../Review";
import WeeklyDeals from "../WeeklyDeals";
import OfferBadge from "../OfferBadge";
import forza from "../../assets/forza.jpg";
import farcry from "../../assets/farCry.jpg";
import NewArrivals from "../NewArrivals";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Category />
      <Banner />
      <Review />
      <WeeklyDeals />
      <OfferBadge
        name="Forza Horizon 6"
        image={forza}
        discount={true}
        discountPercent="25"
        price="55.99"
        priceFrom="40"
        star={5}
        playstation={true}
        xbox={true}
        nintendo={true}
        user={true}
        productKey={true}
      />
      <NewArrivals />
      <OfferBadge
        name="FARCRY 6"
        image={farcry}
        discount={true}
        discountPercent="15"
        price="59.99"
        priceFrom="50"
        star={5}
        playstation={true}
        xbox={true}
        nintendo={false}
        user={true}
        productKey={true}
        className=" md:flex-row-reverse"
      />
    </div>
  );
};

export default Home;
