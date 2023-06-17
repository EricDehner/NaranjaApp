import "./NaranjaPosItem.css"

const NaranjaPosItem = ({ id, image, description }) => {

    const imagen = require(`${image}`)

    return (
        <section className="naranjaPosItem" id={id} >
            <img className="naranjaPosItem_img" src={imagen} alt="card img" />
            <p className="naranjaPosItem_description">{description}</p>
        </section>
    )
}
export default NaranjaPosItem