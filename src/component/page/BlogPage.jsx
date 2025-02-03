import React from "react";
import BlogNav from "../layer/BlogNav";
import BannerBlog from "../BannerBlog";
import { Outlet, useLocation } from "react-router-dom";

const BlogPage = () => {
  const location = useLocation();
  console.log("Current path:", location.pathname); // Debugging

  return (
    <div>
      <BlogNav />
      <BannerBlog />
      <Outlet  />
    </div>
  );
};

export default BlogPage;
