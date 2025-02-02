import { Box, Button, Container, Grid, Typography, Paper, Card, CardContent, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import HandshakeIcon from '@mui/icons-material/Handshake';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '90vh',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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

const ProcessStep = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const StepAvatar = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  backgroundColor: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const FeatureCard = styled(Card)({
  height: '100%',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
});

const HomePage = () => {
  return (
    <Box>
      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  marginBottom: 2,
                }}
              >
                שידוך עם קליק
              </Typography>
              <Typography 
                variant="h2"
                sx={{ 
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  marginBottom: 4,
                  opacity: 0.9,
                }}
              >
                למצוא קליק בקליק
              </Typography>
              <Typography 
                variant="h5"
                sx={{ 
                  marginBottom: 4,
                  opacity: 0.9,
                  maxWidth: '600px',
                }}
              >
                הדרך המודרנית למצוא את השידוך המושלם, בשילוב מושלם בין טכנולוגיה למסורת
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
                    padding: '12px 32px',
                    fontSize: '1.1rem',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                >
                  הרשמה עכשיו
                </Button>
                <Button
                  component={RouterLink}
                  to="/about"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    padding: '12px 32px',
                    fontSize: '1.1rem',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  למידע נוסף
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
          איך זה עובד?
        </Typography>
        <Grid container spacing={4}>
          {[
            { icon: <PeopleIcon sx={{ fontSize: 30 }} />, step: 1, title: 'יצירת פרופיל', description: 'צור פרופיל אישי המשקף את מי שאתה והעדפותיך' },
            { icon: <SearchIcon sx={{ fontSize: 30 }} />, step: 2, title: 'חיפוש מותאם', description: 'המערכת שלנו תציע לך התאמות מדויקות לפי העדפותיך' },
            { icon: <FavoriteIcon sx={{ fontSize: 30 }} />, step: 3, title: 'יצירת קשר', description: 'צור קשר עם התאמות פוטנציאליות בצורה דיסקרטית ומכבדת' },
            { icon: <HandshakeIcon sx={{ fontSize: 30 }} />, step: 4, title: 'פגישה ראשונה', description: 'קבע פגישה ראשונה בסביבה בטוחה ונעימה' },
            { icon: <SecurityIcon sx={{ fontSize: 30 }} />, step: 5, title: 'ליווי מקצועי', description: 'צוות המומחים שלנו ילווה אותך לאורך כל הדרך' },
          ].map((step, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <ProcessStep elevation={3}>
                <StepAvatar>{step.icon}</StepAvatar>
                <Typography variant="h6" gutterBottom>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.description}
                </Typography>
              </ProcessStep>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
            למה שידוך עם קליק?
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: 'התאמה מדויקת',
                description: 'אלגוריתם חכם המתבסס על מגוון פרמטרים להתאמה מדויקת ומוצלחת'
              },
              {
                title: 'שמירה על המסורת',
                description: 'תהליך השידוך מתנהל בהתאם להלכה ולמסורת היהודית'
              },
              {
                title: 'פרטיות מלאה',
                description: 'מערכת מאובטחת השומרת על פרטיותך לאורך כל התהליך'
              },
              {
                title: 'ליווי אישי',
                description: 'צוות מקצועי שילווה אותך בכל שלב בדרך למציאת הזיווג'
              },
              {
                title: 'קהילה איכותית',
                description: 'קהילת משתמשים איכותית ומחויבת למטרה משותפת'
              },
              {
                title: 'ממשק ידידותי',
                description: 'ממשק משתמש נוח וקל לשימוש המותאם לכל הגילאים'
              }
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FeatureCard elevation={2}>
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Typography variant="h5" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          מוכנים להתחיל?
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          הצטרפו לאלפי משתמשים שכבר מצאו את הזיווג שלהם
        </Typography>
        <Button
          component={RouterLink}
          to="/register"
          variant="contained"
          size="large"
          sx={{
            padding: '16px 48px',
            fontSize: '1.2rem',
          }}
        >
          להרשמה חינם
        </Button>
      </Container>
    </Box>
  );
};

export default HomePage;
