import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  CircularProgress,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useUserContext } from '../../context/UserContext';

const RegistrationComplete = () => {
  const navigate = useNavigate();
  const { userProfile } = useUserContext();

  useEffect(() => {
    // בדיקה שכל הנתונים קיימים
    if (!userProfile?.email || !userProfile?.personalDetails || !userProfile?.education) {
      navigate('/register');
      return;
    }

    // אחרי 6 שניות, מעבר לדף הפרופיל
    const timer = setTimeout(() => {
      navigate('/profile');
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate, userProfile]);

  if (!userProfile?.email || !userProfile?.personalDetails || !userProfile?.education) {
    return null;
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 600,
              textAlign: 'center',
              mb: 2,
            }}
          >
            שידוך עם קליק
          </Typography>

          <Typography
            variant="h5"
            color="textSecondary"
            sx={{ textAlign: 'center', mb: 4 }}
          >
            {`ברוך הבא ${userProfile.personalDetails.firstName}! אנחנו מכינים לך את החשבון`}
          </Typography>

          <CircularProgress
            size={60}
            thickness={4}
            sx={{ mb: 4 }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 0.5 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                textAlign: 'center',
                color: 'success.main',
              }}
            >
              מזל טוב!
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ textAlign: 'center', mt: 1 }}
            >
              מעבירים אותך לחשבון שלך...
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default RegistrationComplete;
