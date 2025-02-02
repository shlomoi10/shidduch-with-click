import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/userSlice';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Paper,
  SelectChangeEvent,
} from '@mui/material';
import { styled } from '@mui/material/styles';

interface UserProfile {
  id?: string;
  firstName: string;
  lastName: string;
  age: string;
  city: string;
  occupation: string;
  description: string;
  email: string;
  gender: 'male' | 'female';
  education: string;
  religiousLevel: string;
}

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    textAlign: 'right',
    direction: 'rtl',
  },
  '& .MuiInputLabel-root': {
    right: 20,
    left: 'auto',
    transformOrigin: 'top right',
    '&.MuiInputLabel-shrink': {
      transform: 'translate(12%, -9px) scale(0.75)',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    textAlign: 'right',
    direction: 'rtl',
  },
  '& .MuiFormHelperText-root': {
    marginRight: '14px',
    marginLeft: '0',
    textAlign: 'right',
  },
});

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [profile, setProfile] = useState<UserProfile>({
    firstName: '',
    lastName: '',
    age: '',
    city: '',
    occupation: '',
    description: '',
    email: '',
    gender: 'male',
    education: '',
    religiousLevel: '',
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      dispatch(login({
        id: Math.random().toString(),
        ...profile
      }));
      navigate('/dashboard');
    } catch (error) {
      console.error('שגיאה בשליחת הטופס:', error);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
  ) => {
    const { name, value } = event.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          הרשמה לשידוך בקליק
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                name="firstName"
                label="שם פרטי"
                value={profile.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                name="lastName"
                label="שם משפחה"
                value={profile.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                name="email"
                label="דואר אלקטרוני"
                type="email"
                value={profile.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel id="gender-label">מגדר</InputLabel>
                <Select
                  labelId="gender-label"
                  name="gender"
                  value={profile.gender}
                  label="מגדר"
                  onChange={handleChange}
                >
                  <MenuItem value="male">זכר</MenuItem>
                  <MenuItem value="female">נקבה</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                name="age"
                label="גיל"
                type="number"
                value={profile.age}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                name="city"
                label="עיר מגורים"
                value={profile.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                name="education"
                label="השכלה"
                value={profile.education}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel id="religious-level-label">רמת דתיות</InputLabel>
                <Select
                  labelId="religious-level-label"
                  name="religiousLevel"
                  value={profile.religiousLevel}
                  label="רמת דתיות"
                  onChange={handleChange}
                >
                  <MenuItem value="חרדי">חרדי</MenuItem>
                  <MenuItem value="דתי לאומי">דתי לאומי</MenuItem>
                  <MenuItem value="מסורתי">מסורתי</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                required
                fullWidth
                name="occupation"
                label="עיסוק"
                value={profile.occupation}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                name="description"
                label="תיאור קצר על עצמך"
                multiline
                rows={4}
                value={profile.description}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            הרשמה
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
