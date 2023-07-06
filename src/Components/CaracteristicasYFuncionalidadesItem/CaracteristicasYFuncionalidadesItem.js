import "./CaracteristicasYFuncionalidadesItem.css"

const CaracteristicasYFuncionalidadesItem = ({ id, image, title, list }) => {

    const imagen = require(`${image}`)

    if (window.innerWidth >= 768) {
        return (
            <div className="caracteristicasYFuncionalidadesItem" id={id}>
                <div className="caracteristicasYFuncionalidadesItem_img">
                    <img className="caracteristicasYFuncionalidadesItem_img-img" src={imagen} alt={title} />
                </div>
                <div className="caracteristicasYFuncionalidadesItem_content">
                    <h3 className="caracteristicasYFuncionalidadesItem_title">{title}</h3>
                    <ul className="caracteristicasYFuncionalidadesItem_list">
                        {list.map((item) => (
                            <li className="caracteristicasYFuncionalidadesItem_list-item" key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <div className="caracteristicasYFuncionalidadesItem" id={id}>
            <div className="caracteristicasYFuncionalidadesItem_img">
                <img className="caracteristicasYFuncionalidadesItem_img-img" src={imagen} alt={title} />
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