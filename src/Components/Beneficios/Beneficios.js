import BeneficiosItem from "../BeneficiosItem/BeneficiosItem";
import "./Beneficios.css"
import items from "./item.js"
import React, { useState } from "react";
import Vector from "./Assets/Vector.svg"

const Beneficios = () => {

    const itemsPreview = items.filter(item => item.position === "preview")
    const itemsComplete = items

    const [beneficiosItems, setBeneficiosItems] = useState(false);

    const toggleQuestions = () => {
        setBeneficiosItems(!beneficiosItems);
    };

    return (
        <section className="beneficios">
            <h2 className="beneficios_title">Beneficios de pertenecer a Naranja Erp</h2>
            <p className="beneficios_subtitle">Con Naranja Erp cuentas además, con todas las ventajas de una plataforma Cloud o en la Nube, lo que te permitirá:</p>
            <div className="beneficios_content">
                <div>
                    {(beneficiosItems ? itemsComplete : itemsPreview).map(i => <BeneficiosItem key={i.id} title={i.title} description={i.description} img={i.image} clarification={i.clarification} />)}
                </div>
                <button onClick={toggleQuestions} className="beneficios_content-button">
                    <p className="beneficios_content-button--text"> {beneficiosItems ? "Ocultar" : "Conocer más"} </p>
                    <img className={beneficiosItems ? "beneficios_content-button--img---nonactive" : "beneficios_content-button--img---active"} src={Vector} alt="vector" />
                </button>
            </div>
        </section>
    )
}
export default Beneficios