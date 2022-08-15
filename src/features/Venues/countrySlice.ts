import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api";

export const getStates = createAsyncThunk(
  "country/getStates",
  async () => {
    try {
      const {
        data: { states },
      } = await API.get("/view_states?country_code=in");
      return states;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const getSuburb = createAsyncThunk(
  "country/getSuburb",
  async (state: string) => {
    try {
      const {
        data: { suburb },
      } = await API.get(`/view_suburbs?state=${state}`);
      return suburb;
    } catch (error: any) {
      console.log(error);
    }
  }
);

interface Country_State {
  states: string[] | null;
  suburb: string[] | null;
  status: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  states: null,
  status: "idle",
  suburb: null
} as Country_State;

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStates.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getStates.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.states = action.payload;
    });
    builder.addCase(getSuburb.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getSuburb.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.suburb = action.payload;
    });
  },
});

const countryReducer = countrySlice.reducer;
export default countryReducer;
