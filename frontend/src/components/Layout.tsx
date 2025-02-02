import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoginIcon from '@mui/icons-material/Login';
import { useUserContext } from '../context/UserContext';

interface Props {
  children: React.ReactNode;
}

interface MenuItemType {
  text: string;
  path: string;
  icon: JSX.Element;
  requiresAuth?: boolean;
}

const drawerWidth = 240;

const Layout = ({ children }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { userProfile } = useUserContext();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const menuItems: MenuItemType[] = [
    { text: 'דף הבית', path: '/', icon: <HomeIcon /> },
    { text: 'אודות', path: '/about', icon: <InfoIcon /> },
    ...(userProfile
      ? [
          { text: 'פרופיל', path: '/profile', icon: <PersonIcon /> },
          { text: 'התאמות', path: '/matches', icon: <FavoriteIcon /> },
        ]
      : [{ text: 'התחברות', path: '/login', icon: <LoginIcon /> }]),
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        שידוך בקליק
      </Typography>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={RouterLink}
            to={item.path}
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: trigger ? 'background.default' : 'transparent',
          boxShadow: trigger ? 1 : 'none',
          transition: 'all 0.3s',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            שידוך בקליק
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {menuItems.map((item) => (
              <RouterLink
                key={item.text}
                to={item.path}
                style={{ textDecoration: 'none', color: 'inherit', marginLeft: '1rem' }}
              >
                {item.text}
              </RouterLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: { xs: 7, sm: 8 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
