import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Rating,
  Chip,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { UserProfile, ReligiousStream } from '../../types/user';
import { useUserContext } from '../../context/UserContext';
import { useState } from 'react';

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
});

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const religiousStreamMatches: Record<ReligiousStream, ReligiousStream[]> = {
  'חרדי': ['חרדי', 'חרדי לאומי'],
  'דתי לאומי': ['דתי לאומי', 'חרדי לאומי'],
  'חרדי לאומי': ['חרדי לאומי', 'דתי לאומי', 'חרדי'],
  'מסורתי': ['מסורתי', 'דתי לאומי'],
};

const mockMatches: UserProfile[] = [
  {
    email: 'yael@example.com',
    personalDetails: {
      firstName: 'יעל',
      lastName: 'כהן',
      email: 'yael@example.com',
      phone: '050-1234567',
      gender: 'נקבה',
      dateOfBirth: '1998-05-15',
      height: 165,
      maritalStatus: 'רווקה',
      religiousStream: 'דתי לאומי',
      origin: 'מרוקאי',
      parentsCity: 'ירושלים',
      fatherOrigin: 'מרוקו',
      motherOrigin: 'מרוקו',
      occupation: 'מורה',
      numberOfSiblings: 4,
      numberOfMarriedSiblings: 2,
      hobbies: ['קריאה', 'בישול'],
      specialTalents: ['נגינה בפסנתר'],
    },
    education: {
      type: 'female',
      seminary: 'אולפנת צביה',
      degree: 'חינוך',
      currentStudy: 'תואר שני בחינוך מיוחד',
    },
    preferences: {
      minAge: 23,
      maxAge: 28,
      minHeight: 170,
      maxHeight: 190,
      religiousStreams: ['דתי לאומי'],
      origins: ['תימני', 'מרוקאי'],
      location: 'מרכז',
      maritalStatus: ['רווק'],
    },
  },
  {
    email: 'rachel@example.com',
    personalDetails: {
      firstName: 'רחל',
      lastName: 'לוי',
      email: 'rachel@example.com',
      phone: '050-7654321',
      gender: 'נקבה',
      dateOfBirth: '1997-08-20',
      height: 160,
      maritalStatus: 'רווקה',
      religiousStream: 'דתי לאומי',
      origin: 'תימני',
      parentsCity: 'פתח תקווה',
      fatherOrigin: 'תימן',
      motherOrigin: 'תימן',
      occupation: 'אחות',
      numberOfSiblings: 3,
      numberOfMarriedSiblings: 1,
      hobbies: ['ריצה', 'אפייה'],
      specialTalents: ['שירה'],
    },
    education: {
      type: 'female',
      seminary: 'אולפנת בני עקיבא',
      degree: 'סיעוד',
      currentStudy: 'התמחות בטיפול נמרץ',
    },
    preferences: {
      minAge: 24,
      maxAge: 30,
      minHeight: 165,
      maxHeight: 185,
      religiousStreams: ['דתי לאומי'],
      origins: ['תימני', 'ספרדי'],
      location: 'מרכז',
      maritalStatus: ['רווק'],
    },
  },
];

const Matches = () => {
  const { userProfile } = useUserContext();
  const [matches] = useState<UserProfile[]>(mockMatches);

  const calculateMatchScore = (profile: UserProfile): number => {
    if (!userProfile) return 0;

    let score = 0;
    const maxScore = 5;

    // בדיקת התאמה דתית
    const stream = userProfile.personalDetails.religiousStream;
    const matchStream = profile.personalDetails.religiousStream;
    if (religiousStreamMatches[stream]?.includes(matchStream)) {
      score += 1;
    }

    // בדיקת גיל
    const profileAge = new Date().getFullYear() - new Date(profile.personalDetails.dateOfBirth).getFullYear();
    if (userProfile.preferences && 
        profileAge >= userProfile.preferences.minAge &&
        profileAge <= userProfile.preferences.maxAge) {
      score += 1;
    }

    // בדיקת גובה
    if (userProfile.preferences &&
        profile.personalDetails.height >= userProfile.preferences.minHeight &&
        profile.personalDetails.height <= userProfile.preferences.maxHeight) {
      score += 1;
    }

    // בדיקת מוצא
    if (userProfile.preferences?.origins.includes(profile.personalDetails.origin)) {
      score += 1;
    }

    // בדיקת מיקום
    if (userProfile.preferences?.location === profile.preferences.location) {
      score += 1;
    }

    return (score / maxScore) * 5;
  };

  if (!userProfile) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h6" align="center">
          יש להתחבר כדי לראות התאמות
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        הצעות שידוך מותאמות
      </Typography>
      <Grid container spacing={3}>
        {matches.map((match, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: 'primary.main',
                      mr: 2,
                    }}
                  >
                    {match.personalDetails.firstName.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {match.personalDetails.firstName} {match.personalDetails.lastName}
                    </Typography>
                    <StyledRating
                      value={calculateMatchScore(match)}
                      precision={0.5}
                      icon={<FavoriteIcon fontSize="inherit" />}
                      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                      readOnly
                    />
                  </Box>
                </Box>

                <Typography variant="body1" paragraph>
                  גיל:{' '}
                  {new Date().getFullYear() -
                    new Date(match.personalDetails.dateOfBirth).getFullYear()}
                </Typography>
                <Typography variant="body1" paragraph>
                  גובה: {match.personalDetails.height} ס"מ
                </Typography>
                <Typography variant="body1" paragraph>
                  מקום מגורים: {match.personalDetails.parentsCity}
                </Typography>
                <Typography variant="body1" paragraph>
                  עיסוק: {match.personalDetails.occupation}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    תחומי עניין:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {match.personalDetails.hobbies.map((hobby, i) => (
                      <Chip key={i} label={hobby} size="small" />
                    ))}
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  צפייה בפרופיל המלא
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Matches;
