import "./NaranjaErpItem.css"

const NaranjaErpItem = ({ id, image, description }) => {

    const imagen = require(`${image}`)

    return (
        <section className="naranjaErpItem" id={id} >
            <img className="naranjaErpItem_img" src={imagen} alt="card img" />
            <p className="naranjaErpItem_description">{description}</p>
        </section>
    )
}
export default NaranjaErpItem