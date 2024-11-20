import React from "react";
import Category from "../Category";
import Banner from "../Banner";
import Review from "../Review";
import ProductCard from "../layer/ProductCard";
import Container from "../layer/Container";
import WeeklyDeals from "../WeeklyDeals";

const Home = () => {
  return (
    <div>
      <Category />
      <Banner />
      <Review />
      <WeeklyDeals/>
    </div>
  );
};

export default Home;
