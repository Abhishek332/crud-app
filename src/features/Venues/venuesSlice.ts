import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api";

interface CountryObj {
    state: string;
    suburb: string;
}

export const getVenues = createAsyncThunk(
    "venues/getVenues",
    async ({ state, suburb }: CountryObj) => {
        try {
            const { data } = await API.get(`view_venues?country_code=in&country=India&state=${state}&suburb=${suburb}`);
            return data;
        } catch (error: any) {
            console.log(error);
        }
    }
);

interface Country_State {
    data: any;
    status: "idle" | "pending" | "succeeded";
}

const initialState = {
    data: null,
    status: 'idle'
} as Country_State;

const venuesSlice = createSlice({
    name: "venues",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getVenues.pending, (state) => {
            state.status = "pending";
        });
        builder.addCase(getVenues.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data = action.payload;
        });
    }
});

const venuesReducer = venuesSlice.reducer;
export default venuesReducer;
