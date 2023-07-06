import "./NavBar.css"
import Brand from "./Assets/logo.svg"

const NavBar = () => {


    if (window.innerWidth >= 768) {
        return (
            <section className="navBar">
                <img className="navBar_logo" src={Brand} alt="Logo" />
                <a rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=573136824424" className="navBar_btn"><p className="navBar_btn-content">Contactar</p></a>
            </section>
        )
    }
    return (
        <section className="navBar">
            <img className="navBar_logo" src={Brand} alt="Logo" />
        </section>
    )
}
export default NavBar