import React from "react";
import Header from "../parts/HomePages/Header";
import Aside from "../parts/HomePages/Aside";
import Footer from "../parts/HomePages/Footer";
import BreadCrumb from "../components/BreadCrumb";
import ShoppingCart from "../parts/Carts/ShoppingCart";
import ShippingDetails from "../parts/Carts/ShippingDetails";

export default function Carts(props) {
  return (
    <>
      <Header theme="black" />

      <BreadCrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Aside />
      <Footer />
    </>
  );
}
