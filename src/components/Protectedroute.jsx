import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protectedroute = ({ element }) => {
  const data = useSelector((state) => state.cart.cart);

  return <>{data.length > 0 ? element : <Navigate to="/" />}</>;
};

export default Protectedroute;
