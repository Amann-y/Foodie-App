import React, { useEffect, useState } from "react";
import foodData from "../data/Fooddata";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../store/slices/Categoryslice";

const Categorymenu = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.category);

  const uniqueCategory = () => {
    let uniCate = [...new Set(foodData.map((ele) => ele.category))];
    setCategories(uniCate);
  };

  useEffect(() => {
    uniqueCategory();
  }, []);

  return (
    <>
      <div className="px-2 flex flex-col mt-8 gap-2">
        <div>
          <h1 className="font-semibold">Find The Best Food</h1>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          <button
            onClick={() => dispatch(setCategory("All"))}
            className="px-2 py-1 bg-slate-500 rounded-md hover:bg-slate-700 hover:text-yellow-50 transition ease-out duration-500 hover:ease-in drop-shadow-[0_35px_35px_rgba(204, 19, 19, 0.25)]"
          >
            All
          </button>

          {categories?.map((ele, ind) => {
            return (
              <button
                className={`px-2 py-1  rounded-md
               hover:bg-orange-700 hover:text-yellow-50 transition ease-out duration-500 hover:ease-in shadow-md ${
                 category == ele && "bg-green-500 text-white"
               }`}
                key={ind}
                onClick={() => dispatch(setCategory(ele))}
              >
                {ele}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categorymenu;
