import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  List,
  ListItem,
  ListItemText,
  Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { setMatches, setLoading, setError } from '../store/matchesSlice';
import { userAPI } from '../services/api';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const ProfileCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const MatchCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  cursor: 'pointer',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

interface Match {
  id: string;
  name: string;
  age: number;
  city: string;
  occupation: string;
  education: string;
  religiousLevel: string;
  interests: string[];
}

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const { matches, loading, error } = useSelector((state: RootState) => state.matches);

  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [messageDialogOpen, setMessageDialogOpen] = useState(false);

  useEffect(() => {
    if (!user.isAuthenticated) {
      navigate('/login');
      return;
    }

    const fetchMatches = async () => {
      try {
        dispatch(setLoading(true));
        const matchesData = await userAPI.getMatches();
        dispatch(setMatches(matchesData));
      } catch (err) {
        dispatch(setError('Failed to load matches'));
      }
    };

    fetchMatches();
  }, [dispatch, navigate, user.isAuthenticated]);

  const handleMatchClick = (match: Match) => {
    setSelectedMatch(match);
    setOpenDialog(true);
  };

  const handleSendInterest = async () => {
    if (selectedMatch) {
      try {
        await userAPI.sendInterest(selectedMatch.id);
        setOpenDialog(false);
        setMessageDialogOpen(true);
      } catch (err) {
        console.error('Failed to send interest:', err);
        // Here you would typically show an error message
      }
    }
  };

  if (loading) {
    return (
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
          <Typography>טוען...</Typography>
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
          <Typography color="error">{error}</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <ProfileCard>
              <CardContent>
                <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      mb: 2,
                      bgcolor: 'primary.main',
                      fontSize: '3rem'
                    }}
                  >
                    {user.firstName[0]}
                  </Avatar>
                  <Typography variant="h5" gutterBottom align="center">
                    {user.firstName} {user.lastName}
                  </Typography>
                </Box>
                <List>
                  <ListItem>
                    <ListItemText primary="גיל" secondary={user.age} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="עיר" secondary={user.city} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="עיסוק" secondary={user.occupation} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="השכלה" secondary={user.education} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="רמת דתיות" secondary={user.religiousLevel} />
                  </ListItem>
                </List>
              </CardContent>
            </ProfileCard>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
              התאמות מומלצות
            </Typography>
            {matches.map((match) => (
              <MatchCard key={match.id} onClick={() => handleMatchClick(match)}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Avatar sx={{ bgcolor: 'secondary.main' }}>
                        {match.name[0]}
                      </Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h6">{match.name}</Typography>
                      <Typography color="textSecondary">
                        {match.age} | {match.city} | {match.occupation}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {match.religiousLevel}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </MatchCard>
            ))}
          </Grid>
        </Grid>
      </StyledPaper>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          {selectedMatch?.name}
        </DialogTitle>
        <DialogContent>
          {selectedMatch && (
            <>
              <List>
                <ListItem>
                  <ListItemText primary="גיל" secondary={selectedMatch.age} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="עיר" secondary={selectedMatch.city} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="עיסוק" secondary={selectedMatch.occupation} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="השכלה" secondary={selectedMatch.education} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="רמת דתיות" secondary={selectedMatch.religiousLevel} />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="תחומי עניין" 
                    secondary={selectedMatch.interests.join(', ')} 
                  />
                </ListItem>
              </List>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>סגור</Button>
          <Button 
            onClick={handleSendInterest} 
            variant="contained" 
            color="primary"
          >
            {user.gender === 'male' ? 'תקליק' : 'תקליקי'}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog 
        open={messageDialogOpen} 
        onClose={() => setMessageDialogOpen(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>הודעה נשלחה</DialogTitle>
        <DialogContent>
          <Typography>
            כמו בכל דבר טוב, צריך סבלנות. נחכה לתשובה מהצד השני.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setMessageDialogOpen(false)}>סגור</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ProfilePage;
