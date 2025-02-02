import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  MenuItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { PersonalDetails } from '../../types/registration';
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

const PersonalDetailsForm = () => {
  const navigate = useNavigate();
  const { userProfile, updateUserProfile } = useUserContext();

  const [formData, setFormData] = useState<PersonalDetails>({
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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // המרה למספר עבור שדות מספריים
    if (['height', 'numberOfSiblings', 'numberOfMarriedSiblings'].includes(name)) {
      setFormData(prev => ({
        ...prev,
        [name]: value === '' ? 0 : Number(value),
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userProfile) {
      const updatedProfile = {
        ...userProfile,
        personalDetails: formData,
      };
      updateUserProfile(updatedProfile);
      navigate('/register/education');
    }
  };

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Typography variant="h4" align="center" gutterBottom>
          פרטים אישיים
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                label="שם פרטי"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                label="שם משפחה"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                label="אימייל"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                label="טלפון"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                select
                required
                fullWidth
                label="מגדר"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <MenuItem value="זכר">זכר</MenuItem>
                <MenuItem value="נקבה">נקבה</MenuItem>
              </StyledTextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                label="תאריך לידה"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                label="גובה (בס״מ)"
                name="height"
                type="number"
                value={formData.height}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                select
                required
                fullWidth
                label="מצב משפחתי"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
              >
                <MenuItem value="רווק">רווק</MenuItem>
                <MenuItem value="רווקה">רווקה</MenuItem>
              </StyledTextField>
            </Grid>
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                label="מוצא"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                label="עיר מגורי ההורים"
                name="parentsCity"
                value={formData.parentsCity}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                label="מוצא האב"
                name="fatherOrigin"
                value={formData.fatherOrigin}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                label="מוצא האם"
                name="motherOrigin"
                value={formData.motherOrigin}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                label="עיסוק"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                label="מספר אחים ואחיות"
                name="numberOfSiblings"
                type="number"
                value={formData.numberOfSiblings}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                label="מספר אחים ואחיות נשואים"
                name="numberOfMarriedSiblings"
                type="number"
                value={formData.numberOfMarriedSiblings}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
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

export default PersonalDetailsForm;
