import { Box, Button, Container, Grid, Typography, Card, CardContent, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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

const ProcessStep = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  background: '#fff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const StepAvatar = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  backgroundColor: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const FeatureCard = styled(motion(Card))({
  height: '100%',
  background: '#fff',
  overflow: 'hidden',
});

const HomePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Box>
      <HeroSection>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={7}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Typography variant="h1">שידוך עם קליק</Typography>
                  <Typography variant="h2">למצוא קליק בקליק</Typography>
                  <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                    <Button
                      component={RouterLink}
                      to="/register"
                      variant="contained"
                      size="large"
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        '&:hover': {
                          transform: 'translateY(-2px)',
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
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: 'white',
                        borderColor: 'white',
                        '&:hover': {
                          borderColor: 'white',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      קרא עוד
                    </Button>
                  </Box>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={5}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Box
                    component="img"
                    src="logo-new.svg"
                    alt="שידוך עם קליק"
                    sx={{
                      width: '100%',
                      maxWidth: 400,
                      height: 'auto',
                      filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
                    }}
                  />
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <div data-aos="fade-up">
          <Typography variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
            איך זה עובד?
          </Typography>
        </div>
        <Grid container spacing={4}>
          {[
            { icon: <PeopleIcon sx={{ fontSize: 30 }} />, step: 1, title: 'יצירת פרופיל', description: 'צור פרופיל אישי המשקף את מי שאתה והעדפותיך' },
            { icon: <SearchIcon sx={{ fontSize: 30 }} />, step: 2, title: 'חיפוש מותאם', description: 'המערכת שלנו תציע לך התאמות מדויקות לפי העדפותיך' },
            { icon: <FavoriteIcon sx={{ fontSize: 30 }} />, step: 3, title: 'יצירת קשר', description: 'צור קשר עם התאמות פוטנציאליות בצורה דיסקרטית ומכבדת' },
            { icon: <HandshakeIcon sx={{ fontSize: 30 }} />, step: 4, title: 'פגישה ראשונה', description: 'קבע פגישה ראשונה בסביבה בטוחה ונעימה' },
            { icon: <SecurityIcon sx={{ fontSize: 30 }} />, step: 5, title: 'ליווי מקצועי', description: 'צוות המומחים שלנו ילווה אותך לאורך כל הדרך' },
          ].map((step, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <div data-aos="fade-up" data-aos-delay={index * 100}>
                <ProcessStep
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <StepAvatar>{step.icon}</StepAvatar>
                  <Typography variant="h6" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </ProcessStep>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'grey.50', py: 8 }} ref={ref}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
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
                  <motion.div variants={itemVariants}>
                    <FeatureCard
                      elevation={2}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CardContent sx={{ textAlign: 'center', p: 4 }}>
                        <Typography variant="h5" gutterBottom>
                          {feature.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </FeatureCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>
      </Container>
    </Box>
  );
};

export default HomePage;
