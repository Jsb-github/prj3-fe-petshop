import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchNotices = createAsyncThunk(
  "notices/fetchNotices",
  async (thunkAPI) =>{
    try {
      const response = await axios.get(
        "/api/notice"
      )
      return response.data
    }catch (e){
      return thunkAPI.rejectedWithValue("Error Loading Notice")
    }
  }
)

const initialState={
  notices : [],
  isLoading : false,
  error : ""
}

export const noticesSlice=createSlice({
  name : "notices",
  initialState,
  reducers : {},

  extraReducers : (builder)=>{
    builder
      .addCase(fetchNotices.pending,(state)=>{
        state.isLoading =true
      })
      .addCase(fetchNotices.fulfilled, (state,action)=>{
        state.isLoading =false;
        state.notices = action.payload;
      })
      .addCase(fetchNotices.rejected, (state,action)=>{
        state.isLoading=false;
        state.notices = action.payload
      })
  }

})

export default noticesSlice.reducer;