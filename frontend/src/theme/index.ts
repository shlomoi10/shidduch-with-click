import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import { createTheme } from '@mui/material';
import { heIL } from '@mui/material/locale';

// Create rtl cache
export const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
  prepend: true,
});

// Create rtl theme
export const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: '"Rubik", "Assistant", Arial, sans-serif',
    h1: {
      fontFamily: 'Rubik',
      fontWeight: 500,
    },
    h2: {
      fontFamily: 'Rubik',
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'Assistant',
    },
    body2: {
      fontFamily: 'Assistant',
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          direction: 'rtl',
          backgroundColor: '#f5f5f5',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          direction: 'rtl',
          textAlign: 'right',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          direction: 'rtl',
        },
        input: {
          textAlign: 'right',
        },
      },
    },
  },
}, heIL);

export default theme;
