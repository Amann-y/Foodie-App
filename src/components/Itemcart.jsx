import React from "react";
import { AiFillDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  minusFromCart,
} from "../store/slices/Cartslice";

const Itemcart = () => {
  const data = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return data.length != 0 ? (
    data?.map((ele) => {
      return (
        <div
          className="my-1 bg-gray-200 flex items-center justify-between shadow-md rounded-sm"
          key={ele.id}
        >
          <div>
            <img
              src={ele.img}
              alt="Pic"
              className="w-[60px] h-[60px] rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl">{ele.name}</h1>
            <h1>₹{ele.price}</h1>
          </div>
          <div className="flex flex-col items-center">
            <AiFillDelete
              className="cursor-pointer"
              title="Delete"
              onClick={() => dispatch(removeFromCart(ele.id))}
            />
            <div className="flex items-center gap-1 text-xl">
              <span className="bg-transparent  px-1 hover:text-red-500 cursor-pointer ">
                <AiOutlinePlus
                  title="Add"
                  onClick={() => dispatch(addToCart(ele))}
                />
              </span>
              <span className="bg-transparent px-1  hover:text-red-500 ">
                {ele.qty}
              </span>
              <span className="bg-transparent  px-1  hover:text-red-500 cursor-pointer ">
                <AiOutlineMinus
                  title="Minus"
                  onClick={() => dispatch(minusFromCart(ele))}
                />
              </span>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <h1 className="text-center mt-2 text-xl">Cart Is Empty</h1>
  );
};

export default Itemcart;
