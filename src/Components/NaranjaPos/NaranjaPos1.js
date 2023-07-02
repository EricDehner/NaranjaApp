import "./NaranjaPos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cards from "./cards";
import NaranjaPosItem from "../NaranjaPosItem/NaranjaPosItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import cards1 from "./cards1";
import cards2 from "./cards2";
import cards3 from "./cards3";
import cards4 from "./cards4";

const NaranjaPos1 = () => {
  return (
    <section className="naranjaPos1">
      <h2 className="naranjaPos_title">Naranja Pos</h2>
      <p className="naranjaPos_subtitle">
        Con Naranja Erp cuentas con un aliado al momento de facturar tus
        servicios:
      </p>

      <Container>
        <Col>
          <Row>
            <div className="naranjaPos_cards">
              {cards1.map((card) => (
                <NaranjaPosItem
                  id={card.id}
                  image={card.image}
                  description={card.description}
                />
              ))}
            </div>
          </Row>
        </Col>
        <Col>
          <Row>
            <div className="naranjaPos_cards">
              {cards2.map((card) => (
                <NaranjaPosItem
                  id={card.id}
                  image={card.image}
                  description={card.description}
                />
              ))}
            </div>
          </Row>
        </Col>

        <Col>
          <Row>
            <div className="naranjaPos_cards">
              {cards3.map((card) => (
                <NaranjaPosItem
                  id={card.id}
                  image={card.image}
                  description={card.description}
                />
              ))}
            </div>
          </Row>
        </Col>

        <Col>
          <Row>
            <div className="naranjaPos_cards">
              {cards4.map((card) => (
                <NaranjaPosItem
                  id={card.id}
                  image={card.image}
                  description={card.description}
                />
              ))}
            </div>
          </Row>
        </Col>
      </Container>
    </section>
  );
};
export default NaranjaPos1;
