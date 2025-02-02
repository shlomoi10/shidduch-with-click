import { useState } from 'react';
import { Container, Typography, Paper, Box, TextField, Button, Alert } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    textAlign: 'right',
    direction: 'rtl',
  },
  '& .MuiInputLabel-root': {
    right: 20,
    left: 'auto',
    transformOrigin: 'right',
    '&.MuiInputLabel-shrink': {
      transform: 'translate(0, -1.5px) scale(0.75)',
      right: 0,
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

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showCyberAlert, setShowCyberAlert] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // בדיקת תקינות
    const newErrors = {
      email: formData.email ? '' : 'שדה חובה',
      password: formData.password ? '' : 'שדה חובה'
    };
    
    setErrors(newErrors);

    // אם אין שגיאות, נמשיך בתהליך ההתחברות
    if (!newErrors.email && !newErrors.password) {
      setShowCyberAlert(true);
    }
  };

  if (showCyberAlert) {
    return (
      <Container maxWidth="sm">
        <Paper sx={{ p: 4, mt: 4, borderRadius: 2 }}>
          <Alert severity="error" sx={{ mb: 3 }}>
            עקב מתקפת סייבר איראנית על השרתים שלנו החשבון שלך נמחק
          </Alert>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            נא הירשמו שוב
          </Typography>
          <Button
            component={RouterLink}
            to="/register"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            להרשמה מחדש
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
          ברוכים השבים!
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
          איזה כיף שאתם פה שוב
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <StyledTextField
            required
            fullWidth
            label="כתובת מייל"
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
            sx={{ mb: 3 }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '25px',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: (theme) => theme.shadows[4],
              },
            }}
          >
            התחברות
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
