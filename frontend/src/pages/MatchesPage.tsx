import { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Chip,
  Avatar,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';

interface Match {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  location: string;
  occupation: string;
  education: string;
  sector: string;
  imageUrl?: string;
}

const matches: Match[] = [
  {
    id: '1',
    firstName: 'שרה',
    lastName: 'כהן',
    age: '23',
    location: 'ירושלים',
    occupation: 'מורה',
    education: 'תואר ראשון בחינוך',
    sector: 'דתי לאומי',
    imageUrl: 'https://example.com/sarah.jpg'
  },
  {
    id: '2',
    firstName: 'רחל',
    lastName: 'לוי',
    age: '25',
    location: 'תל אביב',
    occupation: 'עורכת דין',
    education: 'תואר שני במשפטים',
    sector: 'חרדי',
    imageUrl: 'https://example.com/rachel.jpg'
  },
  {
    id: '3',
    firstName: 'לאה',
    lastName: 'פרידמן',
    age: '22',
    location: 'בני ברק',
    occupation: 'גרפיקאית',
    education: 'תעודה מקצועית',
    sector: 'חרדי',
    imageUrl: 'https://example.com/leah.jpg'
  }
];

export const MatchesPage = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleExpandClick = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        התאמות מוצעות
      </Typography>

      <Grid container spacing={4}>
        {matches.map((match) => (
          <Grid item xs={12} sm={6} md={4} key={match.id}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.2s ease-in-out',
                }
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
                      {`${match.firstName} ${match.lastName}`}
                    </Typography>
                    <Typography color="text.secondary">
                      גיל: {match.age}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body2">{match.location}</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <SchoolIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body2">{match.education}</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <GroupIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body2">{match.sector}</Typography>
                </Box>

                <Chip 
                  label={match.occupation}
                  color="primary"
                  variant="outlined"
                  size="small"
                />
              </CardContent>

              <CardActions>
                <Button 
                  size="small" 
                  color="primary"
                  onClick={() => handleExpandClick(match.id)}
                  sx={{ mr: 'auto' }}
                >
                  {expandedId === match.id ? 'פחות פרטים' : 'עוד פרטים'}
                </Button>
                <Button size="small" color="primary">
                  יצירת קשר
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
