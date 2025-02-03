import React from "react";
import "./App.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./component/Rootlayout";
import Home from "./component/page/Home";
import Shop from "./component/page/Shop";
import Cart from "./component/page/Cart";
import ProductDetails from "./component/page/ProductDetails";
import Checkout from "./component/page/Checkout";
import BlogPage from "./component/page/BlogPage";
import BlogPaginate from "./component/BlogPaginate";
import BlogDetail from "./component/page/BlogDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
    <Route index element={<Home />} />
    <Route path="shop" element={<Shop />} />
    <Route path="cart" element={<Cart />} />
    <Route path="checkout" element={<Checkout />} />
    <Route path="product-details" element={<ProductDetails />} /> {/* Fixed path */}
    <Route path="blog" element={<BlogPage />}>
      <Route index element={<BlogPaginate />} />
      <Route path="article" element={<BlogDetail />} /> {/* Fixed child route */}
    </Route>
  </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
