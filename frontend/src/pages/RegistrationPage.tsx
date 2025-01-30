import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser, setAuthenticated } from '../store/userSlice';
import axios from 'axios';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Stepper,
  Step,
  StepLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';
import { styled } from '@mui/material/styles';

// רשימות הערכים לשדות בחירה
const cities = [
  'ירושלים',
  'בני ברק',
  'מודיעין עילית',
  'ביתר עילית',
  'אלעד',
  'בית שמש',
  'צפת',
  'אשדוד',
  'פתח תקווה',
  'רכסים',
  'חיפה',
  'טבריה',
  'נתניה',
  'אופקים',
  'תל אביב'
];

const genders = [
  { value: 'male', label: 'זכר' },
  { value: 'female', label: 'נקבה' }
];

const educationLevels = [
  'ישיבה קטנה',
  'ישיבה גדולה',
  'כולל',
  'סמינר',
  'תואר ראשון',
  'תואר שני',
  'תואר שלישי',
  'הנדסאי/ת',
  'תעודה מקצועית'
];

const occupations = [
  'אברך',
  'מלמד',
  'מורה',
  'גננת',
  'מזכיר/ה',
  'מנהל/ת חשבונות',
  'מתכנת/ת',
  'יועץ/ת',
  'עובד/ת סוציאלי/ת',
  'מטפל/ת',
  'אחר'
];

const religiousLevels = [
  'חרדי/ת - ליטאי/ת',
  'חרדי/ת - חסידי/ת',
  'חרדי/ת - ספרדי/ת',
  'דתי/ת לאומי/ת',
  'חרדי/ת מודרני/ת'
];

const maritalStatuses = [
  'רווק/ה',
  'גרוש/ה',
  'אלמן/ה'
];

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    '& fieldset': {
      borderColor: theme.palette.divider,
      top: 0,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
    padding: '0 8px',
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
    '&.MuiFormLabel-filled': {
      backgroundColor: theme.palette.background.paper,
    },
  },
  marginBottom: theme.spacing(2),
}));

const MatchCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  cursor: 'pointer',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

const steps = ['פתיחת חשבון', 'פרטים אישיים', 'העדפות', 'תחומי עניין'];

