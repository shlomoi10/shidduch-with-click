export type Gender = 'זכר' | 'נקבה';

export type MaritalStatus = 'רווק' | 'רווקה' | 'גרוש' | 'גרושה' | 'אלמן' | 'אלמנה';

export type ReligiousStream =
  | 'חרדי'
  | 'דתי לאומי'
  | 'חרדי לאומי'
  | 'חסידי'
  | 'ליטאי'
  | 'ספרדי'
  | 'תימני';

export interface PersonalDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: Gender;
  dateOfBirth: string | Date;
  height: number;
  maritalStatus: MaritalStatus;
  religiousStream: ReligiousStream;
  origin: string;
  parentsCity: string;
  fatherOrigin: string;
  motherOrigin: string;
  occupation: string;
  numberOfSiblings: number;
  numberOfMarriedSiblings: number;
  hobbies: string[];
  specialTalents: string[];
}

export interface MaleEducation {
  type: 'male';
  yeshiva: string;
  kollel?: string;
  degree?: string;
  currentStudy?: string;
}

export interface FemaleEducation {
  type: 'female';
  seminary: string;
  degree?: string;
  currentStudy?: string;
}

export type Education = MaleEducation | FemaleEducation;

export interface Preferences {
  minAge: number;
  maxAge: number;
  minHeight: number;
  maxHeight: number;
  maritalStatus: MaritalStatus[];
  religiousStreams: ReligiousStream[];
  origins: string[];
  location: string;
}

export interface UserSettings {
  notifications: boolean;
  privacy: boolean;
  updates: boolean;
}

export interface UserProfile {
  email: string;
  personalDetails: PersonalDetails;
  education?: Education;
  preferences: Preferences;
  settings: UserSettings;
}
