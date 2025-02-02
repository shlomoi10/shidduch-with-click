import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  SelectChangeEvent,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { he } from 'date-fns/locale';
import { PersonalDetails, MaritalStatus, Gender, ReligiousStream } from '../../types/user';

const MARITAL_STATUS_OPTIONS: MaritalStatus[] = [
  'רווק',
  'רווקה',
  'גרוש',
  'גרושה',
  'אלמן',
  'אלמנה',
];

const RELIGIOUS_STREAM_OPTIONS: ReligiousStream[] = [
  'חרדי',
  'דתי לאומי',
  'חרדי לאומי',
  'חסידי',
  'ליטאי',
  'ספרדי',
  'תימני',
];

interface PersonalDetailsFormProps {
  onSubmit: (data: PersonalDetails) => void;
  initialData?: Partial<PersonalDetails>;
}

const PersonalDetailsForm = ({ onSubmit, initialData }: PersonalDetailsFormProps) => {
  const [formData, setFormData] = useState<Partial<PersonalDetails>>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: 'זכר',
    dateOfBirth: new Date(),
    height: 170,
    maritalStatus: 'רווק',
    religiousStream: 'חרדי',
    origin: '',
    parentsCity: '',
    fatherOrigin: '',
    motherOrigin: '',
    occupation: '',
    numberOfSiblings: 0,
    numberOfMarriedSiblings: 0,
    hobbies: [],
    specialTalents: [],
    ...initialData,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setFormData((prev) => ({
        ...prev,
        dateOfBirth: date,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData as PersonalDetails);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom align="right">
          פרטים אישיים
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={3} direction="row-reverse">
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="שם פרטי"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                dir="rtl"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="שם משפחה"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                dir="rtl"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="אימייל"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                dir="rtl"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="טלפון"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                dir="rtl"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="gender-label">מגדר</InputLabel>
                <Select
                  labelId="gender-label"
                  name="gender"
                  value={formData.gender}
                  onChange={handleSelectChange}
                  label="מגדר"
                >
                  <MenuItem value="זכר">זכר</MenuItem>
                  <MenuItem value="נקבה">נקבה</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={he}>
                <DatePicker
                  label="תאריך לידה"
                  value={formData.dateOfBirth}
                  onChange={handleDateChange}
                  format="dd/MM/yyyy"
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="גובה (בס״מ)"
                name="height"
                type="number"
                value={formData.height}
                onChange={handleChange}
                inputProps={{ min: 140, max: 220 }}
                dir="rtl"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="marital-status-label">מצב משפחתי</InputLabel>
                <Select
                  labelId="marital-status-label"
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleSelectChange}
                  label="מצב משפחתי"
                >
                  {MARITAL_STATUS_OPTIONS.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="religious-stream-label">זרם דתי</InputLabel>
                <Select
                  labelId="religious-stream-label"
                  name="religiousStream"
                  value={formData.religiousStream}
                  onChange={handleSelectChange}
                  label="זרם דתי"
                >
                  {RELIGIOUS_STREAM_OPTIONS.map((stream) => (
                    <MenuItem key={stream} value={stream}>
                      {stream}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="מוצא"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
                dir="rtl"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="עיר מגורי ההורים"
                name="parentsCity"
                value={formData.parentsCity}
                onChange={handleChange}
                dir="rtl"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="מוצא האב"
                name="fatherOrigin"
                value={formData.fatherOrigin}
                onChange={handleChange}
                dir="rtl"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="מוצא האם"
                name="motherOrigin"
                value={formData.motherOrigin}
                onChange={handleChange}
                dir="rtl"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="עיסוק"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                dir="rtl"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="מספר אחים ואחיות"
                name="numberOfSiblings"
                type="number"
                value={formData.numberOfSiblings}
                onChange={handleChange}
                inputProps={{ min: 0 }}
                dir="rtl"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="מספר אחים ואחיות נשואים"
                name="numberOfMarriedSiblings"
                type="number"
                value={formData.numberOfMarriedSiblings}
                onChange={handleChange}
                inputProps={{ min: 0 }}
                dir="rtl"
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
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
      </Paper>
    </Container>
  );
};

export default PersonalDetailsForm;
