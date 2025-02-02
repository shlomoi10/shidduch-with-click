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
import { MaleEducation, FemaleEducation } from '../../types/registration';
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
  const [isMale] = useState<boolean>(true);

  const [maleEducation, setMaleEducation] = useState<MaleEducation>({
    elementarySchool: '',
    smallYeshiva: '',
    bigYeshiva: '',
    currentYeshiva: '',
    yearsInCurrentYeshiva: '',
  });

  const [femaleEducation, setFemaleEducation] = useState<FemaleEducation>({
    elementarySchool: '',
    highSchool: '',
    seminary: '',
    currentOccupation: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userProfile) {
      const updatedProfile = {
        ...userProfile,
        education: isMale ? maleEducation : femaleEducation,
      };
      updateUserProfile(updatedProfile);
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
                    label="בית ספר יסודי"
                    name="elementarySchool"
                    value={maleEducation.elementarySchool}
                    onChange={(e) => setMaleEducation({ ...maleEducation, elementarySchool: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="ישיבה קטנה"
                    name="smallYeshiva"
                    value={maleEducation.smallYeshiva}
                    onChange={(e) => setMaleEducation({ ...maleEducation, smallYeshiva: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="ישיבה גדולה"
                    name="bigYeshiva"
                    value={maleEducation.bigYeshiva}
                    onChange={(e) => setMaleEducation({ ...maleEducation, bigYeshiva: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="ישיבה נוכחית"
                    name="currentYeshiva"
                    value={maleEducation.currentYeshiva}
                    onChange={(e) => setMaleEducation({ ...maleEducation, currentYeshiva: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="שנים בישיבה נוכחית"
                    name="yearsInCurrentYeshiva"
                    value={maleEducation.yearsInCurrentYeshiva}
                    onChange={(e) => setMaleEducation({ ...maleEducation, yearsInCurrentYeshiva: e.target.value })}
                  />
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="בית ספר יסודי"
                    name="elementarySchool"
                    value={femaleEducation.elementarySchool}
                    onChange={(e) => setFemaleEducation({ ...femaleEducation, elementarySchool: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="תיכון"
                    name="highSchool"
                    value={femaleEducation.highSchool}
                    onChange={(e) => setFemaleEducation({ ...femaleEducation, highSchool: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="סמינר"
                    name="seminary"
                    value={femaleEducation.seminary}
                    onChange={(e) => setFemaleEducation({ ...femaleEducation, seminary: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="עיסוק נוכחי"
                    name="currentOccupation"
                    value={femaleEducation.currentOccupation}
                    onChange={(e) => setFemaleEducation({ ...femaleEducation, currentOccupation: e.target.value })}
                  />
                </Grid>
              </>
            )}
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

export default EducationForm;
