import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import InitialRegistrationPage from './pages/registration/InitialRegistrationPage';
import PersonalDetailsForm from './pages/registration/PersonalDetailsForm';
import EducationForm from './pages/registration/EducationForm';
import RegistrationComplete from './pages/registration/RegistrationComplete';
import UserProfile from './pages/profile/UserProfile';
import Matches from './pages/profile/Matches';
import { store } from './store';
import theme from './theme';
import { UserProvider } from './context/UserContext';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<InitialRegistrationPage />} />
                <Route path="/register/personal" element={<PersonalDetailsForm />} />
                <Route path="/register/education" element={<EducationForm />} />
                <Route path="/register/complete" element={<RegistrationComplete />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Layout>
          </Router>
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
