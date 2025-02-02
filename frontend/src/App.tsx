import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { he } from 'date-fns/locale';
import theme from './theme';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import InitialRegistrationPage from './pages/registration/InitialRegistrationPage';
import PersonalDetailsForm from './pages/registration/PersonalDetailsForm';
import UserProfile from './pages/profile/UserProfile';
import { UserProvider as UserContextProvider } from './context/UserContext';
import { store } from './store';
import { Provider } from 'react-redux';

const App = () => {
  const handlePersonalDetailsSubmit = (data: any) => {
    console.log('Personal details submitted:', data);
    // Handle form submission logic here
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={he}>
          <UserContextProvider>
            <Router>
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route
                    path="/register"
                    element={<InitialRegistrationPage />}
                  />
                  <Route
                    path="/register/personal-details"
                    element={
                      <PersonalDetailsForm onSubmit={handlePersonalDetailsSubmit} />
                    }
                  />
                  <Route path="/profile/*" element={<UserProfile />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Layout>
            </Router>
          </UserContextProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
