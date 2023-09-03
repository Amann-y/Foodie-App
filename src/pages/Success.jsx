import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-400">
      {loading ? (
        <PropagateLoader />
      ) : (
        <>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold md:font-bold ">
            Order Successful
          </h2>
          <p className="text-xl">Your order has been successfully placed</p>
          <button
            onClick={() => navigate("/")}
            className="px-2 py-1 bg-fuchsia-700 text-white rounded-lg mt-3"
          >
            Back To Home
          </button>
        </>
      )}
    </div>
  );
};

export default Success;
