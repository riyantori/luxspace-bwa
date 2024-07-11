import React from "react";
import Header from "../parts/HomePages/Header";
import Aside from "../parts/HomePages/Aside";
import Footer from "../parts/HomePages/Footer";
import BreadCrumb from "../components/BreadCrumb";
import Congratulation from "../parts/Success/Congratulation";

export default function Success(props) {
  return (
    <>
      <Header theme="black" />

      <BreadCrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/success", name: "Success Checkout" },
        ]}
      />
      <Congratulation />
      <Aside />
      <Footer />
    </>
  );
}
