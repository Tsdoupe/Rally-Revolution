import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
//import ClothingCard from './features/clothing/ClothingCard.js';

function App() {
    return (
        <div className='App'>
          <Header />
          Page start without pics or info
          {/* <ClothingCard />
            Need to add clothing={CLOTHING[0]} to clothing card component once we have array of pics */}
          <Footer />
        </div>
    );
}

export default App;