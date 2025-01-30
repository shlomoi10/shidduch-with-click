import { AppBar, Box, Button, Container, Toolbar, Typography, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textDecoration: 'none',
  flexGrow: 1,
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  fontSize: '1.5rem',
  lineHeight: 1.2,
  letterSpacing: '0.5px',
  textDecoration: 'none',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
}));

const Slogan = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
  fontStyle: 'italic',
  marginTop: '-2px',
}));

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo with Slogan */}
          <LogoContainer component={RouterLink} to="/">
            <LogoText variant="h6">
              שידוך עם קליק
            </LogoText>
            <Slogan variant="subtitle2">
              למצוא קליק בקליק
            </Slogan>
          </LogoContainer>

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              component={RouterLink}
              to="/about"
              color="primary"
              sx={{ fontWeight: 500 }}
            >
              אודות
            </Button>
            <Button
              component={RouterLink}
              to="/login"
              color="primary"
              sx={{ fontWeight: 500 }}
            >
              התחברות
            </Button>
            <Button
              component={RouterLink}
              to="/register"
              variant="contained"
              color="primary"
              sx={{
                fontWeight: 500,
                borderRadius: '20px',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: (theme) => theme.shadows[4],
                },
              }}
            >
              הרשמה
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
