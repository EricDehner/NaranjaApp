import "./NaranjaPos.css"
import cards from "./cards"
import NaranjaPosItem from "../NaranjaPosItem/NaranjaPosItem"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";

const NaranjaPos = () => {

    if (window.innerWidth >= 768) {
        return (
            <section className="naranjaPos">
                <h2 className="naranjaPos_title">Naranja ERP</h2>
                <p className="naranjaPos_subtitle">Con Naranja Erp cuentas con un aliado al momento de facturar tus servicios:</p>
                <div className="naranjaPos_cards">
                    {cards.map(card => (
                        <div className="slide" key={card.id}>
                            <NaranjaPosItem id={card.id} image={card.image} description={card.description} />
                        </div>
                    ))}
                </div>
            </section>
        )
    } else if (window.innerWidth > 500) {
        return (
            <section className="naranjaPos">
            <h2 className="naranjaPos_title">Naranja Pos</h2>
            <p className="naranjaPos_subtitle">Con Naranja Erp cuentas con un aliado al momento de facturar tus servicios:</p>
            <div className="naranjaPos_cards">
                <Swiper
                    slidesPerView={2} spaceBetween={0} freeMode={false} pagination={{ clickable: true, }} modules={[FreeMode, Pagination]} className="mySwiper">                    {cards.map(card => (
                        <SwiperSlide className="slide" key={card.id}>
                            <NaranjaPosItem id={card.id} image={card.image} description={card.description} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
        )
    }

    return (
        <section className="naranjaPos">
            <h2 className="naranjaPos_title">Naranja Pos</h2>
            <p className="naranjaPos_subtitle">Con Naranja Erp cuentas con un aliado al momento de facturar tus servicios:</p>
            <div className="naranjaPos_cards">
                <Swiper
                    slidesPerView={1.4} spaceBetween={-50} freeMode={false} pagination={{ clickable: true, }} modules={[FreeMode, Pagination]} className="mySwiper">                    {cards.map(card => (
                        <SwiperSlide className="slide" key={card.id}>
                            <NaranjaPosItem id={card.id} image={card.image} description={card.description} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
export default NaranjaPos