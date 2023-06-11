import "./CaracteristicasYFuncionalidadesItem.css"

const CaracteristicasYFuncionalidadesItem = ({ id, image, title, list }) => {

    const imagen = require(`${image}`)

    return (
        <div className="caracteristicasYFuncionalidadesItem" id={id}>
            <div className="caracteristicasYFuncionalidadesItem_img">
                <img  className="caracteristicasYFuncionalidadesItem_img-img" src={imagen} alt={title} />
            </div>
            <h3 className="caracteristicasYFuncionalidadesItem_title">{title}</h3>
            <ul className="caracteristicasYFuncionalidadesItem_list">
                {list.map((item) => (
                    <li className="caracteristicasYFuncionalidadesItem_list-item" key={item}>
                        {item}
                    </li>
                ))}
            </ul>

        </div>
    )
}
export default CaracteristicasYFuncionalidadesItem