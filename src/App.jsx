import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import MedTabs from './components/MedTabs/MedTabs';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      <MedTabs />
      {/* <Services /> */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
