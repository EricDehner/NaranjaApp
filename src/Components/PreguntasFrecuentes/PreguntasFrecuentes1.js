import "./PreguntasFrecuentes.css"
import data from "./questions.js"
import AccordionQuestions from "../AccordionQuestions/AccordionQuestions"
import Vector from "./Assets/Vector.svg"
import React, { useState } from "react";

const PreguntasFrecuentes = () => {

    const questionsPreview = data.filter(data => data.position === "preview")
    const questionsComplete = data


    const [questions, setQuestions] = useState(true);

    const toggleQuestions = () => {
        setQuestions(!questions);
    };

    return (
        <section className="preguntasFrecuentes1">
            <h2 className="preguntasFrecuentes_title">Preguntas frecuentes</h2>
            <div className="preguntasFrecuentes_content">
                <div>
                    {(questions ? questionsComplete : questionsPreview).map(q => <AccordionQuestions key={q.id} question={q.question} answer={q.answer} />)}
                </div>
               
            </div>
        </section>
    )
}
export default PreguntasFrecuentes