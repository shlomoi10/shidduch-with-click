import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';
import { useUserContext } from '../../context/UserContext';
import RegistrationStepper from '../../components/RegistrationStepper';
import { MaritalStatus, ReligiousStream } from '../../types/user';

interface PersonalDetailsFormProps {
  onSubmit: (data: any) => void;
}

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

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const { userProfile, setUserProfile } = useUserContext();
  const [formData, setFormData] = useState({
    phone: '',
    dateOfBirth: null as Date | null,
    height: '',
    maritalStatus: 'רווק' as MaritalStatus,
    religiousStream: 'חרדי' as ReligiousStream,
    origin: '',
    parentsCity: '',
    fatherOrigin: '',
    motherOrigin: '',
    occupation: '',
    numberOfSiblings: '',
    numberOfMarriedSiblings: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userProfile) {
      setUserProfile({
        ...userProfile,
        personalDetails: {
          ...userProfile.personalDetails,
          ...formData,
          dateOfBirth: formData.dateOfBirth || new Date(),
          height: Number(formData.height),
          numberOfSiblings: Number(formData.numberOfSiblings),
          numberOfMarriedSiblings: Number(formData.numberOfMarriedSiblings),
        },
      });
      onSubmit(formData);
      navigate('/register/education');
    }
  };

  return (
    <Container maxWidth="md">
      <RegistrationStepper activeStep={1} />
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
          פרטים אישיים
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <StyledTextField
              required
              fullWidth
              label="טלפון"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePicker
              label="תאריך לידה"
              value={formData.dateOfBirth}
              onChange={(date) =>
                setFormData({ ...formData, dateOfBirth: date })
              }
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTextField
              required
              fullWidth
              label="גובה (בס״מ)"
              type="number"
              value={formData.height}
              onChange={(e) =>
                setFormData({ ...formData, height: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>מצב משפחתי</InputLabel>
              <Select
                value={formData.maritalStatus}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    maritalStatus: e.target.value as MaritalStatus,
                  })
                }
                label="מצב משפחתי"
              >
                <MenuItem value="רווק">רווק/ה</MenuItem>
                <MenuItem value="גרוש">גרוש/ה</MenuItem>
                <MenuItem value="אלמן">אלמן/ה</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTextField
              required
              fullWidth
              label="מוצא"
              value={formData.origin}
              onChange={(e) =>
                setFormData({ ...formData, origin: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTextField
              required
              fullWidth
              label="עיר מגורי ההורים"
              value={formData.parentsCity}
              onChange={(e) =>
                setFormData({ ...formData, parentsCity: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTextField
              required
              fullWidth
              label="מוצא האב"
              value={formData.fatherOrigin}
              onChange={(e) =>
                setFormData({ ...formData, fatherOrigin: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTextField
              required
              fullWidth
              label="מוצא האם"
              value={formData.motherOrigin}
              onChange={(e) =>
                setFormData({ ...formData, motherOrigin: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              required
              fullWidth
              label="עיסוק"
              value={formData.occupation}
              onChange={(e) =>
                setFormData({ ...formData, occupation: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTextField
              required
              fullWidth
              label="מספר אחים ואחיות"
              type="number"
              value={formData.numberOfSiblings}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  numberOfSiblings: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTextField
              required
              fullWidth
              label="מספר אחים ואחיות נשואים"
              type="number"
              value={formData.numberOfMarriedSiblings}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  numberOfMarriedSiblings: e.target.value,
                })
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

export default PersonalDetailsForm;
