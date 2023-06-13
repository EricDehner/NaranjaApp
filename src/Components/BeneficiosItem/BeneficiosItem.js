import "./BeneficiosItem.css"

const BeneficiosItem = ({ id, title, img, description, clarification }) => {

    const imagen = require(`${img}`)

    return (
        <div className="beneficiosItem" id={id}>
            <div className={clarification ? "beneficiosItem_header-preview" : "beneficiosItem_header"}>
                <img className="beneficiosItem_header-img" src={imagen} alt={title} />
                <h3 className="beneficiosItem_header-title">{title}</h3>
            </div>
            <div className="beneficiosItem_content">
                <p className="beneficiosItem_content-text">{description}</p>
                {clarification ? (<p className="beneficiosItem_content-clarification">{clarification}</p>) : ""}
            </div>
        </div >
    )
}
export default BeneficiosItem