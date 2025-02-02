import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  MenuItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Gender, ReligiousStream } from '../../types/user';
import { useUserContext } from '../../context/UserContext';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    textAlign: 'right',
    direction: 'rtl',
  },
});

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  religiousStream: ReligiousStream;
}

interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
}

const InitialRegistrationPage = () => {
  const navigate = useNavigate();
  const { setUserProfile } = useUserContext();

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    gender: 'זכר',
    religiousStream: 'דתי לאומי',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = 'נא להזין כתובת אימייל';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'נא להזין כתובת אימייל תקינה';
    }

    if (!formData.password) {
      newErrors.password = 'נא להזין סיסמה';
    } else if (formData.password.length < 6) {
      newErrors.password = 'הסיסמה חייבת להכיל לפחות 6 תווים';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'נא לאשר את הסיסמה';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'הסיסמאות אינן תואמות';
    }

    if (!formData.firstName) {
      newErrors.firstName = 'נא להזין שם פרטי';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'נא להזין שם משפחה';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setUserProfile({
        email: formData.email,
        personalDetails: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: '',
          gender: formData.gender,
          dateOfBirth: '',
          height: 0,
          maritalStatus: 'רווק',
          religiousStream: formData.religiousStream,
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
          type: formData.gender === 'זכר' ? 'male' : 'female',
          yeshivaKtana: '',
          yeshivaGdola: '',
          currentYeshiva: '',
        },
        preferences: {
          minAge: 18,
          maxAge: 30,
          minHeight: 150,
          maxHeight: 190,
          religiousStreams: [formData.religiousStream],
          origins: [],
          location: '',
          maritalStatus: ['רווק', 'רווקה'],
        },
      });
      navigate('/register/personal');
    }
  };

  return (
    <Container maxWidth="sm">
      <StyledPaper>
        <Typography variant="h4" align="center" gutterBottom>
          הרשמה ראשונית
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Box sx={{ mb: 3 }}>
            <StyledTextField
              required
              fullWidth
              label="אימייל"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ mb: 2 }}
            />
            <StyledTextField
              required
              fullWidth
              label="סיסמה"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              sx={{ mb: 2 }}
            />
            <StyledTextField
              required
              fullWidth
              label="אימות סיסמה"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              sx={{ mb: 2 }}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <StyledTextField
              required
              fullWidth
              label="שם פרטי"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              sx={{ mb: 2 }}
            />
            <StyledTextField
              required
              fullWidth
              label="שם משפחה"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              sx={{ mb: 2 }}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <StyledTextField
              select
              required
              fullWidth
              label="מגדר"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              sx={{ mb: 2 }}
            >
              <MenuItem value="זכר">זכר</MenuItem>
              <MenuItem value="נקבה">נקבה</MenuItem>
            </StyledTextField>

            <StyledTextField
              select
              required
              fullWidth
              label="זרם דתי"
              name="religiousStream"
              value={formData.religiousStream}
              onChange={handleChange}
            >
              <MenuItem value="חרדי">חרדי</MenuItem>
              <MenuItem value="דתי לאומי">דתי לאומי</MenuItem>
              <MenuItem value="חרדי לאומי">חרדי לאומי</MenuItem>
              <MenuItem value="חסידי">חסידי</MenuItem>
              <MenuItem value="ליטאי">ליטאי</MenuItem>
              <MenuItem value="ספרדי">ספרדי</MenuItem>
              <MenuItem value="תימני">תימני</MenuItem>
            </StyledTextField>
          </Box>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ minWidth: 200 }}
            >
              המשך
            </Button>
          </Box>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default InitialRegistrationPage;
