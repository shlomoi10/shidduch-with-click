import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface RegisterData {
  account: {
    email: string;
    password: string;
  };
  personal: {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    city: string;
    occupation: string;
    education: string;
  };
  preferences: {
    ageRange: string;
    religiousLevel: string;
    maritalStatus: string;
  };
  interests: {
    hobbies: string;
    languages: string;
    specialSkills: string;
  };
}

export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  register: async (data: RegisterData) => {
    const response = await api.post('/auth/register', data);
    return response.data;
  },

  logout: async () => {
    localStorage.removeItem('token');
  }
};

export const userAPI = {
  getProfile: async () => {
    const response = await api.get('/user/profile');
    return response.data;
  },

  updateProfile: async (data: Partial<RegisterData>) => {
    const response = await api.put('/user/profile', data);
    return response.data;
  },

  getMatches: async () => {
    const response = await api.get('/user/matches');
    return response.data;
  },

  sendInterest: async (matchId: string) => {
    const response = await api.post(`/user/matches/${matchId}/interest`);
    return response.data;
  }
};
