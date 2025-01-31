import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Avatar,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';

interface Match {
  id: string;
  name: string;
  age: number;
  location: string;
  matchPercentage: number;
  interests: string[];
  imageUrl?: string;
}

const DashboardPage = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('/api/matches');
        setMatches(response.data);
      } catch (error) {
        console.error('Failed to fetch matches:', error);
        
        // במצב פיתוח - נשתמש בנתונים לדוגמה
        if (process.env.NODE_ENV === 'development') {
          console.log('Development mode - using mock data');
          setMatches([
            {
              id: '1',
              name: 'שרה כהן',
              age: 23,
              location: 'ירושלים',
              matchPercentage: 95,
              interests: ['לימוד תורה', 'חסד', 'מוזיקה'],
            },
            {
              id: '2',
              name: 'רחל לוי',
              age: 22,
              location: 'בני ברק',
              matchPercentage: 88,
              interests: ['הוראה', 'אפיה', 'אומנות'],
            },
            {
              id: '3',
              name: 'לאה גולדברג',
              age: 24,
              location: 'פתח תקווה',
              matchPercentage: 82,
              interests: ['חינוך', 'ספרות', 'טיולים'],
            },
          ]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
          ההתאמות שלך
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
          כאן תוכל/י לראות את ההתאמות המומלצות עבורך
        </Typography>

        <Grid container spacing={3}>
          {matches.map((match) => (
            <Grid item xs={12} sm={6} md={4} key={match.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: (theme) => theme.shadows[4],
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      src={match.imageUrl}
                      sx={{ width: 60, height: 60, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="h6" component="div">
                        {match.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {match.age} | {match.location}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      התאמה:
                    </Typography>
                    <Typography 
                      variant="h5" 
                      color="primary"
                      sx={{ fontWeight: 'bold' }}
                    >
                      {match.matchPercentage}%
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      תחומי עניין:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {match.interests.map((interest, index) => (
                        <Chip
                          key={index}
                          label={interest}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </Box>
                </CardContent>

                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button 
                    variant="contained" 
                    fullWidth
                    sx={{ 
                      borderRadius: '20px',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: (theme) => theme.shadows[4],
                      },
                    }}
                  >
                    צפה בפרופיל
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default DashboardPage;
