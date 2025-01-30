import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string | null;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  gender: 'male' | 'female';
  city: string;
  occupation: string;
  education: string;
  religiousLevel: string;
  interests: string[];
  preferences: {
    ageRange: string;
    religiousLevel: string;
    maritalStatus: string;
  };
  isAuthenticated: boolean;
}

const initialState: UserState = {
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  age: 0,
  gender: 'male',
  city: '',
  occupation: '',
  education: '',
  religiousLevel: '',
  interests: [],
  preferences: {
    ageRange: '',
    religiousLevel: '',
    maritalStatus: ''
  },
  isAuthenticated: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload };
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    logout: (state) => {
      return initialState;
    },
    updatePreferences: (state, action: PayloadAction<UserState['preferences']>) => {
      state.preferences = action.payload;
    },
    updateInterests: (state, action: PayloadAction<string[]>) => {
      state.interests = action.payload;
    }
  }
});

export const { setUser, setAuthenticated, logout, updatePreferences, updateInterests } = userSlice.actions;
export default userSlice.reducer;
