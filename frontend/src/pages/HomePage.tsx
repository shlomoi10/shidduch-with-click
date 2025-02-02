import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useUserContext } from '../context/UserContext';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledHeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #6B8E23 30%, #556B2F 90%)',
  padding: theme.spacing(15, 0),
  color: '#fff',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'url("/hero-pattern.png") center center/cover no-repeat',
    opacity: 0.1,
  },
}));

const AnimatedBox = styled(Box)`
  animation: ${fadeIn} 1s ease-out;
`;

const FeatureCard = styled(Box)(({ theme }) => ({
  background: '#fff',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  textAlign: 'center',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '25px',
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const HomePage = () => {
  const { userProfile } = useUserContext();

  const features = [
    {
      title: 'התאמה מדויקת',
      description: 'אלגוריתם חכם המתאים שידוכים על פי קריטריונים מדויקים',
      icon: '🎯',
    },
    {
      title: 'פרטיות מלאה',
      description: 'שמירה על פרטיות המשתמשים ואבטחת מידע מתקדמת',
      icon: '🔒',
    },
    {
      title: 'תמיכה אישית',
      description: 'צוות תמיכה מקצועי זמין לכל שאלה או בקשה',
      icon: '💬',
    },
  ];

  return (
    <Box>
      <StyledHeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <AnimatedBox>
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                  }}
                >
                  מצא את הזיווג המושלם
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mb: 4, textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                >
                  פלטפורמה מתקדמת לשידוכים המשלבת טכנולוגיה וערכים מסורתיים
                </Typography>
                {!userProfile ? (
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                      <StyledButton
                        variant="contained"
                        color="secondary"
                        size="large"
                      >
                        הרשמה עכשיו
                      </StyledButton>
                    </Link>
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                      <StyledButton
                        variant="outlined"
                        color="inherit"
                        size="large"
                      >
                        למד עוד
                      </StyledButton>
                    </Link>
                  </Box>
                ) : (
                  <Link to="/profile" style={{ textDecoration: 'none' }}>
                    <StyledButton
                      variant="contained"
                      color="secondary"
                      size="large"
                    >
                      לאזור האישי
                    </StyledButton>
                  </Link>
                )}
              </AnimatedBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/hero-image.png"
                alt="Shidduch With Click"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto',
                  animation: `${fadeIn} 1s ease-out 0.5s both`,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </StyledHeroSection>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <AnimatedBox
                sx={{
                  animation: `${fadeIn} 1s ease-out ${index * 0.2}s`,
                }}
              >
                <FeatureCard>
                  <Typography variant="h1" sx={{ fontSize: '3rem', mb: 2 }}>
                    {feature.icon}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </FeatureCard>
              </AnimatedBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
