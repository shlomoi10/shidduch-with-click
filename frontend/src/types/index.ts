export interface User {
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
}

export interface Match extends User {
  compatibility?: number;
  lastActive?: string;
  distance?: number;
}

export interface AuthResponse {
  token: string;
  user: User;
}

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

export interface RegistrationFormData extends Omit<User, 'id'> {
  password: string;
  confirmPassword: string;
}

export interface SharedMatch {
  id: number;
  name: string;
  age: number;
  city: string;
  sector: string;
  education: string;
}
