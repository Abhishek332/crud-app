import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api";

export const getStates = createAsyncThunk(
  "country/getStates",
  async (__, { fulfillWithValue }) => {
    try {
      const {
        data: { states },
      } = await API.get("/view_states?country_code=in");
      return fulfillWithValue(states);
    } catch (error: any) {
      console.log(error);
    }
  }
);

interface Country_State {
  states: string[] | null;
  status: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  states: null,
  status: "idle",
} as Country_State;

const userSlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStates.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getStates.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(getStates.rejected, (state, action) => {
      state.status = "failed";
      state.data = { message: action.payload };
    });
  },
});

const userReducer = userSlice.reducer;
export default userReducer;
