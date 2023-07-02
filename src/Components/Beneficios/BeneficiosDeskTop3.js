import BeneficiosItem from "../BeneficiosItem/BeneficiosItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Beneficios.css";
import items from "./item.js";
import React, { useState } from "react";
import Vector from "./Assets/Vector.svg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BeneficiosDeskTop = () => {
  const itemsPreview = items.filter((item) => item.position === "preview");
  const itemsComplete = items;

  const [beneficiosItems, setBeneficiosItems] = useState(true);

  const toggleQuestions = () => {
    setBeneficiosItems(!beneficiosItems);
  };

  return (
    <section className="beneficiosDesktop">
      <h2 className="beneficios_title">
        Beneficios de pertenecer a Naranja Erp
      </h2>
      <p className="beneficios_subtitle">
        Con Naranja Erp cuentas además, con todas las ventajas de una plataforma
        Cloud o en la Nube, lo que te permitirá:
      </p>
      <div className="beneficios_content">
        <div className="beneficios_items">
          <Container>
            <Row>
              <Col>
                {" "}
                <Card style={{ width: "25rem" }}>
                  <Card.Img variant="top" src="./Assets/1.svg" />
                  <Card.Body>
                    <Card.Title>Linea de soporte</Card.Title>
                    <Card.Text>
                      Contarás con acompañamiento y acceso a una línea de
                      soporte técnico para aclarar tus dudas
                    </Card.Text>
                    <Button variant="primary">
                      ¡Con naranja erp no estás solo!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                {" "}
                <Card style={{ width: "25rem" }}>
                  <Card.Img variant="top" src="./Assets/1.svg" />
                  <Card.Body>
                    <Card.Title>Naranja Academy</Card.Title>
                    <Card.Text>
                      Acceso exclusivo totalmente gratis a Naranja Academy, la
                      academia para fortalecer tus habilidades como emprendedor
                    </Card.Text>
                    <Button variant="primary">
                      ¡Con naranja erp tenés más!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                {" "}
                <Card style={{ width: "25rem" }}>
                  <Card.Img variant="top" src="./Assets/1.svg" />
                  <Card.Body>
                    <Card.Title className="bg-danger">
                      No tienes límites
                    </Card.Title>
                    <Card.Text>
                      Con NARANJA ERP tienes acceso a productos y usuarios
                      ilimitados
                    </Card.Text>
                    <Button variant="primary">
                      ¡Queremos que crezcas muy rápido!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                <Card style={{ width: "38rem" }}>
                  <Card.Img variant="top" src="./Assets/1.svg" />
                  <Card.Body>
                    <Card.Title className="bg-danger">
                      Linea de soporte
                    </Card.Title>
                    <Card.Text>
                      Contarás con acompañamiento y acceso a una línea de
                      soporte técnico para aclarar tus dudas
                    </Card.Text>
                    <Button variant="primary">
                      ¡Con naranja erp no estás solo!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                {" "}
                <Card style={{ width: "38rem" }}>
                  <Card.Img variant="top" src="./Assets/1.svg" />
                  <Card.Body>
                    <Card.Title className="bg-danger">
                      Linea de soporte
                    </Card.Title>
                    <Card.Text>
                      Contarás con acompañamiento y acceso a una línea de
                      soporte técnico para aclarar tus dudas
                    </Card.Text>
                    <Button variant="primary">
                      ¡Con naranja erp no estás solo!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col>
                {" "}
                <Card style={{ width: "38rem" }}>
                  <Card.Img variant="top" src="./Assets/1.svg" />
                  <Card.Body>
                    <Card.Title className="bg-danger">
                      Linea de soporte
                    </Card.Title>
                    <Card.Text>
                      Contarás con acompañamiento y acceso a una línea de
                      soporte técnico para aclarar tus dudas
                    </Card.Text>
                    <Button variant="primary">
                      ¡Con naranja erp no estás solo!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                {" "}
                <Card style={{ width: "38rem" }}>
                  <Card.Img variant="top" src="./Assets/1.svg" />
                  <Card.Body>
                    <Card.Title className="bg-danger">
                      Linea de soporte
                    </Card.Title>
                    <Card.Text>
                      Contarás con acompañamiento y acceso a una línea de
                      soporte técnico para aclarar tus dudas
                    </Card.Text>
                    <Button variant="primary">
                      ¡Con naranja erp no estás solo!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col>
                {" "}
                <Card style={{ width: "38rem" }}>
                  <Card.Img variant="top" src="./Assets/1.svg" />
                  <Card.Body>
                    <Card.Title className="bg-danger">
                      Linea de soporte
                    </Card.Title>
                    <Card.Text>
                      Contarás con acompañamiento y acceso a una línea de
                      soporte técnico para aclarar tus dudas
                    </Card.Text>
                    <Button variant="primary">
                      ¡Con naranja erp no estás solo!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                {" "}
                <Card style={{ width: "38rem" }}>
                  <Card.Img variant="top" src="./Assets/1.svg" />
                  <Card.Body>
                    <Card.Title className="bg-danger">
                      Linea de soporte
                    </Card.Title>
                    <Card.Text>
                      Contarás con acompañamiento y acceso a una línea de
                      soporte técnico para aclarar tus dudas
                    </Card.Text>
                    <Button variant="primary">
                      ¡Con naranja erp no estás solo!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};
export default BeneficiosDeskTop;
