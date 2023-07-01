import "./NavBar.css"
import Brand from "./Assets/logo.svg"



const NavBar = () => {
    return (
        <section className="navBar">
            <img className="navBar_logo" src={Brand} alt="Logo" />
            <button className="navBar_button" >Contratar</button>
         
            </section>
    )
}
export default NavBar