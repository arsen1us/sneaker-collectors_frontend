import './App.css';
import Header from './components/Header'; 
import PageDeveloping from './components/PageDeveloping';
import PopularSneakerCollection from './components/PopularSneakerCollections'; 
import HipeModels from './components/HipeModels';
import News from './components/News';
import TheMostInsaneCollectors from './components/TheMostInsaneCollectors';
import Footer from './components/Footer'; 


function App() {
  return (
    <div>
      <Header/>
      <PopularSneakerCollection/>
      <HipeModels/>
      <News/>
      <TheMostInsaneCollectors/>
      <Footer/>
    </div>
  );
}

export default App;
