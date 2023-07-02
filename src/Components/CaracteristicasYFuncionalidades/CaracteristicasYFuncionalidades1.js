import "./CaracteristicasYFuncionalidades.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CaracteristicasYFuncionalidadesItem from "../CaracteristicasYFuncionalidadesItem/CaracteristicasYFuncionalidadesItem";
import data from "./item";
import { useState } from "react";
import Vector from "./Assets/Vector.svg";
import items1 from "./item1";
import items2 from "./item2";
import items3 from "./item3";
import items4 from "./item4";

const CaracteristicasYFuncionalidades1 = () => {
  const itemsPreview = data.filter((data) => data.position === "preview");
  const itemsComplete = data;

  const itemsPreview1 = items1.filter((data) => data.position === "preview");
  const itemsComplete1 = items1;

  const itemsPreview2 = items2.filter((data) => data.position === "preview");
  const itemsComplete2 = items2;

  const itemsPreview3 = items3.filter((data) => data.position === "preview");
  const itemsComplete3 = items3;

  const itemsPreview4 = items4.filter((data) => data.position === "preview");
  const itemsComplete4 = items4;

  const [item, setItems] = useState(true);

  const toggleItems = () => {
    setItems(!item);
  };

  return (
    <section className="caracteristicasYFuncionalidades1">
      <Container>
        <Col>
          <Row>
            <h2 className="caracteristicasYFuncionalidades_title">
              Características y funcionalidades de Naranja ERP
            </h2>
            <p className="caracteristicasYFuncionalidades_description">
              Cuenta con todas características de un software administrativo
            </p>
          </Row>
        </Col>

        <Col>
          <Row>
            <div className="caracteristicasYFuncionalidadesItem1">
              {(item ? itemsComplete2 : itemsPreview2).map((i) => (
                <CaracteristicasYFuncionalidadesItem
                  key={i.id}
                  id={i.id}
                  image={i.image}
                  title={i.title}
                  list={i.list}
                />
              ))}
            </div>
          </Row>
        </Col>

        <Col>
          <Row>
            <div className="caracteristicasYFuncionalidadesItem2">
              {(item ? itemsComplete3 : itemsPreview3).map((i) => (
                <CaracteristicasYFuncionalidadesItem
                  key={i.id}
                  id={i.id}
                  image={i.image}
                  title={i.title}
                  list={i.list}
                />
              ))}
            </div>
          </Row>
        </Col>

        <Col>
          <Row>
            <div className="caracteristicasYFuncionalidadesItem3">
              {(item ? itemsComplete4 : itemsPreview4).map((i) => (
                <CaracteristicasYFuncionalidadesItem
                  key={i.id}
                  id={i.id}
                  image={i.image}
                  title={i.title}
                  list={i.list}
                />
              ))}
            </div>
          </Row>
        </Col>

        <Col>
          <Row>
            <div className="caracteristicasYFuncionalidadesItem4">
              {(item ? itemsComplete1 : itemsPreview1).map((i) => (
                <CaracteristicasYFuncionalidadesItem
                  key={i.id}
                  id={i.id}
                  image={i.image}
                  title={i.title}
                  list={i.list}
                />
              ))}
            </div>
          </Row>
        </Col>
      </Container>
    </section>
  );
};
export default CaracteristicasYFuncionalidades1;
