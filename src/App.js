import './App.css';
import CaracteristicasYFuncionalidades from './Components/CaracteristicasYFuncionalidades/CaracteristicasYFuncionalidades';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Planes from './Components/Planes/Planes';
import PreguntasFrecuentes from './Components/PreguntasFrecuentes/PreguntasFrecuentes';
import Ruta from './Components/Ruta/Ruta';
import VideoTour from './Components/VideoTour/VideoTour';
import NaranjaPos from './Components/NaranjaPos/NaranjaPos';

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
