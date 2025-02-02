import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { useUserContext } from '../../context/UserContext';
import { UserProfile } from '../../types/user';

interface MatchProfile extends UserProfile {
  id: string;
  matchPercentage: number;
}

const Matches = () => {
  const { userProfile } = useUserContext();

  // משתמשי דוגמה להצגת התאמות
  const demoMatches: MatchProfile[] = [
    {
      id: '1',
      email: 'rachel@example.com',
      personalDetails: {
        firstName: 'רחל',
        lastName: 'כהן',
        email: 'rachel@example.com',
        phone: '050-1234567',
        gender: 'נקבה',
        dateOfBirth: new Date(1995, 5, 15),
        height: 165,
        maritalStatus: 'רווקה',
        religiousStream: 'חרדי',
        origin: 'ירושלים',
        parentsCity: 'ירושלים',
        fatherOrigin: 'מרוקו',
        motherOrigin: 'תימן',
        occupation: 'מורה',
        numberOfSiblings: 5,
        numberOfMarriedSiblings: 3,
        hobbies: ['קריאה', 'אפייה'],
        specialTalents: ['נגינה בפסנתר'],
      },
      education: {
        type: 'female',
        seminary: 'בית יעקב',
        degree: 'תואר בחינוך',
        currentStudy: 'הוראה',
      },
      preferences: {
        minAge: 23,
        maxAge: 28,
        minHeight: 170,
        maxHeight: 190,
        maritalStatus: ['רווק'],
        religiousStreams: ['חרדי'],
        origins: ['ירושלים', 'בני ברק'],
        location: 'ירושלים',
      },
      settings: {
        notifications: true,
        privacy: true,
        updates: true,
      },
      matchPercentage: 95,
    },
    {
      id: '2',
      email: 'sarah@example.com',
      personalDetails: {
        firstName: 'שרה',
        lastName: 'לוי',
        email: 'sarah@example.com',
        phone: '050-7654321',
        gender: 'נקבה',
        dateOfBirth: new Date(1997, 8, 20),
        height: 160,
        maritalStatus: 'רווקה',
        religiousStream: 'חרדי',
        origin: 'בני ברק',
        parentsCity: 'בני ברק',
        fatherOrigin: 'פולין',
        motherOrigin: 'רומניה',
        occupation: 'גננת',
        numberOfSiblings: 7,
        numberOfMarriedSiblings: 4,
        hobbies: ['ציור', 'מוזיקה'],
        specialTalents: ['ציור'],
      },
      education: {
        type: 'female',
        seminary: 'גייטסהד',
        degree: 'תעודת הוראה',
        currentStudy: 'חינוך מיוחד',
      },
      preferences: {
        minAge: 24,
        maxAge: 30,
        minHeight: 165,
        maxHeight: 185,
        maritalStatus: ['רווק'],
        religiousStreams: ['חרדי', 'ליטאי'],
        origins: ['בני ברק', 'ירושלים'],
        location: 'בני ברק',
      },
      settings: {
        notifications: true,
        privacy: true,
        updates: false,
      },
      matchPercentage: 88,
    },
  ];

  if (!userProfile) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography>יש להתחבר כדי לצפות בהתאמות</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom align="center">
          התאמות מומלצות
        </Typography>
        <Grid container spacing={3}>
          {demoMatches.map((match) => (
            <Grid item xs={12} md={6} key={match.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    zIndex: 1,
                    bgcolor: 'primary.main',
                    color: 'white',
                    borderRadius: '20px',
                    px: 2,
                    py: 0.5,
                  }}
                >
                  <Typography variant="body2">
                    {match.matchPercentage}% התאמה
                  </Typography>
                </Box>
                <CardMedia
                  component="div"
                  sx={{
                    pt: '56.25%',
                    position: 'relative',
                    bgcolor: 'grey.200',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {match.personalDetails.firstName} {match.personalDetails.lastName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    גיל:{' '}
                    {new Date().getFullYear() -
                      (typeof match.personalDetails.dateOfBirth === 'string'
                        ? new Date(match.personalDetails.dateOfBirth).getFullYear()
                        : match.personalDetails.dateOfBirth.getFullYear())}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Chip
                      label={match.personalDetails.religiousStream}
                      size="small"
                    />
                    <Chip label={match.personalDetails.origin} size="small" />
                    <Chip
                      label={`${match.personalDetails.height} ס"מ`}
                      size="small"
                    />
                  </Stack>
                  <Typography variant="body2" paragraph>
                    {match.education?.type === 'female'
                      ? match.education.seminary
                      : match.education?.yeshiva}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {match.personalDetails.occupation}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Button variant="contained" fullWidth>
                      צפייה בפרופיל
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Matches;
