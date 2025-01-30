import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
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
    background: `url('/pattern.svg') repeat`,
    opacity: 0.1,
  },
}));

const ProcessStep = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[1],
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const StepNumber = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  margin: '0 auto',
  marginBottom: theme.spacing(2),
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[1],
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '& > *': {
    margin: theme.spacing(1, 0),
  },
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const HomePage = () => {
  return (
    <Box>
      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h1" 
                sx={{ 
                  color: 'white',
                  marginBottom: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }} 
              >
                שידוך עם קליק
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 4, 
                  color: 'white',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                הדרך המודרנית למצוא את הזיווג המושלם
              </Typography>
              <Button
                component={RouterLink}
                to="/register"
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mr: 2 }}
              >
                הרשמה עכשיו
              </Button>
              <Button
                component={RouterLink}
                to="/about"
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
                size="large"
              >
                למד עוד
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: '500px',
                  height: '300px',
                  display: 'block',
                  margin: '0 auto',
                  backgroundImage: 'url(/pattern.svg)',
                  backgroundRepeat: 'repeat',
                  backgroundSize: '100px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  opacity: 0.8
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            למה לבחור בנו?
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            color="text.secondary" 
            sx={{ 
              mb: 6,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
            }}
          >
            אנחנו מציעים את הדרך הטובה ביותר למצוא שידוך
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard>
                <Typography variant="h5" gutterBottom>
                  התאמה מדויקת
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  אלגוריתם חכם שמתאים בין מועמדים על פי קריטריונים מדויקים
                </Typography>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard>
                <Typography variant="h5" gutterBottom>
                  פרטיות מלאה
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  שמירה על פרטיות המשתמשים והצגת מידע רק למועמדים מתאימים
                </Typography>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard>
                <Typography variant="h5" gutterBottom>
                  ליווי אישי
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  צוות מקצועי שמלווה אתכם לאורך כל התהליך
                </Typography>
              </FeatureCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            איך זה עובד?
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            color="text.secondary" 
            sx={{ 
              mb: 6,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
            }}
          >
            ארבעה שלבים פשוטים למציאת הזיווג
          </Typography>
          <Grid container spacing={4}>
            {[
              { num: 1, title: 'הרשמה', desc: 'מילוי פרטים אישיים והעדפות' },
              { num: 2, title: 'חיפוש התאמות', desc: 'המערכת מחפשת התאמות מדויקות' },
              { num: 3, title: 'קבלת הצעות', desc: 'קבלת הצעות שידוך מתאימות' },
              { num: 4, title: 'מציאת הזיווג', desc: 'יצירת קשר והתחלת השידוך' }
            ].map((step) => (
              <Grid item xs={12} sm={6} md={3} key={step.num}>
                <ProcessStep>
                  <StepNumber>{step.num}</StepNumber>
                  <Typography variant="h5" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {step.desc}
                  </Typography>
                </ProcessStep>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
