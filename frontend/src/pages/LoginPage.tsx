import { useState } from 'react';
import { Container, Typography, Paper, Box, TextField, Button, Alert } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showCyberAlert, setShowCyberAlert] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCyberAlert(true);
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
          <TextField
            required
            fullWidth
            label="כתובת מייל"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          
          <TextField
            required
            fullWidth
            label="סיסמה"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
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
