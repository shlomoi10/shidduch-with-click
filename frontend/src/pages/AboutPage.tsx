import { Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const StorySection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 2,
  background: '#fff',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
}));

const AboutPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          הסיפור שלנו
        </Typography>

        <StorySection>
          <Typography variant="h5" gutterBottom color="primary">
            איך הכל התחיל
          </Typography>
          <Typography paragraph>
            שידוך עם קליק הוקם מתוך חזון לחבר בין מסורת לטכנולוגיה, ולהפוך את תהליך השידוך למותאם יותר לעידן המודרני תוך שמירה על ערכי המסורת.
          </Typography>
          <Typography paragraph>
            הרעיון נולד מתוך התבוננות במציאות המשתנה של עולם השידוכים המסורתי. ראינו כיצד צעירים רבים מתקשים למצוא את זיווגם בדרכים המסורתיות, בעוד שהטכנולוגיה המודרנית מציעה פתרונות חדשניים שעדיין לא הגיעו לעולם השידוכים.
          </Typography>
        </StorySection>

        <StorySection>
          <Typography variant="h5" gutterBottom color="primary">
            האתגרים בדרך
          </Typography>
          <Typography paragraph>
            בתחילת הדרך, נתקלנו באתגרים רבים. היה עלינו לגשר בין העולם המסורתי לבין הטכנולוגיה המודרנית, תוך שמירה על כבוד המסורת והערכים היהודיים. חששנו שהקהילה לא תקבל בברכה את השילוב הזה.
          </Typography>
          <Typography paragraph>
            אבל לשמחתנו, גילינו שיש צימאון אמיתי לפתרון שיחבר בין העולמות. ראינו כיצד רבנים ומנהיגי קהילה מבינים את הצורך בהתאמת תהליך השידוכים לעידן המודרני, תוך שמירה על הערכים המסורתיים.
          </Typography>
        </StorySection>

        <StorySection>
          <Typography variant="h5" gutterBottom color="primary">
            החזון שלנו
          </Typography>
          <Typography paragraph>
            אנחנו מאמינים שתהליך מציאת הזיווג צריך להיות נגיש, יעיל ומכבד. החזון שלנו הוא ליצור פלטפורמה שתשלב את היתרונות של הטכנולוגיה המודרנית עם החכמה והמסורת של עולם השידוכים היהודי.
          </Typography>
          <Typography paragraph>
            אנחנו שואפים ליצור קהילה תומכת ומכבדת, שבה כל אחד יכול למצוא את הזיווג המתאים לו בדרך המשלבת חדשנות עם מסורת.
          </Typography>
        </StorySection>

        <StorySection>
          <Typography variant="h5" gutterBottom color="primary">
            ההישגים שלנו
          </Typography>
          <Typography paragraph>
            מאז הקמת האתר, זכינו לראות מאות זוגות מוצאים את דרכם זה לזו דרך הפלטפורמה שלנו. כל סיפור הצלחה מחזק את האמונה שלנו בדרך ובחזון.
          </Typography>
          <Typography paragraph>
            אנחנו גאים במיוחד בכך שהצלחנו ליצור מערכת שמשרתת את כל גווני החברה היהודית, תוך שמירה על הערכים והמסורת של כל קהילה וקהילה.
          </Typography>
        </StorySection>

        <StorySection>
          <Typography variant="h5" gutterBottom color="primary">
            העתיד
          </Typography>
          <Typography paragraph>
            אנחנו ממשיכים לפתח ולשפר את הפלטפורמה שלנו, תוך הקשבה מתמדת לצרכי המשתמשים שלנו ולהנחיות הרבנים המלווים אותנו.
          </Typography>
          <Typography paragraph>
            החזון שלנו הוא להפוך את שידוך עם קליק לפלטפורמה המובילה בעולם השידוכים היהודי, תוך שמירה על הערכים והמסורת שעליהם גדלנו.
          </Typography>
        </StorySection>
      </motion.div>
    </Container>
  );
};

export default AboutPage;
