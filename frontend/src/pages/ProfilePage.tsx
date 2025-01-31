import { Container, Typography, Paper, Grid, Box, Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  age: string;
  city: string;
  occupation: string;
  education: string;
  religiousLevel: string;
  gender: 'male' | 'female';
}

export const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.user.user) as UserProfile | null;

  if (!user) {
    return (
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h5" align="center">
          אנא התחבר כדי לצפות בפרופיל
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{
                width: 200,
                height: 200,
                margin: '0 auto',
                bgcolor: 'primary.main',
                fontSize: '4rem'
              }}
            >
              {user.firstName[0]}
            </Avatar>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {user.firstName} {user.lastName}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" paragraph>
                <strong>גיל:</strong> {user.age}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>עיר:</strong> {user.city}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>עיסוק:</strong> {user.occupation}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>השכלה:</strong> {user.education}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>רמת דתיות:</strong> {user.religiousLevel}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
