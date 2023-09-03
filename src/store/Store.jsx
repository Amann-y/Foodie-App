import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/Cartslice";
import categoryReducer from "./slices/Categoryslice";
import searchReducer from "./slices/Searchslice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer,
    search: searchReducer,
  },
});
