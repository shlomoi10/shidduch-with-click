import { create } from 'zustand';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

interface User {
  id: string;
  name: string;
  email: string;
}

interface Match {
  id: string;
  name: string;
  compatibility: number;
}

interface AppState {
  user: User | null;
  matches: Match[];
  loading: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  setMatches: (matches: Match[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  matches: [],
  loading: false,
  error: null,
  setUser: (user) => set({ user }),
  setMatches: (matches) => set({ matches }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
