import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import MensPage from './pages/MensPage';
import WomensPage from './pages/WomensPage';
import ReleasesPage from './pages/ReleasesPage';
import AboutPage from './pages/AboutPage';

function App() {
    return (
        <div className='App'>
          <Header />
          <Routes>
            <Route path= '/' element={<HomePage />} />
            <Route path='mens' element={<MensPage />} />
            <Route path='womens' element={<WomensPage />} />
            <Route path='newreleases' element={<ReleasesPage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='contact' element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
    );
}

export default App;