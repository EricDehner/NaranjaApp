import "./CaracteristicasYFuncionalidades.css"
import CaracteristicasYFuncionalidadesItem from "../CaracteristicasYFuncionalidadesItem/CaracteristicasYFuncionalidadesItem";
import data from "./data.json"
import { useState } from "react";
import Vector from "./Assets/Vector.svg"

const CaracteristicasYFuncionalidades = () => {

    const [item, setItems] = useState(false);

    const toggleItems = () => {
        setItems(!item);
    };

    if (item === true) {
        return (
            <section className="caracteristicasYFuncionalidades">
            <h2 className="caracteristicasYFuncionalidades_title">Características y funcionalidades de Naranja ERP</h2>
            <p className="caracteristicasYFuncionalidades_description">Cuenta con todas características de un software administrativo</p>
                <CaracteristicasYFuncionalidadesItem {...data.item1} />
                <CaracteristicasYFuncionalidadesItem {...data.item2} />
                <CaracteristicasYFuncionalidadesItem {...data.item3} />
                <CaracteristicasYFuncionalidadesItem {...data.item4} />
                <CaracteristicasYFuncionalidadesItem {...data.item5} />
                <CaracteristicasYFuncionalidadesItem {...data.item6} />
                <CaracteristicasYFuncionalidadesItem {...data.item7} />
                <CaracteristicasYFuncionalidadesItem {...data.item8} />
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
            <CaracteristicasYFuncionalidadesItem {...data.item1} />
            <CaracteristicasYFuncionalidadesItem {...data.item2} />
            <CaracteristicasYFuncionalidadesItem {...data.item3} />
            <CaracteristicasYFuncionalidadesItem {...data.item4} />
            <button onClick={toggleItems} className="caracteristicasYFuncionalidades_button">
                <p className="caracteristicasYFuncionalidades_button-text">Conocer más</p>
                <img className="caracteristicasYFuncionalidades_button-img--active" src={Vector} alt="vector" />
            </button>
        </section>
    )
}
export default CaracteristicasYFuncionalidades