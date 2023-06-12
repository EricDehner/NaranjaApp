import "./CaracteristicasYFuncionalidades.css"
import CaracteristicasYFuncionalidadesItem from "../CaracteristicasYFuncionalidadesItem/CaracteristicasYFuncionalidadesItem";
import data from "./item"
import { useState } from "react";
import Vector from "./Assets/Vector.svg"

const CaracteristicasYFuncionalidades = () => {

    const itemsPreview = data.filter(data => data.position === "preview")
    const itemsComplete = data

    const [item, setItems] = useState(false);

    const toggleItems = () => {
        setItems(!item);
    };

    if (item === true) {
        return (
            <section className="caracteristicasYFuncionalidades">
                <h2 className="caracteristicasYFuncionalidades_title">Características y funcionalidades de Naranja ERP</h2>
                <p className="caracteristicasYFuncionalidades_description">Cuenta con todas características de un software administrativo</p>
                {itemsComplete.map(i => <CaracteristicasYFuncionalidadesItem key={i.id} id={i.id} image={i.image} title={i.title} list={i.list} />)}
                <button onClick={toggleItems} className="caracteristicasYFuncionalidades_button">
                    <p className="caracteristicasYFuncionalidades_button-text">Conocer menos</p>
                    <img className="caracteristicasYFuncionalidades_button-img--nonactive" src={Vector} alt="vector" />
                </button>
            </section>
        )
    }

    return (
        <section className="caracteristicasYFuncionalidades">
            <h2 className="caracteristicasYFuncionalidades_title">Características y funcionalidades de Naranja ERP</h2>
            <p className="caracteristicasYFuncionalidades_description">Cuenta con todas características de un software administrativo</p>
            {itemsPreview.map(i => <CaracteristicasYFuncionalidadesItem key={i.id} id={i.id} image={i.image} title={i.title} list={i.list} />)}
            <button onClick={toggleItems} className="caracteristicasYFuncionalidades_button">
                <p className="caracteristicasYFuncionalidades_button-text">Conocer más</p>
                <img className="caracteristicasYFuncionalidades_button-img--active" src={Vector} alt="vector" />
            </button>
        </section>
    )
}
export default CaracteristicasYFuncionalidades