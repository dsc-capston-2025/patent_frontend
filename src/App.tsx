import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { Header, Footer } from './components/layout';
import { LandingPage } from './pages/LandingPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <LandingPage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

