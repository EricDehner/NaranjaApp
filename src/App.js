import './App.css';
import Ruta from './Components/Ruta/Ruta';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Planes from './Components/Planes/Planes';
import VideoTour from './Components/VideoTour/VideoTour';
import NaranjaPos from './Components/NaranjaPos/NaranjaPos';
import PreguntasFrecuentes from './Components/PreguntasFrecuentes/PreguntasFrecuentes';
import CaracteristicasYFuncionalidades from './Components/CaracteristicasYFuncionalidades/CaracteristicasYFuncionalidades';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Ruta />
      <CaracteristicasYFuncionalidades />
      <VideoTour />
      <NaranjaPos />
      <Planes />
      <PreguntasFrecuentes />
      <Footer />
    </div>
  );
}

export default App;
