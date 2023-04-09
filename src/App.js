import './App.css';
import AutoSldier from './components/carouselplayer/AutoSlider';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='body'>
        <AutoSldier/> 
      </div>
      <Footer/>      
    </div>
  );
}

export default App;
