import { configureStore } from "@reduxjs/toolkit";
import { userReducer, gamesReducer, countryReducer } from "../features";


const store = configureStore({
  reducer: {
    user: userReducer,
    games: gamesReducer,
    country: countryReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
