import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useUserContext } from '../../context/UserContext';
import RegistrationStepper from '../../components/RegistrationStepper';
import { Gender, ReligiousStream } from '../../types/user';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputLabel-root': {
    right: theme.spacing(2),
    left: 'auto',
    transformOrigin: 'right',
  },
  '& .MuiInputLabel-shrink': {
    transform: 'translate(0, -1.5px) scale(0.75)',
    right: theme.spacing(2),
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.divider,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputBase-input': {
    textAlign: 'right',
    direction: 'rtl',
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  borderRadius: '25px',
  fontSize: '1.1rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const InitialRegistrationPage = () => {
  const navigate = useNavigate();
  const { userProfile, setUserProfile } = useUserContext();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'זכר' as Gender,
    religiousStream: 'חרדי' as ReligiousStream,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userProfile) {
      setUserProfile({
        ...userProfile,
        personalDetails: {
          ...userProfile.personalDetails,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          gender: formData.gender,
          religiousStream: formData.religiousStream,
        },
      });
      navigate('/register/personal-details');
    }
  };

  return (
    <Container maxWidth="md">
      <RegistrationStepper activeStep={0} />
      <StyledPaper>
        <Typography variant="h4" align="center" gutterBottom>
          הרשמה לאתר
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" sx={{ mb: 4 }}>
          אנא מלא/י את הפרטים הבאים
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                label="שם פרטי"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                label="שם משפחה"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                required
                fullWidth
                type="email"
                label="אימייל"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                required
                fullWidth
                type="password"
                label="סיסמה"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                required
                fullWidth
                type="password"
                label="אימות סיסמה"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>מגדר</InputLabel>
                <Select
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value as Gender })
                  }
                  label="מגדר"
                >
                  <MenuItem value="זכר">זכר</MenuItem>
                  <MenuItem value="נקבה">נקבה</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>זרם דתי</InputLabel>
                <Select
                  value={formData.religiousStream}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      religiousStream: e.target.value as ReligiousStream,
                    })
                  }
                  label="זרם דתי"
                >
                  <MenuItem value="חרדי">חרדי</MenuItem>
                  <MenuItem value="דתי לאומי">דתי לאומי</MenuItem>
                  <MenuItem value="חרדי לאומי">חרדי לאומי</MenuItem>
                  <MenuItem value="חסידי">חסידי</MenuItem>
                  <MenuItem value="ליטאי">ליטאי</MenuItem>
                  <MenuItem value="ספרדי">ספרדי</MenuItem>
                  <MenuItem value="תימני">תימני</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
            <ActionButton type="submit" variant="contained" color="primary">
              המשך
            </ActionButton>
          </Box>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default InitialRegistrationPage;
