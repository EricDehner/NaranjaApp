import "./NavBar.css"
import Brand from "./Assets/logo.svg"

const NavBar = () => {
    return (
        <section className="navBar">
            <img className="navBar_logo" src={Brand} alt="Logo" />
        </section>
    )
}
export default NavBar