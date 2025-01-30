import { Container, Typography, Paper, Box, Divider } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, mt: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" color="primary" sx={{ mb: 3 }}>
          הסיפור שלנו
        </Typography>
        
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom color="primary.dark">
            ימי הקורונה - תחילתו של רעיון
          </Typography>
          <Typography variant="body1" paragraph>
            הכל התחיל בשנת תש"פ, בתקופת הקורונה, כאשר קבוצת אברכים מבני ברק זיהתה את הקושי ההולך וגובר במציאת שידוכים מתאימים. 
            בתקופה זו, כאשר המפגשים הפיזיים היו מוגבלים והשדכנים המסורתיים התקשו לפעול כרגיל, עלה הצורך במציאת פתרון חדשני שישמור על כל כללי ההלכה והצניעות.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary.dark">
            התייעצות עם גדולי ישראל
          </Typography>
          <Typography variant="body1" paragraph>
            רב חשוב מבני ברק, יחד עם קבוצת תלמידי חכמים ואנשי מקצוע מהקהילה, החלו לגבש את הרעיון של מערכת שידוכים דיגיטלית.
            במשך חודשים ארוכים, הם ישבו עם גדולי הרבנים והפוסקים, כדי להבטיח שכל פרט במערכת יתאים לרוח ההלכה ולמסורת ישראל סבא.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary.dark">
            דיון סוער בעולם התורני
          </Typography>
          <Typography variant="body1" paragraph>
            כצפוי, הרעיון של שימוש בטכנולוגיה מתקדמת לצורך שידוכים עורר דיון נוקב בעולם התורני. היו שחששו מפני "פריצת גדר" 
            והתנגדו לשימוש באמצעים דיגיטליים בתחום כה רגיש. מנגד, רבנים אחרים ראו בכך "עת לעשות לה'" וטענו שדווקא השימוש 
            בטכנולוגיה באופן מבוקר ומפוקח יכול למנוע פניה לאפיקים בעייתיים יותר.
          </Typography>

          <Typography variant="body1" paragraph>
            הויכוח התמקד בשאלות הלכתיות מורכבות: האם מותר להשתמש במערכת ממוחשבת להצעת שידוכים? האם יש בכך משום "אין מזווגין לו לאדם אשה אלא לפי מעשיו"? 
            מה דינם של המאגרי מידע והשמירה על צנעת הפרט? שאלות אלו ועוד רבות הובאו לפתחם של גדולי הפוסקים.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary.dark">
            פסק ההלכה המכריע
          </Typography>
          <Typography variant="body1" paragraph>
            נקודת המפנה הגיעה כאשר גדולי הדור, לאחר עיון מעמיק בכל הפרטים, העניקו את ברכתם למיזם, בכפוף להנחיות מחמירות: 
            שמירה קפדנית על צניעות המידע, פיקוח רבני צמוד, והקפדה על כך שהמערכת תשמש ככלי עזר בלבד ולא כתחליף לשיקול דעת אנושי ולהשגחה פרטית.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary.dark">
            פיתוח בקדושה ובטהרה
          </Typography>
          <Typography variant="body1" paragraph>
            צוות של מתכנתים חרדים, בוגרי מסלולי התכנות המובילים בציבור החרדי, עמל על פיתוח מערכת חכמה שתדע להתאים בין המועמדים על פי קריטריונים מדויקים.
            כל שלב בפיתוח לווה בהתייעצות עם רבנים ופוסקי הלכה, כדי להבטיח שהמערכת תפעל בהתאם להלכה ולרוח התורה.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary.dark">
            תוצאות מבורכות
          </Typography>
          <Typography variant="body1" paragraph>
            המערכת עברה מספר שלבי פיילוט בקהילות שונות, כאשר בכל שלב נאספו תובנות וחוות דעת מרבנים, שדכנים מקצועיים ומשתמשים.
            התוצאות היו מדהימות - תוך זמן קצר, התחילו להגיע בשורות משמחות על שידוכים שהתגבשו דרך המערכת.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary.dark">
            מהפכה של קדושה
          </Typography>
          <Typography variant="body1" paragraph>
            היום, ברוך השם, המערכת כבר הביאה למאות שידוכים מוצלחים בקהילות שונות ברחבי הארץ. גם הספקנים הגדולים ביותר נאלצו להודות 
            שהשילוב של טכנולוגיה מתקדמת עם שמירה על ערכי התורה והמסורת הוכיח את עצמו כדרך יעילה ומכובדת למציאת שידוך. רבנים רבים, 
            כולל כאלו שהיו בתחילה מסויגים מהרעיון, כבר המליצו על השימוש במערכת, בראותם את התוצאות המבורכות.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="body1" sx={{ fontStyle: 'italic', textAlign: 'center' }}>
            אנו מזמינים אתכם להצטרף למשפחת "שידוך עם קליק" ולהיות חלק מהצלחת המערכת. בעזרת ה', גם אתם תזכו למצוא את זיווגכם בקלות ובמהירות,
            מתוך שמחה והרחבת הדעת, ולהקים בית נאמן בישראל.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default AboutPage;
