import React from "react";
import Header from "../parts/HomePages/Header";
import Hero from "../parts/HomePages/Hero";
import JustArrived from "../parts/HomePages/JustArrived";
import BrowseRoom from "../parts/HomePages/BrowseRoom";
import Clients from "../parts/HomePages/Clients";
import Aside from "../parts/HomePages/Aside";
import Footer from "../parts/HomePages/Footer";
import useScroollAnchor from "../helpers/hooks/useScroollAnchor";
import useModalDOM from "../helpers/hooks/useModalDOM";

export default function HomePages() {
  useScroollAnchor();
  useModalDOM();

  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Aside />
      <Footer />
    </>
  );
}
