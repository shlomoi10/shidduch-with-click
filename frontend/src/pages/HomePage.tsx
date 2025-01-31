import { Box, Button, Container, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: theme.palette.primary.contrastText,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("/pattern.svg") repeat',
    opacity: 0.1,
  },
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const HomePage = () => {
  return (
    <Box sx={{ direction: 'rtl' }}>
      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2"
                sx={{ 
                  fontWeight: 'bold',
                  marginBottom: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                ברוכים הבאים לשידוך בקליק
              </Typography>
              <Typography 
                variant="h5"
                sx={{ 
                  marginBottom: 4,
                  opacity: 0.9,
                }}
              >
                למצוא קליק בקליק
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  component={RouterLink}
                  to="/register"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                >
                  הרשמה
                </Button>
                <Button
                  component={RouterLink}
                  to="/about"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  קרא עוד
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          למה שידוך בקליק?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <FeatureCard elevation={2}>
              <Typography variant="h5" gutterBottom>
                פשוט ונוח
              </Typography>
              <Typography>
                ממשק ידידותי ונוח לשימוש, המאפשר לך למצוא התאמות בקלות
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard elevation={2}>
              <Typography variant="h5" gutterBottom>
                בדרך המסורתית
              </Typography>
              <Typography>
                שומרים על הערכים והמסורת, עם כלים טכנולוגיים מתקדמים
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard elevation={2}>
              <Typography variant="h5" gutterBottom>
                פרטיות מלאה
              </Typography>
              <Typography>
                הפרטים שלך מאובטחים ומוגנים, ורק אתה מחליט מה לשתף
              </Typography>
            </FeatureCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
