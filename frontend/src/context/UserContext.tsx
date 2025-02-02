import { createContext, useContext, useState, ReactNode } from 'react';
import { UserProfile } from '../types/user';

interface UserContextType {
  userProfile: UserProfile | null;
  setUserProfile: (profile: UserProfile | null) => void;
  updateUserProfile: (updates: Partial<UserProfile>) => void;
}

const defaultUserProfile: UserProfile = {
  personalDetails: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: 'זכר',
    dateOfBirth: '',
    height: 0,
    maritalStatus: 'רווק',
    religiousStream: 'דתי לאומי',
    origin: '',
    parentsCity: '',
    fatherOrigin: '',
    motherOrigin: '',
    occupation: '',
    numberOfSiblings: 0,
    numberOfMarriedSiblings: 0,
    hobbies: [],
    specialTalents: [],
  },
  education: {
    type: 'male',
    yeshivaKtana: '',
    yeshivaGdola: '',
    currentYeshiva: '',
  },
  email: '',
  preferences: {
    minAge: 18,
    maxAge: 30,
    minHeight: 150,
    maxHeight: 190,
    religiousStreams: ['דתי לאומי'],
    origins: [],
    location: '',
    maritalStatus: ['רווק', 'רווקה'],
  },
};

const UserContext = createContext<UserContextType>({
  userProfile: null,
  setUserProfile: () => {},
  updateUserProfile: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const updateUserProfile = (updates: Partial<UserProfile>) => {
    setUserProfile((prev) => {
      if (!prev) return null;
      return { ...prev, ...updates };
    });
  };

  return (
    <UserContext.Provider
      value={{
        userProfile,
        setUserProfile,
        updateUserProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export default UserContext;
