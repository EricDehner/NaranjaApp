import "./NavBar.css"
import Brand from "./Assets/logo.svg"



const NavBar = () => {
    return (
        <section className="navBar">
            <img className="navBar_logo" src={Brand} alt="Logo" />
          
                <a className="navBar_button" href="https://api.whatsapp.com/send?phone=573136824424&text=Hola Naranja Erp, quiero contratar tu servicio" rel="noreferrer" target="blank">Contratar</a>   
         
            </section>
    )
}
export default NavBar