import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useUserContext } from '../context/UserContext';

const logoSlide = keyframes`
  0% {
    transform: translateX(20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const buttonFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledAppBar = styled(AppBar)(() => ({
  background: 'linear-gradient(45deg, #6B8E23 30%, #556B2F 90%)',
  boxShadow: '0 3px 5px 2px rgba(105, 139, 35, .3)',
}));

const LogoText = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  animation: `${logoSlide} 0.8s ease-out`,
  '& img': {
    height: '40px',
    marginRight: theme.spacing(1),
  },
  color: '#fff',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  margin: theme.spacing(0, 1),
  animation: `${buttonFade} 0.8s ease-out`,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { userProfile } = useUserContext();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <StyledAppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <LogoText>
                <img src="/logo.png" alt="Shidduch With Click" />
                שידוך בקליק
              </LogoText>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <NavButton>
                אודות
              </NavButton>
            </Link>
            {userProfile ? (
              <Link to="/profile" style={{ textDecoration: 'none' }}>
                <NavButton>
                  אזור אישי
                </NavButton>
              </Link>
            ) : (
              <>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <NavButton>
                    התחברות
                  </NavButton>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                  <NavButton
                    variant="outlined"
                    sx={{ borderColor: '#fff' }}
                  >
                    הרשמה
                  </NavButton>
                </Link>
              </>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
