import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { ProfilePage } from './pages/ProfilePage';
import { MatchesPage } from './pages/MatchesPage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import { store } from './store';
import theme from './theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/matches" element={<MatchesPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
