import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import MensList from './features/clothing/MensList.js';
//import ClothingDirectoryPage from './pages/ClothingDirectoryPage';
// import ClothingCard from './features/clothing/ClothingCard.js';
// import {MENS} from './app/shared/MENS';

function App() {
    return (
        <div className='App'>
          <Header />
          {/* <ClothingDirectoryPage /> */}
          {/* <ClothingCard clothing= {MENS[0]} /> */}
          <MensList />
          <Footer />
        </div>
    );
}

export default App;