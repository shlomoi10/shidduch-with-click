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
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useUserContext } from '../../context/UserContext';
import RegistrationStepper from '../../components/RegistrationStepper';

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

const EducationForm = () => {
  const navigate = useNavigate();
  const { userProfile, setUserProfile } = useUserContext();
  const [formData, setFormData] = useState({
    type: userProfile?.education?.type || 'male',
    yeshiva: userProfile?.education?.yeshiva || '',
    kollel: userProfile?.education?.kollel || '',
    degree: userProfile?.education?.degree || '',
    currentStudy: userProfile?.education?.currentStudy || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userProfile) {
      setUserProfile({
        ...userProfile,
        education: {
          ...userProfile.education,
          ...formData,
        },
      });
      navigate('/profile');
    }
  };

  return (
    <Container maxWidth="md">
      <RegistrationStepper activeStep={2} />
      <StyledPaper>
        <Typography variant="h4" align="center" gutterBottom>
          השכלה
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" sx={{ mb: 4 }}>
          ספר/י לנו על הרקע החינוכי שלך
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StyledTextField
                select
                fullWidth
                label="סוג השכלה"
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
              >
                <MenuItem value="male">ישיבתי</MenuItem>
                <MenuItem value="female">סמינר</MenuItem>
                <MenuItem value="academic">אקדמי</MenuItem>
              </StyledTextField>
            </Grid>
            {formData.type === 'male' && (
              <>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label="ישיבה"
                    value={formData.yeshiva}
                    onChange={(e) =>
                      setFormData({ ...formData, yeshiva: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label="כולל"
                    value={formData.kollel}
                    onChange={(e) =>
                      setFormData({ ...formData, kollel: e.target.value })
                    }
                  />
                </Grid>
              </>
            )}
            {formData.type === 'female' && (
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  label="סמינר"
                  value={formData.yeshiva}
                  onChange={(e) =>
                    setFormData({ ...formData, yeshiva: e.target.value })
                  }
                />
              </Grid>
            )}
            {formData.type === 'academic' && (
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  label="תואר"
                  value={formData.degree}
                  onChange={(e) =>
                    setFormData({ ...formData, degree: e.target.value })
                  }
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="לימודים נוכחיים"
                value={formData.currentStudy}
                onChange={(e) =>
                  setFormData({ ...formData, currentStudy: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
            <ActionButton
              variant="outlined"
              color="primary"
              onClick={() => navigate(-1)}
            >
              חזור
            </ActionButton>
            <ActionButton type="submit" variant="contained" color="primary">
              סיום
            </ActionButton>
          </Box>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default EducationForm;
