import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api";

export const getGames = createAsyncThunk(
    "games/getGames",
    async (__, { fulfillWithValue, rejectWithValue }
    ) => {
        try {
            const { data } = await API.get('/view_games');
            return fulfillWithValue(data);
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

interface GamesState {
    data: any;
    status: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
    data: null,
    status: "idle",
} as GamesState;

const gamesSlice = createSlice({
    name: "games",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getGames.pending, (state) => {
            state.status = "pending";
        });
        builder.addCase(getGames.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data = action.payload;
        });
        builder.addCase(getGames.rejected, (state) => {
            state.status = "failed";
        });
    },
});

const gamesReducer = gamesSlice.reducer;
export default gamesReducer;
