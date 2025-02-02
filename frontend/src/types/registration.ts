// מגדר המשתמש
export type Gender = 'זכר' | 'נקבה';

// זרמים דתיים
export type ReligiousStream = 'חרדי' | 'דתי לאומי' | 'חרדי לאומי' | 'חסידי' | 'ליטאי' | 'ספרדי' | 'תימני';

// מצב משפחתי
export type MaritalStatus = 'רווק' | 'רווקה';

// פרטים אישיים
export interface PersonalDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: Gender;
  dateOfBirth: string;
  maritalStatus: MaritalStatus;
  height: number;
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

// פרטי השכלה לבנים
export interface MaleEducation {
  elementarySchool: string;
  smallYeshiva: string;
  bigYeshiva: string;
  currentYeshiva: string;
  yearsInCurrentYeshiva: string;
}

// פרטי השכלה לבנות
export interface FemaleEducation {
  elementarySchool: string;
  highSchool: string;
  seminary: string;
  currentOccupation: string;
}

// פרטי השכלה
export type Education = MaleEducation | FemaleEducation;

// העדפות
export interface Preferences {
  ageRange: {
    min: number;
    max: number;
  };
  heightRange?: {
    min: number;
    max: number;
  };
  preferredAreas: string[];
  acceptedStreams: ReligiousStream[];
  futureStudyWork: string;
}

// פרופיל משתמש מלא
export interface UserProfile {
  email: string;
  personalDetails: PersonalDetails;
  education: Education | null;
  preferences: Preferences;
}

// התאמה
export interface Match {
  id: string;
  profile: UserProfile;
  matchPercentage: number;
  viewed: boolean;
  status: 'pending' | 'accepted' | 'rejected';
}
