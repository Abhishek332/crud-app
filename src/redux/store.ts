import { configureStore } from "@reduxjs/toolkit";
import { userReducer, gamesReducer, countryReducer, venuesReducer } from "../features";


const store = configureStore({
  reducer: {
    user: userReducer,
    games: gamesReducer,
    country: countryReducer,
    venues: venuesReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
