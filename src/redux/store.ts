import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Authenticator/authenticatorSlice";
import gamesReducer from "../features/Games/gamesSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    games: gamesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
