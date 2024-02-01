import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (thunkAPI)=>{
    try {
      const response = await axios.get(
        '/api/review'
      )
      return response.data
    }catch (e){
      return thunkAPI.rejectedWithValue("Error Loading Event");
    }
  }
)


const initialState={
  reviews : [],
  isLoading : false,
  error : ""
}

export const reviewsSlice = createSlice({
  name :"reviews",
  initialState,
  reducers : {},

  extraReducers:(builder)=>{
    builder
      .addCase(fetchReviews.pending, (state)=>{
        state.isLoading =true
      })
      .addCase(fetchReviews.fulfilled, (state,action)=>{
        state.isLoading =false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected,(state,action)=>{
        state.isLoading =false;
        state.reviews = action.payload;
      })
  }

})

export default reviewsSlice.reducer;
