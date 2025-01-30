import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Match {
  id: string;
  name: string;
  age: number;
  city: string;
  occupation: string;
  education: string;
  religiousLevel: string;
  interests: string[];
  gender: 'male' | 'female';
}

interface MatchesState {
  matches: Match[];
  loading: boolean;
  error: string | null;
}

const initialState: MatchesState = {
  matches: [],
  loading: false,
  error: null
};

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    setMatches: (state, action: PayloadAction<Match[]>) => {
      state.matches = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const { setMatches, setLoading, setError } = matchesSlice.actions;
export default matchesSlice.reducer;
