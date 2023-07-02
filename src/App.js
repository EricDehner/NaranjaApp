import "./App.css";
import Ruta from "./Components/Ruta/Ruta";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Planes from "./Components/Planes/Planes";
import VideoTour from "./Components/VideoTour/VideoTour";
import NaranjaPos from "./Components/NaranjaPos/NaranjaPos";
import PreguntasFrecuentes from "./Components/PreguntasFrecuentes/PreguntasFrecuentes";
import CaracteristicasYFuncionalidades from "./Components/CaracteristicasYFuncionalidades/CaracteristicasYFuncionalidades";
import CaracteristicasYFuncionalidades1 from "./Components/CaracteristicasYFuncionalidades/CaracteristicasYFuncionalidades1";
import Beneficios from "./Components/Beneficios/Beneficios";
import NaranjaErp from "./Components/NaranjaErp/NaranjaErp";
import Hero from "./Components/Hero/Hero";
import BeneficiosDeskTop1 from "./Components/Beneficios/BeneficiosDeskTop1";
import BeneficiosDeskTop2 from "./Components/Beneficios/BeneficiosDeskTop2";
import NaranjaPos1 from "./Components/NaranjaPos/NaranjaPos1";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <NaranjaErp />
      <Beneficios />
      <BeneficiosDeskTop1 />
      <BeneficiosDeskTop2 />
      <Ruta />
      <CaracteristicasYFuncionalidades />
      <CaracteristicasYFuncionalidades1 />
      <VideoTour />
      <NaranjaPos />
      <NaranjaPos1 />
      <Planes />
      <PreguntasFrecuentes />
      <Footer />
    </div>
  );
}

export default App;
