import { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Tabs,
  Tab,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonalDetails from './components/PersonalDetails';
import Matches from './Matches';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.default,
    borderLeft: `1px solid ${theme.palette.divider}`,
    borderRight: 'none',
  },
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

const UserProfile = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const menuItems = [
    { text: 'פרטים אישיים', icon: <PersonIcon />, component: <PersonalDetails /> },
    { text: 'ההתאמות שלי', icon: <FavoriteIcon />, component: <Matches /> },
  ];

  const drawer = (
    <div>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={item.text}
            selected={selectedTab === index}
            onClick={() => setSelectedTab(index)}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                '& .MuiListItemIcon-root': {
                  color: 'primary.contrastText',
                },
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Main open={!isMobile}>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          {isMobile && (
            <Paper sx={{ mb: 2 }}>
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                variant="fullWidth"
                sx={{ borderBottom: 1, borderColor: 'divider' }}
              >
                {menuItems.map((item) => (
                  <Tab
                    key={item.text}
                    label={item.text}
                    icon={item.icon}
                    sx={{ minHeight: 72 }}
                  />
                ))}
              </Tabs>
            </Paper>
          )}
          
          {menuItems[selectedTab].component}
        </Container>
      </Main>

      {!isMobile && (
        <StyledDrawer
          variant="permanent"
          anchor="right"
        >
          {drawer}
        </StyledDrawer>
      )}
    </Box>
  );
};

export default UserProfile;
