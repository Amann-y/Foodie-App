import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../store/slices/Searchslice";

const Navbar = () => {
  const data = useSelector((state) => state.search.search);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex  items-center sm:flex-row flex-col gap-2 sm:gap-0 justify-between px-2">
        <div>
          <h1 className="sm:text-xl md:text-2xl lg:text-3xl sm:font-semibold md:font-bold uppercase font-bold tracking-wider">
            Foodie <span className="text-orange-500">Point</span>
          </h1>
          <h1>{new Date().toUTCString().slice(0, 16)}</h1>
        </div>
        <div className="w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-gray-100 shadow-md rounded-md px-1 md:w-[22vw] py-1 text-orange-400 font-semibold w-full sm:w-auto"
            autoComplete="off"
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
