import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  Link,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import { styled } from '@mui/material/styles';

interface Props {
  children: ReactNode;
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: theme.shadows[4],
  transition: 'all 0.3s ease',
}));

const Logo = styled('img')({
  height: 40,
  marginRight: 8,
});

function HideOnScroll(props: { children: ReactNode }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <div>{props.children}</div>
    </Slide>
  );
}

const Layout = ({ children }: Props) => {
  return (
    <Box>
      <HideOnScroll>
        <StyledAppBar position="fixed">
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
              <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <Logo src="logo-new.svg" alt="שידוך עם קליק" />
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    textDecoration: 'none',
                    marginRight: 2,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                  }}
                >
                  שידוך עם קליק
                </Typography>
              </RouterLink>

              <Box sx={{ flexGrow: 1 }} />

              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: { xs: 1, md: 2 },
                '& .MuiButton-root': {
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  transition: 'all 0.2s ease-in-out',
                  minWidth: { xs: 'auto', md: '100px' },
                  padding: { xs: '6px 12px', md: '8px 16px' },
                }
              }}>
                <Button
                  component={RouterLink}
                  to="/about"
                  sx={{
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  אודות
                </Button>
                <Button
                  component={RouterLink}
                  to="/login"
                  sx={{
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  התחברות
                </Button>
                <Button
                  component={RouterLink}
                  to="/register"
                  variant="contained"
                  color="secondary"
                  sx={{
                    borderRadius: '20px',
                    padding: { xs: '6px 16px', md: '8px 24px' },
                    fontWeight: 'bold',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  הרשמה
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </StyledAppBar>
      </HideOnScroll>
      <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }} /> {/* Spacer */}
      
      <Box component="main">
        {children}
      </Box>

      <Box
        component="footer"
        sx={{
          py: 4,
          bgcolor: 'background.paper',
          borderTop: '1px solid',
          borderColor: 'divider',
          mt: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright '}
            <Link color="inherit" component={RouterLink} to="/">
              שידוך עם קליק
            </Link>{' '}
            {new Date().getFullYear()}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
