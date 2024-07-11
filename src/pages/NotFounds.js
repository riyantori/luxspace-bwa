import React from "react";
import Header from "../parts/HomePages/Header";
import Aside from "../parts/HomePages/Aside";
import Footer from "../parts/HomePages/Footer";
import PageNotFound from "../parts/NotFounds/PageNotFound";

export default function NotFounds() {
  return (
    <>
      <Header theme="black" />
      <PageNotFound />
      <Aside />
      <Footer />
    </>
  );
}
