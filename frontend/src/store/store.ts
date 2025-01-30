import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import matchesReducer from './matchesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    matches: matchesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
