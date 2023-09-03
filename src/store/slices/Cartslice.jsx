import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exisitngItem = state.cart.find(
        (ele) => ele.id == action.payload.id
      );

      if (exisitngItem) {
        state.cart = state.cart.map((ele) =>
          ele.id == action.payload.id ? { ...ele, qty: ele.qty + 1 } : ele
        );
      } else {
        state.cart.push(action.payload);
      }
    },

    minusFromCart: (state, action) => {
      state.cart = state.cart.map((ele) =>
        ele.id == action.payload.id && ele.qty > 1
          ? { ...ele, qty: ele.qty - 1 }
          : ele
      );
    },

    removeFromCart: (state, action) => {
      const filterData = state.cart.filter((ele) => ele.id != action.payload);
      state.cart = filterData;
    },
  },
});

export const { addToCart, removeFromCart, minusFromCart } = cartSlice.actions;

export default cartSlice.reducer;
