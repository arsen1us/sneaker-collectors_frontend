import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import PopularSneakerCollection from './components/PopularSneakerCollections';
import HipeModels from './components/HipeModels';
import News from './components/News';
import TheMostInsaneCollectors from './components/TheMostInsaneCollectors';
import Footer from './components/Footer'; 

function App() {
  return (
    <div>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
