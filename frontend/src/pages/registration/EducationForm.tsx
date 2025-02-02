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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Education, MaleEducation, FemaleEducation } from '../../types/user';
import { useUserContext } from '../../context/UserContext';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(2, 0),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
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
}));

const EducationForm = () => {
  const navigate = useNavigate();
  const { userProfile, updateUserProfile } = useUserContext();
  const [isMale] = useState<boolean>(userProfile?.personalDetails.gender === 'זכר');

  const [maleEducation, setMaleEducation] = useState<MaleEducation>({
    type: 'male',
    yeshiva: '',
    kollel: '',
    degree: '',
    currentStudy: '',
  });

  const [femaleEducation, setFemaleEducation] = useState<FemaleEducation>({
    type: 'female',
    seminary: '',
    degree: '',
    currentStudy: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userProfile) {
      const education: Education = isMale ? maleEducation : femaleEducation;
      updateUserProfile({ education });
      navigate('/register/complete');
    }
  };

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Typography variant="h4" gutterBottom align="center">
          פרטי השכלה
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {isMale ? (
              <>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="ישיבה"
                    value={maleEducation.yeshiva}
                    onChange={(e) =>
                      setMaleEducation({ ...maleEducation, yeshiva: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="כולל"
                    value={maleEducation.kollel}
                    onChange={(e) =>
                      setMaleEducation({ ...maleEducation, kollel: e.target.value })
                    }
                  />
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="סמינר"
                    value={femaleEducation.seminary}
                    onChange={(e) =>
                      setFemaleEducation({ ...femaleEducation, seminary: e.target.value })
                    }
                  />
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="תואר"
                value={isMale ? maleEducation.degree : femaleEducation.degree}
                onChange={(e) =>
                  isMale
                    ? setMaleEducation({ ...maleEducation, degree: e.target.value })
                    : setFemaleEducation({ ...femaleEducation, degree: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="לימודים נוכחיים"
                value={isMale ? maleEducation.currentStudy : femaleEducation.currentStudy}
                onChange={(e) =>
                  isMale
                    ? setMaleEducation({ ...maleEducation, currentStudy: e.target.value })
                    : setFemaleEducation({ ...femaleEducation, currentStudy: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              המשך
            </Button>
          </Box>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default EducationForm;
