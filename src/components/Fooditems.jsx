import React, { useEffect, useState } from "react";
import Data from "../data/Fooddata";
import Foodcard from "./Foodcard";
import toast, { Toaster } from "react-hot-toast";
import { setCategory } from "../store/slices/Categoryslice";
import { useSelector } from "react-redux";

const Fooditems = () => {
  const [loading, setLoading] = useState(true);
  const [fooddata, setFoodData] = useState("");

  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const notify = (name) => toast.success(`${name} has been added`);

  useEffect(() => {
    setFoodData(Data);
    setLoading(false);
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="px-2 my-5 mx-auto md:mt-10 flex flex-wrap items-center justify-center sm:justify-between  gap-4">
        {loading ? (
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl text-orange-700">
            Loading...
          </h1>
        ) : (
          fooddata
            .filter((ele) => {
              if (category == "All") {
                return ele.name.toLowerCase().includes(search.toLowerCase());
              } else {
                return (
                  category == ele.category &&
                  ele.name.toLowerCase().includes(search.toLowerCase())
                );
              }
            })
            .map((ele, ind) => {
              return <Foodcard ele={ele} key={ind} notify={notify} />;
            })
        )}
      </div>
    </>
  );
};

export default Fooditems;
