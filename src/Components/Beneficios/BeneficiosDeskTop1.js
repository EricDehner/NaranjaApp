import BeneficiosItem from "../BeneficiosItem/BeneficiosItem";
import "./Beneficios.css";
import items from "./item.js";
import React, { useState } from "react";
import Vector from "./Assets/Vector.svg";
import itemCopy from "./itemCopy";
import itemCopy2 from "./itemCopy2";

const BeneficiosDeskTop1 = () => {
  const itemsPreview = itemCopy.filter((item) => item.position === "preview");
  const itemsComplete = itemCopy;

  const [beneficiosItems, setBeneficiosItems] = useState(true);

  const toggleQuestions = () => {
    setBeneficiosItems(!beneficiosItems);
  };

  return (
    <section className="beneficiosDesktop1">
      <h2 className="beneficios_title">
        Beneficios de pertenecer a Naranja Erp
      </h2>
      <p className="beneficios_subtitle">
        Con Naranja Erp cuentas además, con todas las ventajas de una plataforma
        Cloud o en la Nube, lo que te permitirá:
      </p>
      <div className="beneficios_content">
        <div className="beneficios_items">
          {(beneficiosItems ? itemsComplete : itemsPreview).map((i) => (
            <BeneficiosItem
              key={i.id}
              title={i.title}
              description={i.description}
              img={i.image}
              clarification={i.clarification}
            />
          ))}
        </div>{" "}
      </div>
    </section>
  );
};
export default BeneficiosDeskTop1;
