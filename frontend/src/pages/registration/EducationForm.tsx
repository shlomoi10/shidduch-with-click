import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useUserContext } from '../../context/UserContext';
import RegistrationStepper from '../../components/RegistrationStepper';

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

const EducationForm = () => {
  const navigate = useNavigate();
  const { userProfile, setUserProfile } = useUserContext();
  const [formData, setFormData] = useState({
    yeshiva: '',
    kollel: '',
    seminary: '',
    degree: '',
    currentStudy: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userProfile) {
      const education =
        userProfile.personalDetails.gender === 'זכר'
          ? {
              type: 'male' as const,
              yeshiva: formData.yeshiva,
              kollel: formData.kollel,
              degree: formData.degree,
              currentStudy: formData.currentStudy,
            }
          : {
              type: 'female' as const,
              seminary: formData.seminary,
              degree: formData.degree,
              currentStudy: formData.currentStudy,
            };

      setUserProfile({
        ...userProfile,
        education,
      });
      navigate('/register/complete');
    }
  };

  return (
    <Container maxWidth="md">
      <RegistrationStepper activeStep={2} />
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 4,
          p: 4,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          השכלה
        </Typography>
        <Grid container spacing={3}>
          {userProfile?.personalDetails.gender === 'זכר' ? (
            <>
              <Grid item xs={12}>
                <StyledTextField
                  required
                  fullWidth
                  label="ישיבה"
                  value={formData.yeshiva}
                  onChange={(e) =>
                    setFormData({ ...formData, yeshiva: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
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
          ) : (
            <Grid item xs={12}>
              <StyledTextField
                required
                fullWidth
                label="סמינר"
                value={formData.seminary}
                onChange={(e) =>
                  setFormData({ ...formData, seminary: e.target.value })
                }
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              label="תואר אקדמי"
              value={formData.degree}
              onChange={(e) =>
                setFormData({ ...formData, degree: e.target.value })
              }
            />
          </Grid>
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
    </Container>
  );
};

export default EducationForm;
