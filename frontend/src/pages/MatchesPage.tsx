import { useEffect, useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  CircularProgress,
  Avatar,
  Chip
} from '@mui/material';
import { Match } from '../types';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';

const MatchesPage = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // כאן נוסיף אנימציה של חיפוש לפני טעינת ההתאמות
    const loadingTimeout = setTimeout(() => {
      // בינתיים נשתמש בנתוני דמה
      const dummyMatches: Match[] = [
        {
          id: 1,
          name: 'ישראל כהן',
          age: 23,
          city: 'ירושלים',
          sector: 'ליטאי',
          education: 'ישיבת פוניבז׳'
        },
        {
          id: 2,
          name: 'משה לוי',
          age: 24,
          city: 'בני ברק',
          sector: 'ספרדי',
          education: 'ישיבת חברון'
        },
        {
          id: 3,
          name: 'יעקב פרידמן',
          age: 22,
          city: 'מודיעין עילית',
          sector: 'חסידי',
          education: 'ישיבת בעלז'
        }
      ];
      setMatches(dummyMatches);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  if (loading) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center',
          minHeight: '60vh'
        }}
      >
        <CircularProgress size={60} sx={{ mb: 3 }} />
        <Typography variant="h5">
          מחפשים את ההתאמות המושלמות עבורך...
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
        ההתאמות שנמצאו עבורך
      </Typography>

      <Grid container spacing={4}>
        {matches.map((match) => (
          <Grid item xs={12} md={4} key={match.id}>
            <Card 
              sx={{ 
                height: '100%',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6
                }
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar 
                    sx={{ 
                      width: 80, 
                      height: 80,
                      bgcolor: 'primary.main',
                      fontSize: '2rem'
                    }}
                  >
                    {match.name.charAt(0)}
                  </Avatar>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="h6">{match.name}</Typography>
                    <Typography color="textSecondary">גיל: {match.age}</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography>{match.city}</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <GroupIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography>{match.sector}</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SchoolIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography>{match.education}</Typography>
                </Box>

                <Chip 
                  label="התאמה גבוהה" 
                  color="success" 
                  sx={{ borderRadius: 2 }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MatchesPage;
