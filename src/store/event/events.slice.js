import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async (thunkAPI)=>{
    try {
      const response = await axios.get(
        '/api/event'
      )
      return response.data
    }catch (e){
      return thunkAPI.rejectedWithValue("Error Loading Event");
    }
  }
)


const initialState={
  events : [],
  isLoading : false,
  error : ""
}

export const eventsSlice = createSlice({
  name :"events",
  initialState,
  reducers : {},

  extraReducers:(builder)=>{
    builder
      .addCase(fetchEvents.pending, (state)=>{
        state.isLoading =true
      })
      .addCase(fetchEvents.fulfilled, (state,action)=>{
        state.isLoading =false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected,(state,action)=>{
        state.isLoading =false;
        state.events = action.payload;
      })
  }

})

export default eventsSlice.reducer;
