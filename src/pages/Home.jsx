import React from "react";
import Navbar from "../components/Navbar";
import Categorymenu from "../components/Categorymenu";
import Fooditems from "../components/Fooditems";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <>
      <Navbar />
      <Categorymenu />
      <Fooditems />
      <Cart />
    </>
  );
};

export default Home;
