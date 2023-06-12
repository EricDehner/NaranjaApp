import "./PreguntasFrecuentes.css"
import data from "./questions.js"
import AccordionQuestions from "../AccordionQuestions/AccordionQuestions"
import Vector from "./Assets/Vector.svg"
import React, { useState } from "react";

const PreguntasFrecuentes = () => {

    const questionsPreview = data.filter(data => data.position === "preview")
    const questionsComplete = data

    const [questions, setQuestions] = useState(false);

    const toggleQuestions = () => {
        setQuestions(!questions);
    };

    if (questions === true) {

        return (
            <section className="preguntasFrecuentes">
                <h2 className="preguntasFrecuentes_title">Preguntas frecuentes</h2>
                <div className="preguntasFrecuentes_content">
                    <div>
                        {questionsComplete.map(q => <AccordionQuestions key={q.id} question={q.question} answer={q.answer} />)}
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
                <div>
                    {questionsPreview.map(q => <AccordionQuestions key={q.id} question={q.question} answer={q.answer} />)}
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