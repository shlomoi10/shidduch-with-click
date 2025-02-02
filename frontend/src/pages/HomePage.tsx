import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
  color: theme.palette.common.white,
  padding: theme.spacing(4),
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  maxWidth: 800,
  margin: '0 auto',
}));

const FeatureSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginRight: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  fontSize: '1.1rem',
  padding: theme.spacing(1.5, 4),
  '&.primary': {
    backgroundColor: 'white',
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
  },
  '&.secondary': {
    borderColor: 'white',
    color: 'white',
    '&:hover': {
      borderColor: 'rgba(255, 255, 255, 0.9)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
}));

const HomePage = () => {
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
      transition: { duration: 0.3 },
    },
  };

  return (
    <Box>
      <HeroSection>
        <ContentWrapper>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  mb: 4,
                  fontSize: { xs: '2.5rem', md: '3.75rem' },
                }}
              >
                מצאו את השידוך המושלם
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h5"
                sx={{
                  mb: 6,
                  opacity: 0.9,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                }}
              >
                הפלטפורמה המובילה למציאת זיווג בדרך היהודית המסורתית
              </Typography>
            </motion.div>

            <Box sx={{ mt: 4 }}>
              <RouterLink to="/register" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <StyledButton
                    variant="contained"
                    className="primary"
                  >
                    הרשמה
                  </StyledButton>
                </motion.div>
              </RouterLink>

              <RouterLink to="/login" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <StyledButton
                    variant="outlined"
                    className="secondary"
                  >
                    התחברות
                  </StyledButton>
                </motion.div>
              </RouterLink>
            </Box>
          </motion.div>
        </ContentWrapper>
      </HeroSection>

      <FeatureSection>
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <Typography
              variant="h3"
              component="h2"
              align="center"
              gutterBottom
              sx={{ mb: 6 }}
            >
              למה לבחור בנו?
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
                gap: 4,
              }}
            >
              {[
                {
                  title: 'התאמה מדויקת',
                  description: 'אלגוריתם חכם המתאים שידוכים על פי קריטריונים מדויקים',
                },
                {
                  title: 'ליווי אישי',
                  description: 'צוות מקצועי שמלווה אתכם לאורך כל הדרך',
                },
                {
                  title: 'פרטיות מלאה',
                  description: 'שמירה קפדנית על פרטיות המשתמשים',
                },
              ].map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h5" component="h3" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Container>
      </FeatureSection>
    </Box>
  );
};

export default HomePage;
