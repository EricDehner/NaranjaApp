import "./Ruta.css"
import ImagenRuta from "./Assets/134 1.svg"
import ImagenRuta1 from "./Assets/Line 58.svg"

const Ruta = () => {
    return (
        <section className="ruta">
            <div className="ruta_image">
                <img className="ruta_image-img" src={ImagenRuta} alt="ImagenRuta" />
                <img className="ruta_image-stick" src={ImagenRuta1} alt="ImagenRuta" />
            </div> <div className="ruta_route">
            <h2 className="ruta_title">La ruta que te acercará a<br /> NARANJA ERP</h2>
           
                <div className="ruta_route-item">
                    <p className="ruta_route-item--number">1</p>
                    <p className="ruta_route-item--description">Pide un tour de Naranja Erp dejando tus datos</p>
                </div>
                <div className="ruta_route-item">
                    <p className="ruta_route-item--number">2</p>
                    <p className="ruta_route-item--description">Decidete por la experiencia de Naranja Erp</p>
                </div>
                <div className="ruta_route-item">
                    <p className="ruta_route-item--number">3</p>
                    <p className="ruta_route-item--description">Adquiere tu plan</p>
                </div>
                <div className="ruta_route-item">
                    <p className="ruta_route-item--number">4</p>
                    <p className="ruta_route-item--description">Capacítate en la herramienta</p>
                </div>
                <div className="ruta_route-item">
                    <p className="ruta_route-item--number">5</p>
                    <p className="ruta_route-item--description">Accede gratis a Naranja Academy y<br /> fortalece tus habilidades blandas</p>
                </div>
                <div className="ruta_route-stick"></div>
            </div>
        </section>
    )
}
export default Ruta