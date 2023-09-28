import React from "react";
import About from "./Price";
import Hero from "./Hero";
import Inter from "../Pages/Inter"
import Templates from "../Router/Templates"
import Price from "../Pages/Price"
import Features from "./Features";
import Feat from "./Feature";
const HomeScreen = () => {
  return (
    <div>
      <Hero/>
      <Price/>
  <Feat/>
  <Inter/>
  <Templates/>
        </div>
  ); 
};

export default HomeScreen;
