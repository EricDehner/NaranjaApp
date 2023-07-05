import "./App.css";
import Ruta from "./Components/Ruta/Ruta";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Planes from "./Components/Planes/Planes";
import VideoTour from "./Components/VideoTour/VideoTour";
import NaranjaPos from "./Components/NaranjaPos/NaranjaPos";
import PreguntasFrecuentes from "./Components/PreguntasFrecuentes/PreguntasFrecuentes";
import PreguntasFrecuentes1 from "./Components/PreguntasFrecuentes/PreguntasFrecuentes1";
import CaracteristicasYFuncionalidades from "./Components/CaracteristicasYFuncionalidades/CaracteristicasYFuncionalidades";
import CaracteristicasYFuncionalidades1 from "./Components/CaracteristicasYFuncionalidades/CaracteristicasYFuncionalidades1";
import Beneficios from "./Components/Beneficios/Beneficios";
import NaranjaErp from "./Components/NaranjaErp/NaranjaErp";
import NaranjaErp1 from "./Components/NaranjaErp/NaranjaErp1";
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
      <NaranjaErp1 />
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
      <PreguntasFrecuentes1 />
      <Footer />
    </div>
  );
}

export default App;
