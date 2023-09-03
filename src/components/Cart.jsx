import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Itemcart from "./Itemcart";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const allData = useSelector((state) => state.cart.cart);
  const totalQty = allData.reduce((acc, ele) => acc + ele.qty, 0);
  const totalPrice = allData.reduce((acc, ele) => acc + ele.price * ele.qty, 0);

  return show ? (
    <div className=" w-full lg:w-[20vw] h-screen flex flex-col justify-between bg-white fixed top-0 right-0 px-2 py-2 overflow-x-auto ">
      <div className="flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-green-400">My Order</h1>
          <AiOutlineClose
            className="text-xl cursor-pointer hover:bg-red-800 hover:text-white"
            onClick={() => setShow((prev) => !prev)}
          />
        </div>
        <Itemcart />
      </div>

      <div className="flex flex-col gap-2 ">
        <h3 className="md:text-xl font-semibold">Items : {totalQty}</h3>
        <h3 className="md:text-xl font-semibold">
          Total Amount : {totalPrice}{" "}
        </h3>
        <button
          onClick={() => navigate("/success")}
          className="bg-orange-500 px-3 py-1 rounded-lg hover:bg-orange-700 hover:text-white"
        >
          Check-Out
        </button>
      </div>
    </div>
  ) : (
    <BsCart2
      className={`fixed bottom-[132px] right-2 text-5xl sm:text-5xl md:text-5xl lg:text-6xl p-1 sm:p-2 md:p-3 lg:p-4 bg-gray-100 text-orange-500 shadow-md rounded-full flex justify-center items-center ${
        totalQty > 0 && "animate-bounce delay-500 transition-all"
      }`}
      title="Cart"
      onClick={() => setShow((prev) => !prev)}
    />
  );
};

export default Cart;
