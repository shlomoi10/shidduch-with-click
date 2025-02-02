import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { useUserContext } from '../../context/UserContext';

const PersonalDetails = () => {
  const { userProfile } = useUserContext();
  const { personalDetails } = userProfile || {};

  if (!personalDetails) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography>לא נמצאו פרטים אישיים</Typography>
      </Box>
    );
  }

  const details = [
    { label: 'שם מלא', value: `${personalDetails.firstName} ${personalDetails.lastName}` },
    { label: 'גיל', value: new Date().getFullYear() - new Date(personalDetails.dateOfBirth).getFullYear() },
    { label: 'גובה', value: `${personalDetails.height} ס"מ` },
    { label: 'מצב משפחתי', value: personalDetails.maritalStatus },
    { label: 'זרם דתי', value: personalDetails.religiousStream },
    { label: 'מוצא', value: personalDetails.origin },
    { label: 'עיר מגורי ההורים', value: personalDetails.parentsCity },
    { label: 'מוצא האב', value: personalDetails.fatherOrigin },
    { label: 'מוצא האם', value: personalDetails.motherOrigin },
    { label: 'עיסוק', value: personalDetails.occupation },
    { label: 'מספר אחים ואחיות', value: personalDetails.numberOfSiblings },
    { label: 'מספר אחים ואחיות נשואים', value: personalDetails.numberOfMarriedSiblings },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom align="center">
          פרטים אישיים
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <List>
              {details.map((detail, index) => (
                <React.Fragment key={detail.label}>
                  <ListItem>
                    <ListItemText
                      primary={detail.label}
                      secondary={detail.value}
                      sx={{
                        textAlign: 'right',
                        '& .MuiListItemText-primary': {
                          fontWeight: 'bold',
                          color: 'primary.main',
                        },
                      }}
                    />
                  </ListItem>
                  {index < details.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default PersonalDetails;
