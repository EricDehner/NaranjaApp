import "./NavBar.css"
import Brand from "./Assets/logo.svg"
import Boton from "./Assets/Boton.png"


const NavBar = () => {
    return (
        <section className="navBar">
            <img className="navBar_logo" src={Brand} alt="Logo" />
            <button className="navBar_button"><img className="navBar_logo" src={Boton}></img></button>
            
            </section>
    )
}
export default NavBar