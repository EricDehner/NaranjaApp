import BeneficiosItem from "../BeneficiosItem/BeneficiosItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Beneficios.css";
import items from "./item.js";
import React, { useState } from "react";
import Vector from "./Assets/Vector.svg";
import itemCopy3 from "./itemCopy3";
import itemCopy4 from "./itemCopy4";
import itemCopy2 from "./itemCopy2";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const BeneficiosDeskTop2 = () => {
  const itemsPreview = itemCopy2.filter((item) => item.position === "preview");
  const itemsComplete = itemCopy2;

  const itemsPreview3 = itemCopy3.filter((item) => item.position === "preview");
  const itemsComplete3 = itemCopy3;

  const itemsPreview4 = itemCopy4.filter((item) => item.position === "preview");
  const itemsComplete4 = itemCopy4;

  const [beneficiosItems, setBeneficiosItems] = useState(true);

  const toggleQuestions = () => {
    setBeneficiosItems(!beneficiosItems);
  };

  return (
    <section className="beneficiosDesktop2">
      <Container>
        <Col>
          <Row>
            <div className="beneficios_content2">
              <div className="beneficios_items2">
                {(beneficiosItems ? itemsComplete : itemsPreview).map((i) => (
                  <BeneficiosItem
                    key={i.id}
                    title={i.title}
                    description={i.description}
                    img={i.image}
                    clarification={i.clarification}
                  />
                ))}
              </div>
            </div>
          </Row>
        </Col>
        <Col>
          <Row>
            <div className="beneficios_content">
              <div className="beneficios_items2">
                {(beneficiosItems ? itemsComplete3 : itemsPreview3).map((i) => (
                  <BeneficiosItem
                    key={i.id}
                    title={i.title}
                    description={i.description}
                    img={i.image}
                    clarification={i.clarification}
                  />
                ))}
              </div>
            </div>
          </Row>
        </Col>

        <Col>
          <Row>
            <div className="beneficios_content">
              <div className="beneficios_items2">
                {(beneficiosItems ? itemsComplete4 : itemsPreview4).map((i) => (
                  <BeneficiosItem
                    key={i.id}
                    title={i.title}
                    description={i.description}
                    img={i.image}
                    clarification={i.clarification}
                  />
                ))}
              </div>
            </div>
          </Row>
        </Col>
      </Container>
    </section>
  );
};
export default BeneficiosDeskTop2;
