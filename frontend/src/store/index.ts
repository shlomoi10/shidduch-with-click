import { create } from 'zustand';
import { User, Match } from '../types';

interface AppState {
    user: User | null;
    matches: Match[];
    loading: boolean;
    error: string | null;
    setUser: (user: User | null) => void;
    setMatches: (matches: Match[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    clearState: () => void;
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
    clearState: () => set({ user: null, matches: [], error: null }),
}));
