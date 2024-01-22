import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category, thunkAPI) => {
    try {
      let response;
      if (category) {
        console.log("@@#@ : " + category);
        var encodedCategory = encodeURIComponent(category);
        // response = await axios.get("http://fakestoreapi.com/products");
        response = await axios.get(
          "http://fakestoreapi.com/products/category/" + encodedCategory,
        );
      } else {
        response = await axios.get("http://fakestoreapi.com/products");
      }

      return response.data;
    } catch (erro) {
      return thunkAPI.rejectedWithValue("Error loading products");
    }
  },
);

const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  // reducer를 추가하면 프로미스의 진행 상태에 따라서 리듀서를 실행할 수 있습니다.
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;

// createAsyncThunk는 3가지의 상태값을 가지게 된다.
// 그래서 각각의 상황에 맞게 로직을 구성
// panding : 대기,  : 이행 , rejected: 거부
