import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MedTabs from './components/MedTabs/MedTabs';
import CoursesGrid from './components/CoursesGrid/CoursesGrid';
import Footer from './components/Footer/Footer';
import Metrology from './pages/Metrology/Metrology';
import Safety from './pages/Safety/Safety';
import Construction from './pages/Construction/Construction';
import FireSafety from './pages/FireSafety/FireSafety';
import WorkSpecialties from './pages/WorkSpecialties/WorkSpecialties';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <MedTabs />
              <CoursesGrid />
            </>
          }
        />

        <Route path="/courses/metrology" element={<Metrology />} />
        <Route path="/courses/safety" element={<Safety />} />
        <Route path="/courses/fire" element={<FireSafety />} />
        <Route path="/courses/construction" element={<Construction />} />
        <Route path="/courses/work" element={<WorkSpecialties />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
