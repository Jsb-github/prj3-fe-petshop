import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts") || "")
    : [],
  totalPrice: 0, // 총금액
  userId: localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId") || "")
    : "", //누구의 카트 유저인지
};

export const postOrder = createAsyncThunk(
  "cart/postOrder",
  async (order, thunkApi) => {
    try {
      await axios.post(
        "https://65acea26adbd5aa31bdfbf33.mockapi.io/orders",
        order,
      );
      thunkApi.dispatch(sendOrder());
    } catch (e) {
      return thunkApi.rejectWithValue("error sending order");
    }
  },
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;

      localStorage.setItem("userId", JSON.stringify(state.userId));
    },

    removeUserId: (state) => {
      state.userId = "";
      localStorage.setItem("userId", JSON.stringify(state.userId));
    },

    addToCart: (state, action) => {
      state.products.push({
        ...action.payload,
        quantity: 1,
        total: action.payload.price,
      });
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },

    deleteFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload,
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },

    incrementProduct: (state, action) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: item.price * (item.quantity + 1),
            }
          : item,
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },

    decrementProduct: (state, action) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity - 1,
              total: item.price * (item.quantity - 1),
            }
          : item,
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },

    getTotalPrice: (state) => {
      state.totalPrice = state.products.reduce(
        (acc, item) => (acc += item.total),
        0,
      );
      return state;
    },

    sendOrder: (state) => {
      state.products = [];
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
  },
});

export const {
  addToCart,
  sendOrder,
  deleteFromCart,
  incrementProduct,
  decrementProduct,
  getTotalPrice,
  setUserId,
  removeUserId,
} = cartSlice.actions;

export default cartSlice.reducer;
