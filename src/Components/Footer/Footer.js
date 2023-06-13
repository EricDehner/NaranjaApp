import "./Footer.css"
import LogoNaranja from "./Assets/logo HORIZONTAL.svg"
import FondoEmprender from "./Assets/dww 1.svg"
import Presidencia from "./Assets/32e2 1.svg"
import Instagram from "./Assets/Vector-1.svg"
import Facebook from "./Assets/Vector.svg"
import Youtube from "./Assets/Vector-2.svg"

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer_acknowledgments">
                <h3 className="footer_acknowledgments-title title">Reconocimientos</h3>
                <img className="footer_acknowledgments-img fondoEmprender" src={FondoEmprender} alt="Fondo Emprendedor" />
                <img className="footer_acknowledgments-img presidencia" src={Presidencia} alt="Presidencia" />
                <img className="footer_acknowledgments-img logoNaranja" src={LogoNaranja} alt="Logo Naranja" />
            </div>
            <p className="footer_copyright">Copyright © 2021 Naranja Erp. Todos los derechos reservados.<br /> <a className="footer_copyright-anchor" rel="noreferrer" target="_blank" href="https://naranjaerp.com/politicas-de-privacidad/">política de privacidad</a></p>
            <div className="footer_networks">
                <img className="footer_networks-item" src={Instagram} alt="Instagram" />
                <img className="footer_networks-item" src={Facebook} alt="Facebook" />
                <img className="footer_networks-item" src={Youtube} alt="Youtube" />
            </div>
        </section>
    )
}
export default Footer