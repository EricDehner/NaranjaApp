import "./PreguntasFrecuentes.css"
import data from "./data.json"
import AccordionQuestions from "../AccordionQuestions/AccordionQuestions"
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
                        <AccordionQuestions {...data.pregunta1} />
                        <AccordionQuestions {...data.pregunta2} />
                        <AccordionQuestions {...data.pregunta3} />
                        <AccordionQuestions {...data.pregunta4} />
                        <AccordionQuestions {...data.pregunta5} />
                        <AccordionQuestions {...data.pregunta6} />
                        <AccordionQuestions {...data.pregunta7} />
                        <AccordionQuestions {...data.pregunta8} />
                        <AccordionQuestions {...data.pregunta9} />
                        <AccordionQuestions {...data.pregunta10} />
                        <AccordionQuestions {...data.pregunta11} />
                        <AccordionQuestions {...data.pregunta12} />
                        <AccordionQuestions {...data.pregunta13} />
                        <AccordionQuestions {...data.pregunta14} />
                        <AccordionQuestions {...data.pregunta15} />
                        <AccordionQuestions {...data.pregunta16} />
                        <AccordionQuestions {...data.pregunta17} />
                        <AccordionQuestions {...data.pregunta18} />
                        <AccordionQuestions {...data.pregunta19} />
                        <AccordionQuestions {...data.pregunta20} />
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
                    <AccordionQuestions {...data.pregunta1} />
                    <AccordionQuestions {...data.pregunta2} />
                    <AccordionQuestions {...data.pregunta3} />
                    <AccordionQuestions {...data.pregunta4} />
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