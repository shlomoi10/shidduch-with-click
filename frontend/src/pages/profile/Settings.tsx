import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Switch,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
} from '@mui/material';
import { useUserContext } from '../../context/UserContext';

const Settings = () => {
  const { userProfile, setUserProfile } = useUserContext();
  const [settings, setSettings] = useState([
    {
      title: 'התראות',
      description: 'קבלת התראות על הצעות שידוך חדשות',
      value: userProfile?.settings?.notifications ?? true,
    },
    {
      title: 'פרטיות',
      description: 'הצגת פרופיל למשתמשים מאומתים בלבד',
      value: userProfile?.settings?.privacy ?? true,
    },
    {
      title: 'עדכונים',
      description: 'קבלת עדכונים על שינויים במערכת',
      value: userProfile?.settings?.updates ?? false,
    },
  ]);

  const handleSettingChange = (index: number) => {
    const newSettings = [...settings];
    newSettings[index].value = !newSettings[index].value;
    setSettings(newSettings);

    if (userProfile && setUserProfile) {
      setUserProfile({
        ...userProfile,
        settings: {
          ...userProfile.settings,
          notifications: newSettings[0].value,
          privacy: newSettings[1].value,
          updates: newSettings[2].value,
        },
      });
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom align="center">
          הגדרות
        </Typography>
        <List>
          {settings.map((setting, index) => (
            <React.Fragment key={setting.title}>
              <ListItem>
                <ListItemText
                  primary={setting.title}
                  secondary={setting.description}
                  sx={{
                    textAlign: 'right',
                    '& .MuiListItemText-primary': {
                      fontWeight: 'bold',
                    },
                  }}
                />
                <ListItemSecondaryAction>
                  <Switch
                    edge="end"
                    checked={setting.value}
                    onChange={() => handleSettingChange(index)}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              {index < settings.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Settings;
