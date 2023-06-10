import './App.css';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Planes from './Components/Planes/Planes';
import Ruta from './Components/Ruta/Ruta';
import VideoTour from './Components/VideoTour/VideoTour';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Ruta/>
      <VideoTour/>
      <Planes />
      <Footer />
    </div>
  );
}

export default App;
