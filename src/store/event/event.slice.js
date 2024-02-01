import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvent = createAsyncThunk(
  "event/fetchEvent",
  async (no,thunkAPI)=>{
    try {
      const response = await axios.get(
        `/api/event/${no}`
      )
      return response.data
    }catch (e){
      return thunkAPI.rejectedWithValue("Error Loading Event");
    }
  }
)


const initialState={
  event : [],
  isLoading : false,
  error : ""
}

export const eventSlice = createSlice({
  name :"event",
  initialState,
  reducers : {},

  extraReducers:(builder)=>{
    builder
      .addCase(fetchEvent.pending, (state)=>{
        state.isLoading =true
      })
      .addCase(fetchEvent.fulfilled, (state,action)=>{
        state.isLoading =false;
        state.event = action.payload;
      })
      .addCase(fetchEvent.rejected,(state,action)=>{
        state.isLoading =false;
        state.event = action.payload;
      })
  }

})

export default eventSlice.reducer;
