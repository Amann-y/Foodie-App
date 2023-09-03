import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/Cartslice";

const Foodcard = ({ ele, notify }) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold bg-[#967878] w-[300px] p-5 flex flex-col gap-2 rounded-lg overflow-hidden shadow-md ">
      <img
        src={ele.img}
        alt="Pic"
        className="w-auto  h-[200px] hover:scale-105 transition-all duration-500 ease-out cursor-grab"
      />
      <div className="flex items-center justify-between">
        <h2 className="text-white">{ele.name}</h2>
        <span>₹ {ele.price}</span>
      </div>
      <p className="text-justify">{ele.desc}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between">
          <AiFillStar className="text-red-800" /> <span>{ele.rating}</span>
        </div>
        <button
          className="bg-green-400 px-1.5 py-1 rounded-md hover:bg-green-700 hover:text-white hover:transition duration-400"
          onClick={() => {
            dispatch(addToCart({ ...ele, qty: 1 }));
            notify(ele.name);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Foodcard;
