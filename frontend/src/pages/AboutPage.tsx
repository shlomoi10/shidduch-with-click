import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[3],
}));

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <StyledPaper>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            אודות שידוך בקליק
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            למצוא קליק בקליק
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              החזון שלנו
            </Typography>
            <Typography paragraph>
              שידוך בקליק הוקם מתוך חזון לחבר בין מסורת לטכנולוגיה, ולהפוך את תהליך השידוך למותאם יותר לעידן המודרני תוך שמירה על ערכי המסורת.
            </Typography>
            <Typography paragraph>
              אנו מאמינים שבעזרת כלים טכנולוגיים מתקדמים, נוכל לסייע לרבים למצוא את זיווגם בדרך יעילה, מכבדת ומותאמת אישית.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              הערכים שלנו
            </Typography>
            <Typography component="div">
              <ul>
                <li>
                  <Typography paragraph>
                    <strong>צניעות ומסורת:</strong> שמירה על ערכי המסורת היהודית תוך התאמה לעידן המודרני
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                    <strong>פרטיות ואבטחה:</strong> הגנה מלאה על פרטיות המשתמשים ואבטחת המידע
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                    <strong>התאמה אישית:</strong> מערכת חכמה המותאמת לצרכים האישיים של כל משתמש
                  </Typography>
                </li>
              </ul>
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              איך זה עובד?
            </Typography>
            <Typography paragraph>
              הפלטפורמה שלנו משלבת טכנולוגיה מתקדמת עם גישה אישית ומסורתית. המשתמשים יוצרים פרופיל אישי, מציינים את העדפותיהם ומקבלים הצעות שידוך מותאמות אישית.
            </Typography>
            <Typography>
              כל התהליך מלווה בדיסקרטיות מלאה ובהתאם לערכי ההלכה והמסורת, תוך שימת דגש על כבוד הדדי ורצינות בתהליך השידוך.
            </Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Container>
  );
};

export default AboutPage;
