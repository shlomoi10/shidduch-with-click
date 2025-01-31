import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ direction: 'rtl' }}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component={RouterLink} 
          to="/"
          sx={{ 
            textDecoration: 'none',
            color: 'inherit',
            flexGrow: 1,
          }}
        >
          שידוך בקליק
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            component={RouterLink} 
            to="/about"
            color="inherit"
          >
            אודות
          </Button>
          <Button 
            component={RouterLink} 
            to="/register"
            color="inherit"
          >
            הרשמה
          </Button>
          <Button 
            component={RouterLink} 
            to="/login"
            color="inherit"
          >
            התחברות
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
