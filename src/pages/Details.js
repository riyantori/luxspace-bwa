import React from "react";
import Header from "../parts/HomePages/Header";
import Aside from "../parts/HomePages/Aside";
import Footer from "../parts/HomePages/Footer";
import BreadCrumb from "../components/BreadCrumb";
import ProductDetail from "../parts/Details/ProductDetail";
import Suggestion from "../parts/Details/Suggestion";

export default function Details(props) {
  return (
    <>
      <Header theme="black" />

      <BreadCrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/3561", name: "Office Room" },
          { url: "/categories/3561/products/2398", name: "Details" },
        ]}
      />
      <ProductDetail />
      <Suggestion />
      <Aside />
      <Footer />
    </>
  );
}
