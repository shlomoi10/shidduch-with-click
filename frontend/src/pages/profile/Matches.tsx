import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Rating,
  Chip,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { UserProfile } from '../../types/user';
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

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  direction: 'rtl',
  textAlign: 'right',
});

const StyledChip = styled(Chip)({
  margin: '4px',
  direction: 'rtl',
});

// מוק דאטה להדגמה
const mockMatches: UserProfile[] = [
  {
    email: 'user1@example.com',
    personalDetails: {
      firstName: 'ישראל',
      lastName: 'כהן',
      email: 'user1@example.com',
      phone: '050-1234567',
      gender: 'זכר',
      dateOfBirth: new Date('1995-01-01'),
      height: 175,
      maritalStatus: 'רווק',
      religiousStream: 'חרדי',
      origin: 'ירושלים',
      parentsCity: 'ירושלים',
      fatherOrigin: 'ירושלים',
      motherOrigin: 'ירושלים',
      occupation: 'אברך',
      numberOfSiblings: 5,
      numberOfMarriedSiblings: 3,
      hobbies: ['לימוד תורה', 'מוזיקה'],
      specialTalents: ['זיכרון טוב'],
    },
    education: {
      type: 'male',
      yeshiva: 'פוניבז׳',
      kollel: 'חזון איש',
      currentStudy: 'גמרא',
    },
    preferences: {
      minAge: 20,
      maxAge: 25,
      minHeight: 160,
      maxHeight: 175,
      religiousStreams: ['חרדי'],
      origins: ['ירושלים'],
      location: 'ירושלים',
      maritalStatus: ['רווקה'],
    },
    settings: {
      notifications: true,
      privacy: true,
      updates: true,
    },
  },
  // ניתן להוסיף עוד פרופילים להדגמה
];

const Matches = () => {
  const { userProfile } = useUserContext();
  const [showMore, setShowMore] = useState(false);

  const calculateMatchScore = (match: UserProfile): number => {
    if (!userProfile || !match) return 0;

    let score = 0;
    const preferences = userProfile.preferences;
    const matchDetails = match.personalDetails;

    // גיל
    const matchAge = new Date().getFullYear() - new Date(matchDetails.dateOfBirth).getFullYear();
    if (matchAge >= preferences.minAge && matchAge <= preferences.maxAge) {
      score += 2;
    }

    // גובה
    if (matchDetails.height >= preferences.minHeight && matchDetails.height <= preferences.maxHeight) {
      score += 1;
    }

    // זרם דתי
    if (preferences.religiousStreams.includes(matchDetails.religiousStream)) {
      score += 2;
    }

    return Math.min(5, score);
  };

  return (
    <Box sx={{ flexGrow: 1, direction: 'rtl' }}>
      <Typography variant="h5" gutterBottom align="right">
        הצעות שידוך
      </Typography>
      <Grid container spacing={3}>
        {mockMatches.slice(0, showMore ? undefined : 6).map((match, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <StyledCardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    src={`https://i.pravatar.cc/150?img=${index + 1}`}
                    sx={{ width: 56, height: 56, ml: 2 }}
                  />
                  <Box>
                    <Typography variant="h6">
                      {match.personalDetails.firstName} {match.personalDetails.lastName}
                    </Typography>
                    <StyledRating
                      value={calculateMatchScore(match)}
                      readOnly
                      icon={<FavoriteIcon fontSize="inherit" />}
                      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />
                  </Box>
                </Box>
                <Typography color="text.secondary" gutterBottom>
                  גיל:{' '}
                  {new Date().getFullYear() -
                    new Date(match.personalDetails.dateOfBirth).getFullYear()}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  גובה: {match.personalDetails.height} ס"מ
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <StyledChip label={match.personalDetails.religiousStream} />
                  <StyledChip label={match.personalDetails.maritalStatus} />
                  {match.personalDetails.origin && (
                    <StyledChip label={match.personalDetails.origin} />
                  )}
                </Box>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  צפה בפרופיל מלא
                </Button>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      {mockMatches.length > 6 && (
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'הצג פחות' : 'חפש עוד התאמות'}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Matches;