const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [accountData, setAccountData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [personalData, setPersonalData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    age: '',
    gender: '',
    city: '',
    occupation: '',
    education: '',
  });
  const [preferencesData, setPreferencesData] = useState({
    ageRange: '',
    location: '',
    religiousLevel: '',
    maritalStatus: '',
  });
  const [interestsData, setInterestsData] = useState({
    hobbies: '',
    languages: '',
    specialSkills: '',
  });
  const [showMatches, setShowMatches] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [matches] = useState([
    {
      id: 1,
      name: 'שרה כהן',
      age: 25,
      city: 'ירושלים',
      occupation: 'מורה',
      description: 'אוהבת ללמוד, לטייל ולעזור לאחרים',
    },
    {
      id: 2,
      name: 'רחל לוי',
      age: 23,
      city: 'בני ברק',
      occupation: 'גננת',
      description: 'יצירתית, בעלת חוש הומור ואוהבת לבשל',
    },
    {
      id: 3,
      name: 'לאה פרידמן',
      age: 24,
      city: 'פתח תקווה',
      occupation: 'מזכירה',
      description: 'רצינית, אחראית ובעלת מידות טובות',
    },
  ]);

  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accountData.password !== accountData.confirmPassword) {
      alert('הסיסמאות אינן תואמות');
      return;
    }
    setActiveStep(1);
  };

  const handlePersonalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveStep(2);
  };

  const handlePreferencesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveStep(3);
  };

  const handleInterestsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const registrationData = {
        account: accountData,
        personal: personalData,
        preferences: preferencesData,
        interests: interestsData
      };
      
      const response = await axios.post('/api/auth/register', registrationData);
      
      dispatch(setUser({
        ...response.data.user,
        isAuthenticated: true
      }));
      dispatch(setAuthenticated(true));
      
      // Save token
      localStorage.setItem('token', response.data.token);
      
      // Navigate to dashboard
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Registration failed:', error);
      
      // בדיקה אם השגיאה היא בגלל שהשרת לא זמין
      if (error.code === 'ERR_NETWORK') {
        // במצב פיתוח - נעבור לדשבורד עם נתונים לדוגמה
        if (process.env.NODE_ENV === 'development') {
          console.log('Development mode - proceeding with mock data');
          localStorage.setItem('token', 'mock-token');
          navigate('/dashboard');
          return;
        }
      }

      // הצגת הודעת שגיאה מתאימה למשתמש
      let errorMessage = 'אירעה שגיאה בתהליך ההרשמה.';
      if (error.code === 'ERR_NETWORK') {
        errorMessage = 'לא ניתן להתחבר לשרת. אנא נסה שוב מאוחר יותר.';
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      
      // setError(errorMessage);
    }
  };

  const handleMatchClick = (match: any) => {
    setSelectedMatch(match);
  };

  const handleMatchClose = () => {
    setSelectedMatch(null);
  };

  const handleMatchConfirm = () => {
    alert('הודעתך נשלחה בהצלחה! נציג המערכת יצור איתך קשר בהקדם.');
    setSelectedMatch(null);
    // כאן יהיה הקוד לשליחת ההודעה לשרת
  };

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <StyledForm onSubmit={handleAccountSubmit}>
            <Typography variant="h6" gutterBottom>
              פתיחת חשבון
            </Typography>
            <StyledTextField
              label="דואר אלקטרוני"
              type="email"
              required
              value={accountData.email}
              onChange={(e) => setAccountData({ ...accountData, email: e.target.value })}
              fullWidth
              inputProps={{
                pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
                title: "כתובת אימייל חוקית"
              }}
            />
            <StyledTextField
              label="סיסמה"
              type="password"
              required
              value={accountData.password}
              onChange={(e) => setAccountData({ ...accountData, password: e.target.value })}
              fullWidth
            />
            <StyledTextField
              label="אימות סיסמה"
              type="password"
              required
              value={accountData.confirmPassword}
              onChange={(e) => setAccountData({ ...accountData, confirmPassword: e.target.value })}
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              המשך
            </Button>
          </StyledForm>
        );
      case 1:
        return (
          <StyledForm onSubmit={handlePersonalSubmit}>
            <Typography variant="h6" gutterBottom>
              פרטים אישיים
            </Typography>
            <StyledTextField
              label="שם פרטי"
              required
              value={personalData.firstName}
              onChange={(e) => setPersonalData({ ...personalData, firstName: e.target.value })}
              fullWidth
            />
            <StyledTextField
              label="שם משפחה"
              required
              value={personalData.lastName}
              onChange={(e) => setPersonalData({ ...personalData, lastName: e.target.value })}
              fullWidth
            />
            <StyledTextField
              label="טלפון"
              required
              value={personalData.phone}
              onChange={(e) => setPersonalData({ ...personalData, phone: e.target.value })}
              fullWidth
              type="tel"
              inputProps={{
                pattern: "[0-9]{10}"
              }}
            />
            <StyledTextField
              label="גיל"
              type="number"
              required
              value={personalData.age}
              onChange={(e) => setPersonalData({ ...personalData, age: e.target.value })}
              fullWidth
              inputProps={{
                min: 18,
                max: 120,
                style: { appearance: 'textfield' }
              }}
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>מגדר</InputLabel>
              <Select
                value={personalData.gender}
                label="מגדר"
                onChange={(e) => setPersonalData({ ...personalData, gender: e.target.value })}
                required
              >
                {genders.map((gender) => (
                  <MenuItem key={gender.value} value={gender.value}>
                    {gender.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>עיר</InputLabel>
              <Select
                value={personalData.city}
                label="עיר"
                onChange={(e) => setPersonalData({ ...personalData, city: e.target.value })}
                required
              >
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>עיסוק</InputLabel>
              <Select
                value={personalData.occupation}
                label="עיסוק"
                onChange={(e) => setPersonalData({ ...personalData, occupation: e.target.value })}
                required
              >
                {occupations.map((occupation) => (
                  <MenuItem key={occupation} value={occupation}>
                    {occupation}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>השכלה</InputLabel>
              <Select
                value={personalData.education}
                label="השכלה"
                onChange={(e) => setPersonalData({ ...personalData, education: e.target.value })}
                required
              >
                {educationLevels.map((level) => (
                  <MenuItem key={level} value={level}>
                    {level}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              המשך
            </Button>
          </StyledForm>
        );
      case 2:
        return (
          <StyledForm onSubmit={handlePreferencesSubmit}>
            <Typography variant="h6" gutterBottom>
              העדפות
            </Typography>
            <StyledTextField
              label="טווח גילאים"
              required
              value={preferencesData.ageRange}
              onChange={(e) => setPreferencesData({ ...preferencesData, ageRange: e.target.value })}
              fullWidth
              placeholder="לדוגמה: 20-25"
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>רמת דתיות</InputLabel>
              <Select
                value={preferencesData.religiousLevel}
                label="רמת דתיות"
                onChange={(e) => setPreferencesData({ ...preferencesData, religiousLevel: e.target.value })}
                required
              >
                {religiousLevels.map((level) => (
                  <MenuItem key={level} value={level}>
                    {level}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>מצב משפחתי</InputLabel>
              <Select
                value={preferencesData.maritalStatus}
                label="מצב משפחתי"
                onChange={(e) => setPreferencesData({ ...preferencesData, maritalStatus: e.target.value })}
                required
              >
                {maritalStatuses.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              המשך
            </Button>
          </StyledForm>
        );
      case 3:
        return (
          <StyledForm onSubmit={handleInterestsSubmit}>
            <Typography variant="h6" gutterBottom>
              תחומי עניין
            </Typography>
            <StyledTextField
              label="תחביבים"
              multiline
              rows={3}
              value={interestsData.hobbies}
              onChange={(e) => setInterestsData({ ...interestsData, hobbies: e.target.value })}
              fullWidth
            />
            <StyledTextField
              label="שפות"
              value={interestsData.languages}
              onChange={(e) => setInterestsData({ ...interestsData, languages: e.target.value })}
              fullWidth
            />
            <StyledTextField
              label="כישורים מיוחדים"
              multiline
              rows={3}
              value={interestsData.specialSkills}
              onChange={(e) => setInterestsData({ ...interestsData, specialSkills: e.target.value })}
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              סיים והצג התאמות
            </Button>
          </StyledForm>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Box sx={{ width: '100%', mb: 4 }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        {renderStep()}
      </StyledPaper>

      <Dialog open={showMatches} fullWidth maxWidth="md">
        <DialogTitle>התאמות מומלצות</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {matches.map((match) => (
              <Grid item xs={12} key={match.id}>
                <MatchCard onClick={() => handleMatchClick(match)}>
                  <CardContent>
                    <Typography variant="h6">{match.name}</Typography>
                    <Typography>גיל: {match.age}</Typography>
                    <Typography>עיר: {match.city}</Typography>
                    <Typography>עיסוק: {match.occupation}</Typography>
                  </CardContent>
                </MatchCard>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>

      <Dialog open={selectedMatch !== null} onClose={handleMatchClose}>
        <DialogTitle>פרטי התאמה</DialogTitle>
        <DialogContent>
          {selectedMatch && (
            <>
              <Typography variant="h6" gutterBottom>{selectedMatch.name}</Typography>
              <Typography paragraph>גיל: {selectedMatch.age}</Typography>
              <Typography paragraph>עיר: {selectedMatch.city}</Typography>
              <Typography paragraph>עיסוק: {selectedMatch.occupation}</Typography>
              <Typography paragraph>{selectedMatch.description}</Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleMatchClose}>סגור</Button>
          <Button onClick={handleMatchConfirm} variant="contained" color="primary">
            יש קליק? תקליק/י!
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default RegistrationPage;
