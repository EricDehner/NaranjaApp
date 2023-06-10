import "./PreguntasFrecuentes.css"
import data from "./data.json"
import Accordion from "../Accordion/Accordion"
import Vector from "./Assets/Vector.svg"
import React, { useState } from "react";


const PreguntasFrecuentes = () => {

    const [questions, setQuestions] = useState(false);

    const toggleQuestions = () => {
        setQuestions(!questions);
    };


    if (questions === true) {
        return (
            <section className="preguntasFrecuentes">
                <h2 className="preguntasFrecuentes_title">Preguntas frecuentes</h2>
                <div className="preguntasFrecuentes_content">
                    <div className="">
                        <Accordion {...data.pregunta1} />
                        <Accordion {...data.pregunta2} />
                        <Accordion {...data.pregunta3} />
                        <Accordion {...data.pregunta4} />
                        <Accordion {...data.pregunta5} />
                        <Accordion {...data.pregunta6} />
                        <Accordion {...data.pregunta7} />
                        <Accordion {...data.pregunta8} />
                        <Accordion {...data.pregunta9} />
                        <Accordion {...data.pregunta10} />
                        <Accordion {...data.pregunta11} />
                        <Accordion {...data.pregunta12} />
                        <Accordion {...data.pregunta13} />
                        <Accordion {...data.pregunta14} />
                        <Accordion {...data.pregunta15} />
                        <Accordion {...data.pregunta16} />
                        <Accordion {...data.pregunta17} />
                        <Accordion {...data.pregunta18} />
                        <Accordion {...data.pregunta19} />
                        <Accordion {...data.pregunta20} />
                    </div>
                    <button onClick={toggleQuestions} className="preguntasFrecuentes_button">
                        <p className="preguntasFrecuentes_button-text">Ver menos</p>
                        <img className="preguntasFrecuentes_button-img--nonactive" src={Vector} alt="vector" />
                    </button>
                </div>
            </section>
        )
    }

    return (
        <section className="preguntasFrecuentes">
            <h2 className="preguntasFrecuentes_title">Preguntas frecuentes</h2>
            <div className="preguntasFrecuentes_content">
                <div className="">
                    <Accordion {...data.pregunta1} />
                    <Accordion {...data.pregunta2} />
                    <Accordion {...data.pregunta3} />
                    <Accordion {...data.pregunta4} />
                </div>
                <button onClick={toggleQuestions} className="preguntasFrecuentes_button">
                    <p className="preguntasFrecuentes_button-text">Ver más</p>
                    <img className="preguntasFrecuentes_button-img" src={Vector} alt="vector" />
                </button>
            </div>
        </section>
    )
}
export default PreguntasFrecuentes