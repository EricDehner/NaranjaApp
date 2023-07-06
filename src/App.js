import './App.css';
import Ruta from './Components/Ruta/Ruta';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Planes from './Components/Planes/Planes';
import VideoTour from './Components/VideoTour/VideoTour';
import NaranjaPos from './Components/NaranjaPos/NaranjaPos';
import PreguntasFrecuentes from './Components/PreguntasFrecuentes/PreguntasFrecuentes';
import CaracteristicasYFuncionalidades from './Components/CaracteristicasYFuncionalidades/CaracteristicasYFuncionalidades';
import Beneficios from './Components/Beneficios/Beneficios';
import NaranjaErp from './Components/NaranjaErp/NaranjaErp';
import Hero from './Components/Hero/Hero';
import { useState, useEffect } from "react";

import useDeviceSize from './Components/Resize/Resize.js';
function App() {

  const [isMobile, setIsMobile] = useState(true);
  const arrayWidth = useDeviceSize();
  const width = arrayWidth[0];

  useEffect(() => {
    if (width >= 425) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [width, isMobile]);


  return (
    <div className="App">
      <NavBar />
      <div className="App_heroDesktop">
        <Hero />
        <NaranjaErp />
      </div>
      <Beneficios />
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
