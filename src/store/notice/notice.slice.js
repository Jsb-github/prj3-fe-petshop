import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNotice = createAsyncThunk(
  "notice/fetchProduct",
  async (no, thunkAPI) => {
    try {
      const response = await axios.get(
        `/api/notice/${no}`,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Error Loading notice");
    }
  },
);

const initialState = {
  notice: {},
  isLoading: false,
  error: "",
};

export const noticeSlice = createSlice({
  name: "notice",
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNotice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notice = action.payload;
      })
      .addCase(fetchNotice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default noticeSlice.reducer;
