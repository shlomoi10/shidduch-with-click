import { Box, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PersonalDetails as PersonalDetailsType } from '../../../types/user';
import { useUserContext } from '../../../context/UserContext';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
}));

const DetailItem = ({ label, value }: { label: string; value: string | number }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
      {label}
    </Typography>
    <Typography variant="body1">{value}</Typography>
  </Box>
);

const PersonalDetails = () => {
  const { userProfile } = useUserContext();

  if (!userProfile) {
    return (
      <Typography variant="h6" align="center">
        לא נמצאו פרטים אישיים
      </Typography>
    );
  }

  const { personalDetails } = userProfile;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" gutterBottom align="center">
        פרטים אישיים
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <StyledPaper>
            <DetailItem label="שם פרטי" value={personalDetails.firstName} />
            <DetailItem label="שם משפחה" value={personalDetails.lastName} />
            <DetailItem label="אימייל" value={personalDetails.email} />
            <DetailItem label="טלפון" value={personalDetails.phone} />
            <DetailItem label="גיל" value={new Date().getFullYear() - new Date(personalDetails.dateOfBirth).getFullYear()} />
            <DetailItem label="גובה" value={`${personalDetails.height} ס"מ`} />
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledPaper>
            <DetailItem label="מצב משפחתי" value={personalDetails.maritalStatus} />
            <DetailItem label="זרם דתי" value={personalDetails.religiousStream} />
            <DetailItem label="מוצא" value={personalDetails.origin} />
            <DetailItem label="עיר מגורי ההורים" value={personalDetails.parentsCity} />
            <DetailItem label="מספר אחים ואחיות" value={personalDetails.numberOfSiblings} />
            <DetailItem label="מספר אחים ואחיות נשואים" value={personalDetails.numberOfMarriedSiblings} />
          </StyledPaper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalDetails;
